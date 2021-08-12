import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {Card, Badge, Button, Block, Text} from '../components';
import mocks from '../constants/mocksData';
import theme from '../constants/theme';

const {width} = Dimensions.get('window');

const Browse = ({
  navigation,
  profile = mocks.profile,
  categoriesProp = mocks.categories,
}) => {
  const [active, setActive] = useState('Products');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesProp);
  }, [categoriesProp]);

  const handleTab = (tab) => {
    const filtered = categoriesProp.filter((category) =>
      category.tags.includes(tab.toLowerCase()),
    );

    setActive(tab);
    setCategories(filtered);
  };

  const renderTab = (tab) => {
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}>
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  };

  const tabs = ['Products', 'Inspirations', 'Shop'];

  return (
    <SafeAreaView style={{flex: 1}}>
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Browse
          </Text>
          <Button onPress={() => navigation.navigate('Settings')}>
            <Image source={profile.avatar} style={styles.avatar} />
          </Button>
        </Block>

        <Block flex={false} row style={styles.tabs}>
          {tabs.map((tab) => renderTab(tab))}
        </Block>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{paddingVertical: theme.sizes.base * 2}}>
          <Block flex={false} row space="between" style={styles.categories}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.name}
                onPress={() => navigation.navigate('Explore', {category})}>
                <Card center shadow middle style={styles.category}>
                  <Badge
                    margin={[0, 0, 15]}
                    size={50}
                    color="rgba(41,216,143,0.20)">
                    <Image source={category.image} />
                  </Badge>
                  <Text medium height={20}>
                    {category.name}
                  </Text>
                  <Text gray caption>
                    {category.count} products
                  </Text>
                </Card>
              </TouchableOpacity>
            ))}
          </Block>
        </ScrollView>
      </Block>
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
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base,
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  categories: {
    flexWrap: 'wrap',
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5,
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
  },
});

export default Browse;
