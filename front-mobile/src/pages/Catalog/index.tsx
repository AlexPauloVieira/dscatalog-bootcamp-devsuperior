import React from "react";
import { View, Image, TextInput, Text } from "react-native";
import { FontAwesome5 as Icon } from "@expo/vector-icons";

import loginImage from "../../images/login.png";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";

const Catalog = () => {
  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <View style={styles.topElements}>
          <View>
            <Text style={styles.textStyle}>Produtos {"\n"}Disponíveis</Text>
          </View>
          <View style={styles.topRightElements}>
            <View>
              <Text style={styles.totalProducts}>1300 produtos</Text>
            </View>
            <View style={styles.iconsContainer}>
              <Icon
                name='laptop'
                color='#dff9fb'
                size={26}
                style={styles.iconStyle}
              />
              <Icon
                name='mobile-alt'
                color='#dff9fb'
                size={26}
                style={styles.iconStyle}
              />
            </View>
          </View>
        </View>
        <View style={styles.inputsContainer}>
          <View style={styles.searchCategory}>
            <TextInput
              style={styles.input}
              //value={''}
              //onChangeText={(text) => setSubject(text)}
              placeholder='Categoria?'
              placeholderTextColor='#22a6b3'
            />
            <RectButton>
              <View style={styles.buttonIcon}>
                <Text>
                  <Icon name='chevron-down' color='#fff' size={26} />
                </Text>
              </View>
            </RectButton>
          </View>
          <View style={styles.searchProduct}>
            <TextInput
              style={styles.input}
              //value={''}
              //onChangeText={(text) => setSubject(text)}
              placeholder='Produto?'
              placeholderTextColor='#22a6b3'
            />
            <RectButton>
              <View style={styles.buttonIcon}>
                <Text>
                  <Icon name='search' color='#fff' size={26} />
                </Text>
              </View>
            </RectButton>
          </View>
        </View>
      </View>
      <View style={styles.cardsContainer}>
        <Image source={loginImage} style={styles.imageStyle} />
      </View>
    </View>
  );
};

export default Catalog;
