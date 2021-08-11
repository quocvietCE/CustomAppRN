import {StackActions} from '@react-navigation/native';
import {NavigationActions} from '@react-navigation/compat';
import {DrawerActions} from '@react-navigation/drawer';

let _container;

function setContainer(container) {
  _container = container;
}

function getCurrentContainer() {
  return _container;
}

function reset(routeName, params) {
  _container.dispatch(
    StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName,
          params,
        }),
      ],
    }),
  );
}

function navigate(routeName, params) {
  _container.dispatch(
    NavigationActions.navigate({
      type: 'Navigation/NAVIGATE',
      routeName,
      params,
    }),
  );
}

function back(routeName) {
  if (routeName != null) {
    _container.dispatch(
      NavigationActions.back({
        routeName,
      }),
    );
  } else {
    _container.dispatch(NavigationActions.back());
  }
}

function navigateDeep(actions) {
  _container.dispatch(
    actions.reduceRight(
      (prevAction, action) =>
        NavigationActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName: action.routeName,
          params: action.params,
          action: prevAction,
        }),
      undefined,
    ),
  );
}

function getCurrentRoute() {
  if (!_container || !_container.state.nav) {
    return null;
  }
  console.log('Container: ', _container.state.nav.routes);

  return _container.state.nav.routes[_container.state.nav.index] || null;
}

function toggleNavigate() {
  _container.dispatch(DrawerActions.toggleDrawer());
}

const AppNavigatorService = {
  setContainer,
  getCurrentContainer,
  navigateDeep,
  back,
  navigate,
  reset,
  getCurrentRoute,
  toggleNavigate,
};

export default AppNavigatorService;
