import React from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import { COLORS, icons, GOOGLE_API_KEY, SIZES, FONTS } from '../constants';

const OrderDelivery = ({ navigation, route }) => {
  const mapView = React.useRef();

  const [restaurant, setRestaurant] = React.useState(null);
  const [streetName, setStreetName] = React.useState('');
  const [fromLocation, setFromLocation] = React.useState(null);
  const [toLocation, setToLocation] = React.useState(null);
  const [region, setRegion] = React.useState(null);

  const [duration, setDuration] = React.useState(0);
  const [isReady, setIsReady] = React.useState(false);
  const [angle, setAngle] = React.useState(0);

  React.useEffect(() => {
    let { restaurant, currentLocation } = route.params;
    console.log('OrderDelivery restaurant: ', restaurant);
    console.log('OrderDelivery currentLocation: ', currentLocation);

    let fromLoc = currentLocation.gps;
    let toLoc = restaurant.location;
    let street = currentLocation.streetName;

    let mapRegion = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    };

    setRestaurant(restaurant);
    setStreetName(street);
    setFromLocation(fromLoc);
    setToLocation(toLoc);
    setRegion(mapRegion);
  }, []);

  const renderMap = () => {
    console.log('PROVIDER_GOOGLE: ', PROVIDER_GOOGLE);
    const destinationMarker = () => {
      return (
        <Marker coordinate={toLocation}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.white,
            }}>
            <View
              style={{
                height: 38,
                width: 38,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
              }}>
              <Image
                source={icons.pin}
                style={{ width: 25, height: 25, tintColor: COLORS.white }}
              />
            </View>
          </View>
        </Marker>
      );
    };

    const carIcon = () => (
      <Marker
        coordinate={fromLocation}
        anchor={{ x: 0.5, y: 0.5 }}
        flat={true}
        rotation={angle}>
        <Image source={icons.car} style={{ width: 40, height: 40 }} />
      </Marker>
    );

    console.log('fromLocation: ', fromLocation);
    console.log('toLocation: ', toLocation);
    console.log('GOOGLE_API_KEY: ', GOOGLE_API_KEY);

    return (
      <View style={{ flex: 1 }}>
        <MapView
          ref={mapView}
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
          // initialRegion={initialRegion}
        >
          {destinationMarker()}
          {carIcon()}
          <MapViewDirections
            origin={fromLocation}
            destination={toLocation}
            apikey={GOOGLE_API_KEY}
            strokeColor={COLORS.primary}
            strokeWidth={5}
            optimizeWaypoints={true}
            // lineCap="square"
            // lineJoin="miter"
            // miterLimit={11}
            // geodesic
            // lineDashPattern={[50, 50]}
            // onReady={(result)=> result.}
            onReady={result => {
              console.log('onReady result: ', result);
              setDuration(result.duration);
              if (!isReady) {
                // Fit route into maps
                mapView.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: SIZES.width / 20,
                    bottom: SIZES.height / 4,
                    left: SIZES.width / 20,
                    top: SIZES.height / 8,
                  },
                });

                // Reposition the car
                let nextLoc = {
                  latitude: result.coordinates[0].latitude,
                  longitude: result.coordinates[0].longitude,
                };

                if (result.coordinates.length >= 2) {
                  let angle = calculateAngle(result.coordinates);
                  setAngle(angle);
                }

                setFromLocation(nextLoc);
                setIsReady(true);
              }
            }}
          />
        </MapView>
      </View>
    );
  };

  function renderDestinationHeader() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 50,
          left: 0,
          right: 0,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: "red",
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: SIZES.width * 0.9,
            paddingVertical: SIZES.padding,
            paddingHorizontal: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
          }}>
          <Image
            source={icons.red_pin}
            style={{
              width: 30,
              height: 30,
              marginRight: SIZES.padding,
            }}
          />

          <View style={{ flex: 1 }}>
            <Text style={{ ...FONTS.body3 }}>{streetName}</Text>
          </View>

          <Text style={{ ...FONTS.body3 }}>{Math.ceil(duration)} mins</Text>
        </View>
      </View>
    );
  }

  function renderDeliveryInfo() {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: SIZES.width * 0.9,
            paddingVertical: SIZES.padding * 3,
            paddingHorizontal: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* Avatar */}
            <Image
              source={restaurant?.courier.avatar}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            />

            <View style={{ flex: 1, marginLeft: SIZES.padding }}>
              {/* Name & Rating */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{ ...FONTS.h4 }}>{restaurant?.courier.name}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={icons.star}
                    style={{
                      width: 18,
                      height: 18,
                      tintColor: COLORS.primary,
                      marginRight: SIZES.padding,
                    }}
                  />
                  <Text style={{ ...FONTS.body3 }}>{restaurant?.rating}</Text>
                </View>
              </View>

              {/* Restaurant */}
              <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>
                {restaurant?.name}
              </Text>
            </View>
          </View>

          {/* Buttons */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: SIZES.padding * 2,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 50,
                marginRight: 10,
                backgroundColor: COLORS.primary,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}
              onPress={() => navigation.navigate('Home')}>
              <Text style={{ ...FONTS.h4, color: COLORS.white }}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                height: 50,
                backgroundColor: COLORS.secondary,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}
              onPress={() => navigation.goBack()}>
              <Text style={{ ...FONTS.h4, color: COLORS.white }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function calculateAngle(coordinates) {
    let startLat = coordinates[0].latitude;
    let startLng = coordinates[0].longitude;
    let endLat = coordinates[1].latitude;
    let endLng = coordinates[1].longitude;
    let dx = endLat - startLat;
    let dy = endLng - startLng;

    return (Math.atan2(dy, dx) * 180) / Math.PI;
  }

  function zoomIn() {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    };

    setRegion(newRegion);
    mapView.current.animateToRegion(newRegion, 200);
  }

  function zoomOut() {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    };

    setRegion(newRegion);
    mapView.current.animateToRegion(newRegion, 200);
  }

  function renderButtons() {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: SIZES.height * 0.35,
          right: SIZES.padding * 2,
          width: 60,
          height: 130,
          justifyContent: 'space-between',
        }}>
        {/* Zoom In */}
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.white,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => zoomIn()}>
          <Text style={{ ...FONTS.body1 }}>+</Text>
        </TouchableOpacity>

        {/* Zoom Out */}
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.white,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => zoomOut()}>
          <Text style={{ ...FONTS.body1 }}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderMap()}
      {renderDestinationHeader()}
      {renderDeliveryInfo()}
      {renderButtons()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default OrderDelivery;
