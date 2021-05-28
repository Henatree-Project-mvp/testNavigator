// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import containers
import DetailScreen from "./containers/DetailScreen";
import HomeScreen from "./containers/HomeScreen";
import SignUpScreen from "./containers/SignUpScreen";
import SignInScreen from "./containers/SignInScreen";
import FavoritesScreen from "./containers/FavoritesScreen";
import MapScreen from "./containers/MapScreen";
import SettingScreen from "./containers/MapScreen";
import SplashScreen from "./containers/SplashScreen";

//Data :
const datas = { name: "Lily" };

//Navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{ title: "Explorer" }}>
        {(props) => <HomeScreen {...props} extraData={datas} />}
      </Tab.Screen>
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="SignUp">
          {(props) => <SignUpScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="SignIn">
          {(props) => <SignInScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Detail">
          {(props) => <DetailScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Maps">
          {(props) => <MapScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Splash">
          {(props) => <SplashScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
