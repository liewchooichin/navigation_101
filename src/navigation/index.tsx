import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import bell from '../assets/bell.png';
import newspaper from '../assets/newspaper.png';
import { Home } from './screens/Home';
import { Profile } from './screens/Profile';
import { Settings } from './screens/Settings';
import { Quotes } from './screens/Quotes';
import { NotFound } from './screens/NotFound';

import Ionicons from '@expo/vector-icons/Ionicons';

// The screens: { name: { ... }}
// The name here is the name under the bottom tab 
// navigation.

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons 
            name={focused ? 'home' : 'home-outline'} 
            color={color} 
            size={24} />
        ),
      },
    },
    Quotes: {
      screen: Quotes,
      options: {
        tabBarIcon: ({ color, focused }) => (
          <Ionicons 
            name={focused ? 'balloon' : 'balloon-outline'} 
            color={color} 
            size={24} />
        ),
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: 'Home',
        headerShown: false,
      },
    },
    Profile: {
      screen: Profile,
      linking: {
        path: ':zodiac(@[a-zA-Z]+)',
        parse: {
          zodiac: (value) => value.replace(/^@/, ''),
        },
        stringify: {
          zodiac: (value) => `@${value}`,
        },
      },
    },
    Settings: {
      screen: Settings,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text>Close</Text>
          </HeaderButton>
        ),
      }),
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: '404',
      },
      linking: {
        path: '*',
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
