// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//import containers
import DetailScreen from "./containers/DetailScreen";
import HomeScreen from "./containers/HomeScreen";

const Stack = createStackNavigator();

const datas = { name: "Lily" };

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ title: "Home page" }}>
          {(props) => <HomeScreen {...props} extraData={datas} />}
        </Stack.Screen>
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
