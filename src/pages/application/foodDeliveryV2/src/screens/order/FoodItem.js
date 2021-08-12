import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
const w = Dimensions.get('screen').width;
const FoodItem = ({ data, isDelivery, fee }) => {
  //   console.log('data: ', data);
  if (data.isDelivery) {
    return (
      <View style={styles.container}>
        <View style={styles.imgCon}>
          <Image
            style={styles.imageCon}
            source={require('../../assets/images/car.png')}
            resizeMode="contain"
          />
        </View>

        <View style={styles.body}>
          <Text style={styles.name}>{data.name}</Text>
          {/* <Text style={styles.restaurant}>{data.restaurant}</Text> */}
        </View>

        <View style={styles.end}>
          <Text style={styles.total}>
            ${Number(data.price).toFixed(2)}x{data.quantity}
          </Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={data.image} />
      <View style={styles.body}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.restaurant}>{data.restaurant}</Text>
      </View>

      <View style={styles.end}>
        <Text style={styles.total}>
          ${Number(data.price).toFixed(2)}x{data.quantity}
        </Text>
      </View>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
    // padding: 10,
    // borderWidth: 1,
  },
  image: {
    width: w / 4,
    height: w / 4.8,
    borderRadius: 10,
  },
  name: {
    // fontFamily: 'CeraPro-Bold',
    fontWeight: 'bold',
    lineHeight: 20,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth: 1,
    paddingLeft: 10,
  },
  restaurant: {
    // fontFamily: 'CeraPro-Medium',
    fontWeight: 'bold',
    fontSize: 13,
    color: '#222',
    marginTop: 10,
  },
  total: {
    // fontFamily: 'CeraPro-Medium',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#222',
  },
  end: {
    padding: 10,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgCon: {
    backgroundColor: '#F4E5C1',
    width: w / 4,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCon: {
    width: w / 5,
    height: w / 5.8,
    borderRadius: 10,
  },
});
