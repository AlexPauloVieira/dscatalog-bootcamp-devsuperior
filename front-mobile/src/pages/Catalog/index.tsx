import React, { useState } from "react";
import {
  View,
  Image,
  FlatList,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const Catalog = () => {
  const navigation = useNavigation();
  const [products] = useState([
    {
      title: "Computador Desktop - Intel Core i7",
      photo: require("../../images/product.jpg"),
      price: "2.779,00",
      description:
        "Seja um mestre em multitarefas com a capacidade para exibir quatro aplicativos simultâneos na tela. A tela está ficando abarrotada? Crie áreas de trabalho virtuais para obter mais espaço e trabalhar com os itens que você deseja. Além disso, todas as notificações e principais configurações são reunidas em uma única tela de fácil acesso.",
      key: "1",
    },
    {
      title: "Computador Desktop - Intel Core i9",
      photo: require("../../images/login.png"),
      price: "3.779,00",
      description:
        "Seja um mestre em multitarefas com a capacidade para exibir quatro aplicativos simultâneos na tela. A tela está ficando abarrotada? Crie áreas de trabalho virtuais para obter mais espaço e trabalhar com os itens que você deseja. Além disso, todas as notificações e principais configurações são reunidas em uma única tela de fácil acesso.",
      key: "2",
    },
    {
      title: "Computador Desktop - Intel Core i3",
      photo: require("../../images/iphone.png"),
      price: "1.779,00",
      description:
        "Seja um mestre em multitarefas com a capacidade para exibir quatro aplicativos simultâneos na tela. A tela está ficando abarrotada? Crie áreas de trabalho virtuais para obter mais espaço e trabalhar com os itens que você deseja. Além disso, todas as notificações e principais configurações são reunidas em uma única tela de fácil acesso.",
      key: "3",
    },
    {
      title: "Computador Desktop - Intel Core i9",
      photo: require("../../images/product.jpg"),
      price: "3.779,00",
      description:
        "Seja um mestre em multitarefas com a capacidade para exibir quatro aplicativos simultâneos na tela. A tela está ficando abarrotada? Crie áreas de trabalho virtuais para obter mais espaço e trabalhar com os itens que você deseja. Além disso, todas as notificações e principais configurações são reunidas em uma única tela de fácil acesso.",
      key: "4",
    },
    {
      title: "Computador Desktop - Intel Core i9",
      photo: require("../../images/main-image.png"),
      price: "3.779,00",
      description:
        "Seja um mestre em multitarefas com a capacidade para exibir quatro aplicativos simultâneos na tela. A tela está ficando abarrotada? Crie áreas de trabalho virtuais para obter mais espaço e trabalhar com os itens que você deseja. Além disso, todas as notificações e principais configurações são reunidas em uma única tela de fácil acesso.",
      key: "5",
    },
    {
      title: "Computador Desktop - Intel Core i9",
      photo: require("../../images/main-image.png"),
      price: "3.779,00",
      description:
        "Seja um mestre em multitarefas com a capacidade para exibir quatro aplicativos simultâneos na tela. A tela está ficando abarrotada? Crie áreas de trabalho virtuais para obter mais espaço e trabalhar com os itens que você deseja. Além disso, todas as notificações e principais configurações são reunidas em uma única tela de fácil acesso.",
      key: "6",
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
        keyExtractor={(item) => item.key}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.cardsContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProductDetails", item)}
              activeOpacity={0.5}
              style={styles.button}
            >
              <Image source={item.photo} style={styles.productImageStyle} />
              <Text style={styles.buttonText}>{item.title}</Text>
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
