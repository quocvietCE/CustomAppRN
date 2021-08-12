import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';
import Slider from 'react-native-slider';

import {Divider, Button, Block, Text, Switch} from '../components';
import mocks from '../constants/mocksData';
import theme from '../constants/theme';

const Settings = ({profileProp = mocks.profile}) => {
  const [budget, setBudget] = useState(850);
  const [monthly, setMonthly] = useState(1700);
  const [notifications, setNotifications] = useState(true);
  const [newsletter, setNewsletter] = useState(false);
  const [editing, setEditing] = useState(null);
  const [profile, setProfile] = useState({});

  const toggleEdit = (name) => {
    setEditing(!editing ? name : null);
  };

  const handleEdit = (name, text) => {
    profile[name] = text;

    setProfile(profile);
  };

  const renderEdit = (name) => {
    if (editing === name) {
      return (
        <TextInput
          defaultValue={profile[name]}
          onChangeText={(text) => handleEdit([name], text)}
        />
      );
    }

    return <Text bold>{profile[name]}</Text>;
  };

  useEffect(() => {
    setProfile(profileProp);
  }, [profileProp]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.white}}>
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold>
          Settings
        </Text>
        <Button>
          <Image source={profile.avatar} style={styles.avatar} />
        </Button>
      </Block>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Block style={styles.inputs}>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text gray2 style={{marginBottom: 10}}>
                Username
              </Text>
              {renderEdit('username')}
            </Block>
            <Text medium secondary onPress={() => toggleEdit('username')}>
              {editing === 'username' ? 'Save' : 'Edit'}
            </Text>
          </Block>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text gray2 style={{marginBottom: 10}}>
                Location
              </Text>
              {renderEdit('location')}
            </Block>
            <Text medium secondary onPress={() => toggleEdit('location')}>
              {editing === 'location' ? 'Save' : 'Edit'}
            </Text>
          </Block>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text gray2 style={{marginBottom: 10}}>
                E-mail
              </Text>
              <Text bold>{profile.email}</Text>
            </Block>
          </Block>
        </Block>

        <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />

        <Block style={styles.sliders}>
          <Block margin={[10, 0]}>
            <Text gray2 style={{marginBottom: 10}}>
              Budget
            </Text>
            <Slider
              minimumValue={0}
              maximumValue={1000}
              style={{height: 19}}
              thumbStyle={styles.thumb}
              trackStyle={{height: 6, borderRadius: 6}}
              minimumTrackTintColor={theme.colors.secondary}
              maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
              value={budget}
              onValueChange={(value) => setBudget(value)}
            />
            <Text caption gray right>
              $1,000
            </Text>
          </Block>
          <Block margin={[10, 0]}>
            <Text gray2 style={{marginBottom: 10}}>
              Monthly Cap
            </Text>
            <Slider
              minimumValue={0}
              maximumValue={5000}
              style={{height: 19}}
              thumbStyle={styles.thumb}
              trackStyle={{height: 6, borderRadius: 6}}
              minimumTrackTintColor={theme.colors.secondary}
              maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
              value={monthly}
              onValueChange={(value) => setMonthly(value)}
            />
            <Text caption gray right>
              $5,000
            </Text>
          </Block>
        </Block>

        <Divider />

        <Block style={styles.toggles}>
          <Block
            row
            center
            space="between"
            style={{marginBottom: theme.sizes.base * 2}}>
            <Text gray2>Notifications</Text>
            <Switch
              value={notifications}
              onValueChange={(value) => setNotifications(value)}
            />
          </Block>

          <Block
            row
            center
            space="between"
            style={{marginBottom: theme.sizes.base * 2}}>
            <Text gray2>Newsletter</Text>
            <Switch
              value={newsletter}
              onValueChange={(value) => setNewsletter(value)}
            />
          </Block>
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
    borderRadius: (theme.sizes.base * 2.2) / 2,
  },
  inputs: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2,
  },
  inputRow: {
    alignItems: 'flex-end',
  },
  sliders: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2,
  },
  thumb: {
    width: theme.sizes.base,
    height: theme.sizes.base,
    borderRadius: theme.sizes.base,
    borderColor: 'white',
    borderWidth: 3,
    backgroundColor: theme.colors.secondary,
  },
  toggles: {
    paddingHorizontal: theme.sizes.base * 2,
  },
});

export default Settings;
