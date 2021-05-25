import 'react-native-gesture-handler';
import * as React from 'react';
import {Easing} from 'react-native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import HeadphoneCarousel from '../pages/headphoneCarousel';
import Carousel3D from '../pages/carousel3D';
import NavigationPage from '../pages/navigatePage';
import AnimatedTabIndicator from '../pages/animatedTabIndicator';
import OnBoardScreen from '../pages/onBoardScreen';
import GalleryView from '../pages/galleryViewSyncedFlatLists';
import ChartView from '../pages/chart';

import EventCards from '../pages/eventCards';
import CardDetail from '../pages/eventCards/cardDetail';
import CardDetail2 from '../pages/evenCards2/eventCardDetail2';
import EventCards2 from '../pages/evenCards2';
import Segmented from '../pages/segmented';
import HistoryCall from '../pages/historyCall';
import CardImage from '../pages/cardImage';
import ScrollAnimation from '../pages/scrollAnimation';
import CardImageBackground from '../pages/cardImageBackground';
import CardImageWormPage from '../pages/cardImageWormPage';
import CarouselMovie from '../pages/carouselMovie';
import MoviesListDetails from '../pages/carouselMovie/MoviesListDetails';

import ListSampleShareElement from '../pages/listSampleShareElement';
import Detail from '../pages/listSampleShareElement/Detail';
import UrbanEarsDetails from '../pages/headphoneCarousel/UrbanEarsDetails';
import ZaraProductCarousel from '../pages/zaraProductCarousel';

import ScrollingBottomActions from '../pages/scrollingBottomActions';

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
import CustomIndicator from '../components/CustomIndicatorExample';
import CookingQuest from '../pages/cookingQuest';
import SynchronisedFlatLists from '../pages/synchronisedFlatLists';
import AccordionMenu from '../pages/accordionMenu';
import ButtonCustom from '../pages/buttonCustom';
import SwipeDelete from '../pages/swipeDelete';
import UberSwipeToDelete from '../pages/UberSwipeToDelete';
import Facebook from '../pages/facebook';
import OnboardScreenCarousel from '../pages/onboardScreen2';
import FloatingHeart from '../pages/FloatingHeart';
import ProfileScreenUI from '../pages/profileScreenUI';
import BankingApp from '../pages/bankingApp';
import StarRatingsAnimation from '../pages/starRatingsAnimation';
import NeumorphismMusicUI from '../pages/neumorphismMusicUI';
import CharDemo from '../pages/chartDemo';
import ChartCustom from '../pages/chartCustom';
import ChartCustom1 from '../pages/chartCustom1';
import VictoryChartScreen from '../pages/victoryChart';
import BedTime from '../pages/Bedtime';
import ToDoListMongoDB from '../pages/toDoListMongoDB';
import ReactHookFrom from '../pages/reactHookForm';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

export type AppParamType = {
  NavigationPage: undefined;
  HeadphoneCarousel: undefined;
  Carousel3D: undefined;
  AnimatedTabIndicator: undefined;
  OnBoardScreen: undefined;
  GalleryView: undefined;
  EventCards: undefined;
  CardDetail: undefined;
  SalonCategoryDiscoveryExploration: undefined;
  Segmented: undefined;
  HistoryCall: undefined;
  CardImage: undefined;
  ScrollAnimation: undefined;
  CardImageBackground: undefined;
  CardImageWormPage: undefined;
  CarouselMovie: undefined;
};

// const Stack = createStackNavigator();
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
        <Stack.Screen name="Carousel3D" component={Carousel3D} />
        <Stack.Screen
          name="AnimatedTabIndicator"
          component={AnimatedTabIndicator}
        />
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="GalleryView" component={GalleryView} />
        <Stack.Screen name="ChartView" component={ChartView} />
        <Stack.Screen name="ChartDemo" component={CharDemo} />
        <Stack.Screen name="EventCards" component={EventCards} />
        <Stack.Screen name="CardDetail" component={CardDetail} />
        <Stack.Screen name="EventCards2" component={EventCards2} />
        <Stack.Screen name="CardDetail2" component={CardDetail2} />
        <Stack.Screen name="Segmented" component={Segmented} />
        <Stack.Screen name="HistoryCall" component={HistoryCall} />
        <Stack.Screen name="CardImage" component={CardImage} />
        <Stack.Screen name="ScrollAnimation" component={ScrollAnimation} />
        <Stack.Screen
          name="CardImageBackground"
          component={CardImageBackground}
        />
        <Stack.Screen name="CardImageWormPage" component={CardImageWormPage} />
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
        <Stack.Screen
          name="ZaraProductCarousel"
          component={ZaraProductCarousel}
        />
        <Stack.Screen
          name="ScrollingBottomActions"
          component={ScrollingBottomActions}
        />
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
        <Stack.Screen name="CustomIndicator" component={CustomIndicator} />
        <Stack.Screen name="CookingQuest" component={CookingQuest} />
        <Stack.Screen
          name="SynchronisedFlatlists"
          component={SynchronisedFlatLists}
        />

        <Stack.Screen name="AccordionMenu" component={AccordionMenu} />
        <Stack.Screen name="ButtonCustom" component={ButtonCustom} />
        <Stack.Screen name="SwipeDelete" component={SwipeDelete} />
        <Stack.Screen name="UberSwipeToDelete" component={UberSwipeToDelete} />
        <Stack.Screen name="Facebook" component={Facebook} />
        <Stack.Screen
          name="OnboardScreenCarousel"
          component={OnboardScreenCarousel}
        />
        <Stack.Screen name="FloatingHeart" component={FloatingHeart} />
        <Stack.Screen name="ProfileScreenUI" component={ProfileScreenUI} />
        <Stack.Screen name="BankingApp" component={BankingApp} />
        <Stack.Screen
          name="StarRatingsAnimation"
          component={StarRatingsAnimation}
        />
        <Stack.Screen
          name="NeumorphismMusicUI"
          component={NeumorphismMusicUI}
        />
        <Stack.Screen name="ChartCustom" component={ChartCustom} />
        <Stack.Screen name="ChartCustom1" component={ChartCustom1} />
        <Stack.Screen
          name="VictoryChartScreen"
          component={VictoryChartScreen}
        />
        <Stack.Screen name="BedTime" component={BedTime} />
        <Stack.Screen name="ToDoListMongoDB" component={ToDoListMongoDB} />
        <Stack.Screen name="ReactHookFrom" component={ReactHookFrom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
