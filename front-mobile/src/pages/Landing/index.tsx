import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import coverImage from "../../images/main-image.png";

import styles from "./styles";

const Landing = () => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate("Catalog");
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          {"  "}Bem Vindos {"\n"}ao DS Catalog
        </Text>
      </View>
      <Image source={coverImage} style={styles.imageStyle} />
      <Text style={styles.descriptionStyle}>
        Conheça o melhor catálogo {"\n"} de produtos do Brasil!
      </Text>
      <RectButton onPress={handleOnPress} style={styles.button}>
        <Text style={styles.buttonText}>ver catálogo</Text>
        <View style={styles.buttonIcon}>
          <Text>
            <Icon name='chevron-right' color='#fff' size={25} />
          </Text>
        </View>
      </RectButton>
    </View>
  );
};

export default Landing;
