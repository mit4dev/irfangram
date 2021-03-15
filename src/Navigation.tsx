import React from 'react';
import {Image, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from './screens/login/Login';
import config from './config';
import {ApplicationProvider} from './context-providers/appplication/ApplicationContext';
import {Feed} from './screens/feed/Feed';
import {square} from './utils';
import { Search } from './screens/search/Search';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const EmptyScreen = (title) => (
  <View
    style={{
      alignItems: 'center',
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    }}>
    <Text>{title}</Text>
  </View>
);

function Tabs() {
  const {navigation} = config;

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={navigation.feedPage.name}
        component={Feed}
        options={{
          tabBarLabel: '',
          tabBarIcon: (props) => (
            <Image
              source={config.assets.images.home}
              style={{...square(25), tintColor: props.color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'2'}
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon: (props) => (
            <Image
              source={config.assets.images.loupe}
              style={{...square(25), tintColor: props.color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'3'}
        component={EmptyScreen.bind(null, 'IGTV')}
        options={{
          tabBarLabel: '',
          tabBarIcon: (props) => (
            <Image
              source={config.assets.images.video}
              style={{...square(30), tintColor: props.color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'5'}
        component={EmptyScreen.bind(null, 'Alışveriş')}
        options={{
          tabBarLabel: '',
          tabBarIcon: (props) => (
            <Image
              source={config.assets.images.shoppingBag}
              style={{...square(25), tintColor: props.color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'6'}
        component={EmptyScreen.bind(null, 'Profil')}
        options={{
          tabBarLabel: '',
          tabBarIcon: (props) => (
            <Image
              source={config.assets.images.user}
              style={{...square(25), tintColor: props.color}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export const Navigation: React.FC = () => {
  const {navigation} = config;

  return (
    <NavigationContainer>
      <ApplicationProvider>
        <Stack.Navigator
          initialRouteName={navigation.loginPage.name}
          headerMode="none">
          <Stack.Screen name={navigation.loginPage.name} component={Login} />
          <Stack.Screen
            name={navigation.tabStack.name}
            component={Tabs}
            options={{gestureEnabled: false}}
          />
        </Stack.Navigator>
      </ApplicationProvider>
    </NavigationContainer>
  );
};
