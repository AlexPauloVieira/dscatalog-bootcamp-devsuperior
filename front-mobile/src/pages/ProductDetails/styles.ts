import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    photoContainer: {
        flex: 1,
    },
    photoStyle: {
        height: 200,
        width: '100%',
        resizeMode: 'contain',
        marginTop: 40,
        opacity: 0.95
    },
    descriptionContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 150,
        marginTop: 250,
        backgroundColor: '#3498db',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    titleStyle: {
        fontSize: 20,
        fontFamily: "Poppins_600SemiBold",
        color: '#fff'
    },
    descriptionTitleStyle: {
        fontSize: 18,
        fontFamily: "Poppins_600SemiBold",
        color: '#fff',
        marginVertical: 10
    },
    descriptionStyle: {
        fontSize: 16,
        textAlign: 'justify',
        fontFamily: 'Poppins_400Regular',
        color: '#fff'
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    currency: {
        color: '#fff',
        fontSize: 20
    },
    priceStyle: {
        color: '#fff',
        fontSize: 24,
        marginLeft: 10,
        marginTop: 10
    }
});

export default styles;