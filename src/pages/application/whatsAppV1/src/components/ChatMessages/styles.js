import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  message: {},
  name: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  time: {
    alignSelf: 'flex-end',
    color: 'grey',
  },
});

export default styles;
