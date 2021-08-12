import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
Icon.loadFont();
AntDesign.loadFont();
MaterialIcons.loadFont();

const Face = ({ icon, title, color, full }) => {
  return (
    <View style={styles.faceGroup}>
      {full ? (
        <View style={{ backgroundColor: color, borderRadius: 40 }}>
          <Icon name={icon} size={36} color={'#fff'} />
        </View>
      ) : (
        <Icon name={icon} size={36} color={color} />
      )}
      <Text style={styles.faceText}>{title}</Text>
    </View>
  );
};

const Rating = ({ rating }) => {
  return (
    <View style={styles.rating}>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          if (rating > i) {
            return (
              <AntDesign
                name="star"
                color="#FA8D00"
                style={{ marginRight: 5 }}
                key={i}
              />
            );
          }
          return <AntDesign name="staro" style={{ marginRight: 5 }} key={i} />;
        })}
    </View>
  );
};

export const CardHome = ({ title, info, noHeader, noFooter, book }) => {
  // console.log('url: ', info.url);
  return (
    <View style={styles.cardContainer}>
      {!noHeader && (
        <View style={styles.cardHeadContainer}>
          <Text style={styles.cardHeading}>{title}</Text>
          <Text style={styles.cardMore}>See All</Text>
        </View>
      )}

      <View style={styles.cardBody}>
        <View style={styles.cardBodyTop}>
          <Image
            style={styles.cardAvatar}
            source={{
              uri: info.url,
            }}
          />
          <View style={styles.cardLeftSide}>
            <Text style={styles.tag}>{info.tag}</Text>
            <Text style={styles.cardName}>{info.name}</Text>
            <Text style={styles.cardTime}>{info.time}</Text>
            <Text style={styles.cardAddress}>{info.address}</Text>
            <Text style={styles.cardAddress}>{info.detail}</Text>
            {info.rating && <Rating rating={info.rating} />}
            <View style={styles.iconMore}>
              <Icon name="angle-right" color="gray" />
            </View>
            {info.isLike && (
              <View style={styles.iconLike}>
                <Icon name="heart" color="#E8008D" size={22} />
              </View>
            )}
            {book && (
              <View style={styles.buttonBooks}>
                <TouchableOpacity>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.btnGradient}
                    colors={['#554383', '#943F86']}>
                    <Text style={styles.btnBookText}>Book Visit</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        {/* <View style={styles.margin} /> */}
        {!noFooter && <View style={styles.margin} />}
        {!noFooter && (
          <View style={styles.cardBodyBottom}>
            <View style={styles.cardGroupIcon}>
              <AntDesign name="checkcircleo" size={32} />
              <Text style={styles.cardBodyBottomTitle}>Check-in</Text>
            </View>
            <View style={styles.cardGroupIcon}>
              <AntDesign name="closecircleo" size={32} />
              <Text style={styles.cardBodyBottomTitle}>Cancel</Text>
            </View>
            <View style={styles.cardGroupIcon}>
              <AntDesign name="calendar" size={32} />
              <Text style={styles.cardBodyBottomTitle}>Calendar</Text>
            </View>
            <View style={styles.cardGroupIcon}>
              <MaterialIcons name="explore" size={32} />
              <Text style={styles.cardBodyBottomTitle}>Directions</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Hi Quốc Việt</Text>
        <Text style={styles.desc}>How are you feeling today?</Text>
      </View>
      <View style={styles.faceContainer}>
        <Face icon="laughing" title="Great" color="#E23F9C" />
        <Face icon="slightly-smile" title="Good" color="#C55696" />
        <Face icon="neutral" title="Okey" color="#E23F9C" full />
        <Face icon="frowning" title="Bad" color="#827791" />
        <Face icon="expressionless" title="Awful" />
      </View>
      <View>
        <CardHome
          title="Your Next Appointment"
          info={{
            name: 'Dr T Pay Dhar',
            time: 'Sunday, May 15th at 8:00 PM',
            address: '570, Lê Tấn Bê, F.An Lac, Q. Bình Tân',
            detail: '570, Lê Tấn Bê, F.An Lac, Q. Bình Tân',
            url: 'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
          }}
        />
        <CardHome
          title="Specialist in your area"
          info={{
            name: 'Dr Quoc Viet',
            time: 'Sunday, May 15th at 8:00 PM',
            address: '660, Cộng Hoa, F.15, Q. Tân Binh',
            detail: 'San Francisco, CA | 5 min',
            isLike: true,
            rating: 4,
            tag: 'Wellness',
            url: 'https://i.ibb.co/XJTBdpT/48063057-2520228918050397-2981005494413426688-o.jpg',
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red'
  },
  headerContainer: {
    padding: 20,
    paddingHorizontal: 30,
    marginTop: 52,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  desc: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  faceContainer: {
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 20,
  },
  faceGroup: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  faceText: {
    fontSize: 16,
    marginTop: 6,
  },
  cardContainer: {
    padding: 15,
    paddingBottom: 0,
  },
  cardHeadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHeading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardMore: {
    fontWeight: 'bold',
    color: '#7B6C95',
  },
  cardBody: {
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardBodyTop: {
    flexDirection: 'row',
  },
  cardAvatar: {
    height: 60,
    width: 60,
    backgroundColor: 'gray',
    borderRadius: 60,
  },
  cardLeftSide: {
    paddingHorizontal: 10,
    flex: 1,
  },
  cardName: {
    color: '#222',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardTime: {
    color: '#222',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },
  cardAddress: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 5,
  },
  iconMore: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cardGroupIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBodyBottom: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardBodyBottomTitle: {
    fontSize: 14,
    marginTop: 5,
  },
  margin: {
    height: 1,
    backgroundColor: '#F0F1F2',
    marginVertical: 10,
    width: '100%',
  },
  tag: {
    color: '#B066A4',
  },
  iconLike: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  rating: {
    flexDirection: 'row',
    marginTop: 5,
  },
  buttonBooks: {
    flexDirection: 'row',
    marginTop: 20,
  },
  btnGradient: {
    padding: 10,
    borderRadius: 40,
  },
  btnBookText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});
