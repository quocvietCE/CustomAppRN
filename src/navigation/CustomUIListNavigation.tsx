import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CustomUIList from '../pages/CustomUIList';
import CustomBottomTab from '../components/CustomIndicatorExample';
import CustomButton from '../pages/CustomUIList/CustomButton';
import NeumorphismMusicUI from '../pages/CustomUIList/neumorphismMusicUI';
import StarRatingsAnimation from '../pages/CustomUIList/starRatingsAnimation';
import ProfileScreenUI from '../pages/CustomUIList/profileScreenUI';
import SwipeDelete from '../pages/CustomUIList/swipeDelete';
import FacebookUI from '../pages/CustomUIList/facebookUI';
import FloatingHeart from '../pages/CustomUIList/FloatingHeart';
import AccordionMenu from '../pages/CustomUIList/accordionMenu';
import AnimatedTabIndicator from '../pages/CustomUIList/animatedTabIndicator';
import OnBoardScreen from '../pages/CustomUIList/onBoardScreen';
import OnBoardScreen2 from '../pages/CustomUIList/onboardScreen2';
import ScrollHeaderAnimation from '../pages/CustomUIList/scrollAnimation';
import ScrollingBottomActions from '../pages/CustomUIList/scrollingBottomActions';
import HistoryCall from '../pages/CustomUIList/historyCall';
import CardImage from '../pages/CustomUIList/cardImage';
import SynchronisedFlatList from '../pages/CustomUIList/synchronisedFlatLists';
import GalleryView from '../pages/CustomUIList/galleryViewSyncedFlatLists';
import CardImageWormPage from '../pages/CustomUIList/cardImageWormPage';

// ------------------- Custom UI List ---------------------------

export type CustomUIListParamType = {
  CustomUIList: undefined;
  CustomBottomTab: undefined;
  CustomButton: undefined;
  NeumorphismMusicUI: undefined;
  StarRatingsAnimation: undefined;
  ProfileScreenUI: undefined;
  SwipeDelete: undefined;
  FacebookUI: undefined;
  FloatingHeart: undefined;
  AccordionMenu: undefined;
  AnimatedTabIndicator: undefined;
  OnBoardScreen: undefined;
  OnBoardScreen2: undefined;
  ScrollingBottomActions: undefined;
  ScrollHeaderAnimation: undefined;
  HistoryCall: undefined;
  CardImage: undefined;
  SynchronisedFlatList: undefined;
  GalleryView: undefined;
  CardImageWormPage: undefined;
};

const CustomUIStack = createStackNavigator<CustomUIListParamType>();

const CustomUIListStackNavigator = () => {
  return (
    <CustomUIStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <CustomUIStack.Screen name="CustomUIList" component={CustomUIList} />
      <CustomUIStack.Screen
        name="CustomBottomTab"
        component={CustomBottomTab}
      />
      <CustomUIStack.Screen name="CustomButton" component={CustomButton} />
      <CustomUIStack.Screen
        name="NeumorphismMusicUI"
        component={NeumorphismMusicUI}
      />
      <CustomUIStack.Screen
        name="StarRatingsAnimation"
        component={StarRatingsAnimation}
      />
      <CustomUIStack.Screen
        name="ProfileScreenUI"
        component={ProfileScreenUI}
      />
      <CustomUIStack.Screen name="SwipeDelete" component={SwipeDelete} />
      <CustomUIStack.Screen name="FacebookUI" component={FacebookUI} />
      <CustomUIStack.Screen name="FloatingHeart" component={FloatingHeart} />
      <CustomUIStack.Screen name="AccordionMenu" component={AccordionMenu} />
      <CustomUIStack.Screen
        name="AnimatedTabIndicator"
        component={AnimatedTabIndicator}
      />
      <CustomUIStack.Screen name="OnBoardScreen" component={OnBoardScreen} />
      <CustomUIStack.Screen name="OnBoardScreen2" component={OnBoardScreen2} />
      <CustomUIStack.Screen
        name="ScrollHeaderAnimation"
        component={ScrollHeaderAnimation}
      />
      <CustomUIStack.Screen
        name="ScrollingBottomActions"
        component={ScrollingBottomActions}
      />
      <CustomUIStack.Screen name="HistoryCall" component={HistoryCall} />
      <CustomUIStack.Screen name="CardImage" component={CardImage} />
      <CustomUIStack.Screen
        name="SynchronisedFlatList"
        component={SynchronisedFlatList}
      />
      <CustomUIStack.Screen name="GalleryView" component={GalleryView} />
      <CustomUIStack.Screen
        name="CardImageWormPage"
        component={CardImageWormPage}
      />
    </CustomUIStack.Navigator>
  );
};

export default CustomUIListStackNavigator;
