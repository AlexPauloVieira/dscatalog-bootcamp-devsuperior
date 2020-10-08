import React from "react";
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome5 as Icon } from "@expo/vector-icons";

import productImage from "../../images/product.png";

import styles from "./styles";

const Catalog = () => {
  return (
    <>
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
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 4,
          paddingBottom: 8,
        }}
      >
        <View style={{ marginTop: 275 }}></View>
        <View style={styles.cardsContainer}>
          <TouchableOpacity
            onPress={() => null}
            activeOpacity={0.5}
            style={styles.button}
          >
            <Image source={productImage} style={styles.productImageStyle} />
            <Text style={styles.buttonText}>
              Computador Desktop - Intel Core i7
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.currency}>R$</Text>
              <Text style={styles.price}>2.779,00</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => null}
            activeOpacity={0.5}
            style={styles.button}
          >
            <Image source={productImage} style={styles.productImageStyle} />
            <Text style={styles.buttonText}>
              Computador Desktop - Intel Core i7
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.currency}>R$</Text>
              <Text style={styles.price}>2.779,00</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.cardsContainer}>
          <TouchableOpacity
            onPress={() => null}
            activeOpacity={0.5}
            style={styles.button}
          >
            <Image source={productImage} style={styles.productImageStyle} />
            <Text style={styles.buttonText}>
              Computador Desktop - Intel Core i7
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.currency}>R$</Text>
              <Text style={styles.price}>2.779,00</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => null}
            activeOpacity={0.5}
            style={styles.button}
          >
            <Image source={productImage} style={styles.productImageStyle} />
            <Text style={styles.buttonText}>
              Computador Desktop - Intel Core i7
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.currency}>R$</Text>
              <Text style={styles.price}>2.779,00</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Catalog;
