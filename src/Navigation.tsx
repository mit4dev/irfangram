import React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './screens/login/Login';
import config from './config';
import { ApplicationProvider } from './context-providers/appplication/ApplicationContext';
import { Feed } from './screens/feed/Feed';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  const { navigation } = config;

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
              style={{ height: 25, width: 25, tintColor: props.color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"3"}
        component={Feed}
        options={{
          tabBarLabel: '',
          tabBarIcon: (props) => (
            <Image
              source={config.assets.images.loupe}
              style={{ height: 25, width: 25, tintColor: props.color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"4"}
        component={Feed}
        options={{
          tabBarLabel: '',
          tabBarIcon: (props) => (
            <Image
              source={config.assets.images.video}
              style={{ height: 30, width: 30, tintColor: props.color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"5"}
        component={Feed}
        options={{
          tabBarLabel: '',
          tabBarIcon: (props) => (
            <Image
              source={config.assets.images.shoppingBag}
              style={{ height: 25, width: 25, tintColor: props.color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"6"}
        component={Feed}
        options={{
          tabBarLabel: '',
          tabBarIcon: (props) => (
            <Image
              source={config.assets.images.user}
              style={{ height: 25, width: 25, tintColor: props.color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export const Navigation: React.FC = () => {
  const { navigation } = config;

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
            options={{ gestureEnabled: false }}
          />
        </Stack.Navigator>
      </ApplicationProvider>
    </NavigationContainer>
  );
};
