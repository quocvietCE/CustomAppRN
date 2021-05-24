// Navigation

import List from '../Screens/List';
import TravelList from '../Screens/TravelList';
import TravelUpList from '../Screens/TravelUpList';
import PhotographyList from '../Screens/PhotographyList';
import CarsList from '../Screens/CarsList';
import UrbanEarsList from '../Screens/UrbanEarsList';
import FoodList from '../Screens/FoodList';
import SalonList from '../Screens/SalonList';
import EventsList from '../Screens/EventsList';
import MoviesList from '../Screens/MoviesList';
import CardsList from '../Screens/CardsList';

export default [
  { name: 'List', label: 'Vacation', component: List },
  { name: 'TravelList', label: 'Travel', component: TravelList },
  { name: 'TravelUpList', label: 'Montains', component: TravelUpList },
  { name: 'PhotographyList', label: 'Photography', component: PhotographyList },
  { name: 'CarsList', label: 'Cars', component: CarsList },
  { name: 'UrbanEarsList', label: 'UrbanEars', component: UrbanEarsList },
  { name: 'FoodList', label: 'Food', component: FoodList },
  { name: 'SalonList', label: 'Salon', component: SalonList },
  { name: 'EventsList', label: 'Events', component: EventsList },
  { name: 'MoviesList', label: 'Movies', component: MoviesList },
  { name: 'CardsList', label: 'CardsList', component: CardsList },
];
