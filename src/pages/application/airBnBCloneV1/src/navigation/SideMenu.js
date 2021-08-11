import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../themes';
Icon.loadFont();

const SideMenu = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>SideMenu</Text>
      <TouchableOpacity onPress={() => navigation.closeDrawer()}>
        <Icon name="close" color={Colors.black} size={36} />
      </TouchableOpacity>
    </View>
  );
};

SideMenu.propTypes = {};

SideMenu.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default SideMenu;
