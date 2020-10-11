import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "./pages/Landing";
import Catalog from "./pages/Catalog";
import ProductDetails from "./pages/ProductDetails";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Landing'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Landing' component={Landing} />
        <Stack.Screen name='Catalog' component={Catalog} />
        <Stack.Screen name='ProductDetails' component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
