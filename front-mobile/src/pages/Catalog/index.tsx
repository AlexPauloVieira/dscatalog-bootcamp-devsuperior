import React, { useState } from "react";
import {
  View,
  Image,
  FlatList,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome5 as Icon } from "@expo/vector-icons";

import productImage from "../../images/product.png";

import styles from "./styles";

const Catalog = () => {
  const [products, setProducts] = useState([
        {
            title: 'Computador Desktop - Intel Core i7',
            photo: require('../../images/product.png'),
            price: '2.779,00',
            key: '1'
        },
        {
            title: 'Computador Desktop - Intel Core i9',
            photo: require('../../images/login.png'),
            price: '3.779,00',
            key: '2'
        },
        {
            title: 'Computador Desktop - Intel Core i3',
            photo: require('../../images/iphone.png'),
            price: '1.779,00',
            key: '3'
        },
        {
            title: 'Computador Desktop - Intel Core i9',
            photo: require('../../images/product.png'),
            price: '3.779,00',
            key: '4'
        },
        {
            title: 'Computador Desktop - Intel Core i9',
            photo: require('../../images/main-image.png'),
            price: '3.779,00',
            key: '5'
        },
        {
            title: 'Computador Desktop - Intel Core i9',
            photo: require('../../images/main-image.png'),
            price: '3.779,00',
            key: '6'
        },
    ]);

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

      <FlatList
        style={{ marginTop: 270 }}
        data={products}
        keyExtractor={item => item.key}
        numColumns={2}
        renderItem={({ item }) => (
            <View style={styles.cardsContainer}>
              <TouchableOpacity
                onPress={() => null}
                activeOpacity={0.5}
                style={styles.button}
              >
                <Image source={item.photo} style={styles.productImageStyle} />
                <Text style={styles.buttonText}>
                  {item.title}
                </Text>
                <View style={styles.priceContainer}>
                  <Text style={styles.currency}>R$</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
       
    </>
  );
};

export default Catalog;
