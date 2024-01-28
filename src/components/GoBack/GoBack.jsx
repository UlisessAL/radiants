import { View, StyleSheet, Image } from "react-native";
import { Link } from "react-router-native";
import goBack from "../../../assets/goBack.webp";
const GoBack = ({ to }) => {
  return (
    <View style={styles.container}>
      <Link to={to} style={styles.imageContainer}>
        <Image source={goBack} style={styles.image} />
      </Link>
    </View>
  );
};
export default GoBack;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ece8e1",
    height: 50,
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
  imageContainer: {
    borderWidth: 5,
    width: 40,
    borderRadius: 100,
  },
});
