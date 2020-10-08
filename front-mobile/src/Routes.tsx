import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "./pages/Landing";
import Catalog from "./pages/Catalog";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode='none'
        screenOptions={{
          cardStyle: {
            backgroundColor: "#407BFF",
          },
        }}
      >
        <Stack.Screen name='Landing' component={Landing} />
        <Stack.Screen name='Catalog' component={Catalog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
