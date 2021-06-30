import 'react-native-gesture-handler';
import * as React from 'react';
import {Easing} from 'react-native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
// import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import HeadphoneCarousel from '../pages/headphoneCarousel';

import NavigationPage from '../pages/navigatePage';

import EventCards from '../pages/eventCards';
import EventCardDetail from '../pages/eventCards/cardDetail';

import CardImageBackground from '../pages/cardImageBackground';
// import CardImageWormPage from '../pages/cardImageWormPage';
import CarouselMovie from '../pages/carouselMovie';
import MoviesListDetails from '../pages/carouselMovie/MoviesListDetails';

import ListSampleShareElement from '../pages/listSampleShareElement';
import Detail from '../pages/listSampleShareElement/Detail';
import UrbanEarsDetails from '../pages/headphoneCarousel/UrbanEarsDetails';

import SalonShareElement from '../pages/salonShareElement/SalonList';
import SalonListDetail from '../pages/salonShareElement/SalonListDetail';

import FoodShareElement from '../pages/foodMenuShareElement/FoodList';
import FoodListDetails from '../pages/foodMenuShareElement/FoodListDetail';

import PhotographyList from '../pages/photographyShareElement/PhotographyList';
import PhotographyListDetail from '../pages/photographyShareElement/PhotographyListDetail';

import CarsList from '../pages/carsListShareElement/carsList';
import CarsDetail from '../pages/carsListShareElement/carsListDetail';

import TravelUpList from '../pages/travelUpShareElement/TravelUpList';
import TravelUpDetails from '../pages/travelUpShareElement/TravelUpDetails';

import TravelList from '../pages/travelCardShareElement/TravelList';
import TravelDetails from '../pages/travelCardShareElement/TravelListDetail';

import CookingQuest from '../pages/cookingQuest';

import CanItBeDone from './CanItBeDoneNavigation';
import Application from './ApplicationNavigation';
import ChartList from './ChartListNavigation';
import LibrarySample from './LibrarySampleNavigation';
import CustomUIList from './CustomUIListNavigation';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

// const StackNavigation = createStackNavigator();
const Stack = createSharedElementStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'NavigationPage'}>
        <Stack.Screen name="NavigationPage" component={NavigationPage} />
        <Stack.Screen name="HeadphoneCarousel" component={HeadphoneCarousel} />

        <Stack.Screen name="EventCards" component={EventCards} />
        <Stack.Screen name="EventCardDetail" component={EventCardDetail} />

        <Stack.Screen
          name="CardImageBackground"
          component={CardImageBackground}
        />
        {/* <Stack.Screen name="CardImageWormPage" component={CardImageWormPage} /> */}
        <Stack.Screen name="CarouselMovie" component={CarouselMovie} />
        <Stack.Screen name="MoviesListDetails" component={MoviesListDetails} />
        <Stack.Screen
          name="ListSampleShareElement"
          component={ListSampleShareElement}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: {
                animation: 'timing',
                config: {duration: 1000, easing: Easing.inOut(Easing.ease)},
              },
              close: {
                animation: 'timing',
                config: {duration: 1000, easing: Easing.inOut(Easing.ease)},
              },
            },
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
        />

        <Stack.Screen name="UrbanEarsDetails" component={UrbanEarsDetails} />

        <Stack.Screen name="SalonShareElement" component={SalonShareElement} />
        <Stack.Screen name="SalonListDetail" component={SalonListDetail} />

        <Stack.Screen name="FoodShareElement" component={FoodShareElement} />
        <Stack.Screen name="FoodListDetails" component={FoodListDetails} />
        <Stack.Screen name="PhotographyList" component={PhotographyList} />
        <Stack.Screen
          name="PhotographyListDetails"
          component={PhotographyListDetail}
        />

        <Stack.Screen name="CarsList" component={CarsList} />
        <Stack.Screen name="CarsDetail" component={CarsDetail} />

        <Stack.Screen name="TravelUpList" component={TravelUpList} />
        <Stack.Screen name="TravelUpDetails" component={TravelUpDetails} />

        <Stack.Screen name="TravelList" component={TravelList} />
        <Stack.Screen name="TravelListDetail" component={TravelDetails} />
        <Stack.Screen name="CookingQuest" component={CookingQuest} />

        <Stack.Screen name="LibrarySample" component={LibrarySample} />
        <Stack.Screen name="ChartList" component={ChartList} />
        <Stack.Screen name="CanItBeDone" component={CanItBeDone} />
        <Stack.Screen name="Application" component={Application} />
        <Stack.Screen name="CustomUIList" component={CustomUIList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
