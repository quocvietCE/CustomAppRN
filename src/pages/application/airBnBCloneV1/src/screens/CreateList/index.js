import React, {useEffect, useState} from 'react';
// import {PropTypes} from 'prop-types';
import {View, Text, TouchableHighlight, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../themes';
import InputField from '../../components/form/InputField';
import RadioInput from '../../components/form/RadioInput';
import RoundedButton from '../../components/buttons/RoundedButton';
import NavBarButton from '../../components/buttons/NavBarButton';
import styles from './styles';
FontAwesomeIcon.loadFont();
Icon.loadFont();

const CreateListScreen = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <NavBarButton
          handleButtonPress={() => navigation.pop()}
          location="left"
          color={Colors.white}
          icon={<Icon name="md-close" size={30} color={Colors.lightBlack} />}
        />
      ),
      headerStyle: {backgroundColor: 'white'},
      headerTitle: '',
    });
  }, [navigation]);
  const {listing, onCreateListClose} = route.params;
  const [privacyOption, setPrivacyOption] = useState('private');
  const [location, setLocation] = useState(listing.location);
  const [loading, setLoading] = useState(false);
  let listCreated = false;

  useEffect(() => {
    return () => {
      onCreateListClose(listing.id, listCreated);
    };
  }, []);

  const selectPrivacyOption = (privacyOptionSelect) => {
    setPrivacyOption(privacyOptionSelect);
  };

  const handleLocationChange = (locationChange) => {
    setLocation(locationChange);
  };

  const handleCreateList = () => {
    const {goBack} = navigation;
    setLoading(true);
    listCreated = true;
    setTimeout(() => {
      setLoading(false);
      goBack();
    }, 2000);
  };

  return (
    <View style={[styles.wrapper]}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.heading}>Create a list</Text>
        <View style={styles.content}>
          <View style={styles.inputWrapper}>
            <InputField
              labelText="Title"
              labelTextSize={16}
              labelTextWeight="400"
              labelColor={Colors.lightBlack}
              textColor={Colors.lightBlack}
              placeholder={location || 'new york'}
              defaultValue={location || 'new york'}
              borderBottomColor={Colors.gray06}
              inputType="email"
              inputStyle={styles.inputStyle}
              onChangeText={handleLocationChange}
              showCheckMark={false}
              autoFocus
            />
          </View>
          <View style={styles.privacyOptions}>
            <Text style={styles.privacyHeading}>Privacy</Text>
            <TouchableHighlight
              onPress={() => selectPrivacyOption('public')}
              style={styles.privacyOptionItem}
              underlayColor={Colors.gray01}>
              <View>
                <Text style={styles.privacyOptionTitle}>Public</Text>
                <Text style={styles.privacyOptionDescription}>
                  Visible to everyone and included on your public Airbnb
                  profile.
                </Text>
                <View style={styles.privacyRadioInput}>
                  <RadioInput
                    backgroundColor={Colors.gray07}
                    borderColor={Colors.gray05}
                    selectedBackgroundColor={Colors.green01}
                    selectedBorderColor={Colors.green01}
                    iconColor={Colors.white}
                    selected={privacyOption === 'public'}
                  />
                </View>
              </View>
            </TouchableHighlight>
            <View style={styles.divider} />
            <TouchableHighlight
              onPress={() => selectPrivacyOption('private')}
              style={styles.privacyOptionItem}
              underlayColor={Colors.gray01}>
              <View>
                <Text style={styles.privacyOptionTitle}>Private</Text>
                <Text style={styles.privacyOptionDescription}>
                  Visible only to you and any friends you invite.
                </Text>
                <View style={styles.privacyRadioInput}>
                  <RadioInput
                    backgroundColor={Colors.gray07}
                    borderColor={Colors.gray05}
                    selectedBackgroundColor={Colors.green01}
                    selectedBorderColor={Colors.green01}
                    iconColor={Colors.white}
                    selected={privacyOption === 'private'}
                  />
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
      <View style={styles.createButton}>
        <RoundedButton
          text="Create"
          textColor={Colors.white}
          textAlign="left"
          background={Colors.green01}
          borderColor="transparent"
          iconPosition="left"
          disabled={!location}
          loading={loading}
          icon={
            <View style={styles.buttonIcon}>
              <FontAwesomeIcon
                name="angle-right"
                color={Colors.white}
                size={30}
              />
            </View>
          }
          handleOnPress={handleCreateList}
        />
      </View>
    </View>
  );
};

// CreateListScreen.propTypes = {
//   navigation: PropTypes.shape({
//     state: PropTypes.shape({
//       params: PropTypes.shape({
//         listing: PropTypes.shape({
//           location: PropTypes.string,
//         }),
//       }),
//     }),
//   }).isRequired,
// };

export default CreateListScreen;
