import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/Routes";
import { AppLoading } from "expo";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/dev";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Routes />
        <StatusBar style='light' backgroundColor='#2980b9' />
      </>
    );
  }
}
