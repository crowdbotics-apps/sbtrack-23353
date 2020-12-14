import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps184972Navigator from '../features/Maps184972/navigator';
import Additem184971Navigator from '../features/Additem184971/navigator';
import Maps184967Navigator from '../features/Maps184967/navigator';
import UserProfile184963Navigator from '../features/UserProfile184963/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps184972: { screen: Maps184972Navigator },
Additem184971: { screen: Additem184971Navigator },
Maps184967: { screen: Maps184967Navigator },
UserProfile184963: { screen: UserProfile184963Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
