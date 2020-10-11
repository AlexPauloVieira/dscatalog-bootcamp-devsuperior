import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  filterContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#3498db",
    paddingTop: 40,
    elevation: 5,
    position: "absolute",
    zIndex: 10,
  },
  topElements: {
    flex: 1,
    flexDirection: "row",
  },
  textStyle: {
    paddingLeft: 40,
    fontSize: 28,
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
  },
  topRightElements: {
    flex: 1,
    marginLeft: 60,
    marginTop: 15,
  },
  iconStyle: {
    marginBottom: 5,
    marginRight: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 20,
  },
  totalProducts: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
  imageStyle: {
    width: 300,
    height: 300,
  },
  inputsContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: 10,
  },
  input: {
    height: 45,
    width: 290,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginLeft: 40,
    marginVertical: 5,
  },
  searchCategory: {
    flexDirection: "row",
  },
  searchProduct: {
    flexDirection: "row",
  },
  buttonIcon: {
    backgroundColor: "#ff7979",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 45,
    marginVertical: 5,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  cardsContainer: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  button: {
    height: 280,
    width: "96%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 5,
    paddingVertical: 50,
    marginLeft: 5,
    backgroundColor: "#fff",
  },
  productImageStyle: {
    width: 150,
    height: 150,
    marginBottom: 80,
  },
  buttonText: {
    fontFamily: "Poppins_600SemiBold",
    color: "#121212",
    fontSize: 16,
    textAlign: "center",
    paddingTop: 40,
    marginBottom: 80,
    width: "90%",
  },
  priceContainer: {
    flexDirection: "row",
    marginVertical: 25
  },
  currency: {
    marginRight: 5,
    fontSize: 16,
    color: "#9E9E9E",
  },
  price: {
    fontSize: 20,
    color: "#407BFF",
    fontWeight: "bold",
  },
});

export default styles;
