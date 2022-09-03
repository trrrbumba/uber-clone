import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stact = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stact.Navigator>
            <Stact.Screen
              name='HomeScreen'
              component={HomeScreen}
              options={{
                headerShown: false
              }}
            />

            <Stact.Screen
              name='MapScreen'
              component={MapScreen}
              options={{
                headerShown: false
              }}
            />
          </Stact.Navigator>
          {/* <HomeScreen /> */}
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
