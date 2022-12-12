/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Modules
import LoginPage from './src/components/login';
import EventsPage from './src/components/events';
import ResetPage from './src/components/reset_password';
import NewAccountPage from './src/components/new_account';
import darkTheme from '@react-navigation/native/src/theming/DarkTheme';
import NewMeeting from './src/components/new_meeting';

const App: React = navigation => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={darkTheme}>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Events" component={EventsPage} />
        <Stack.Screen name="ResetPage" component={ResetPage} />
        <Stack.Screen name="NewAccountPage" component={NewAccountPage} />
        <Stack.Screen name="NewMeeting" component={NewMeeting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
