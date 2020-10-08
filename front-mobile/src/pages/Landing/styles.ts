import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#3498db",
  },
  textContainer: {
    paddingVertical: 45,
    justifyContent: "space-around",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 32,
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
  },
  imageStyle: {
    width: "95%",
    height: 250,
    marginBottom: 100,
  },
  descriptionStyle: {
    marginTop: -30,
    marginBottom: 30,
    textAlign: "center",
    fontSize: 22,
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
  button: {
    backgroundColor: "#079992",
    flexDirection: "row",
    borderRadius: 10,
  },
  buttonIcon: {
    backgroundColor: "#e55039",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
  },
});

export default styles;
