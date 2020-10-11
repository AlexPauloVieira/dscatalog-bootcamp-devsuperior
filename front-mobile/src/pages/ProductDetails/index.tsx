import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import styles from './styles';

function ProductDetails({ route }: { route: any }) {
    const { title, photo, description, price } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.photoContainer}>
                <Image source={photo} style={styles.photoStyle}/>
            </View>
            <ScrollView>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.titleStyle}>{title}</Text>
                    <Text style={styles.descriptionTitleStyle}>Decrição do Produto</Text>
                    <Text style={styles.descriptionStyle}>{description}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.currency}>R$</Text>
                        <Text style={styles.priceStyle}>{price}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default ProductDetails;

