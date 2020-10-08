import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  filterContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#3498db",
    paddingTop: 40,
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
  },
  totalProducts: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
  cardsContainer: {
    flex: 2,
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
    backgroundColor: "#686de0",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 45,
    marginVertical: 5,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default styles;
