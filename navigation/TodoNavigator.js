import React from 'react';
import { Platform, Text } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Create from '../screens/Create';
import Completed from '../components/CompletedTodos';
import Pending from '../components/PendingTodos';
import Colors from '../constants/Colors';
import Details from '../screens/Details';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'A Screen'
};

const HomeNavigator = createStackNavigator(
  {

    Home: Home,
    Details: Details
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const CreateNavigator = createStackNavigator(
  {
    Create: Create
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const CompletedNavigator = createStackNavigator(
  {
    Completed:Completed,
    Details: Details
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const PendingNavigator = createStackNavigator(
  {
    Pending:Pending,
    Details: Details
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>    Home Page</Text>
        ) : (
          'Home Page'
        )
    }
  },
  Create: {
    screen: CreateNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>        Create</Text>
        ) : (
          'Create'
        )
    }
  },

  Completed: {
    screen: CompletedNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>    Completed</Text>
        ) : (
          'Completed'
        )
    }
  },

  Pending: {
    screen: PendingNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>       Pending </Text>
        ) : (
          'Pending'
        )
    }
  }
};

const HomeTabNavigator = createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: 'open-sans'
          },
          activeTintColor: Colors.accentColor
        }
      });

const ProfileNavigator = createStackNavigator(
  {
    Profile: Profile
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: HomeTabNavigator,
    Profile: ProfileNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  }
);

export default createAppContainer(MainNavigator);