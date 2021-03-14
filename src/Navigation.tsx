import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './screens/login/Login';
import config from './config';
import { ApplicationProvider } from './context-providers/appplication/ApplicationContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function Tabs() {
  const { navigation } = config;

  return (
    <Tab.Navigator>
      <Tab.Screen name={navigation.feedPage.name} component={HomeScreen} />
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
