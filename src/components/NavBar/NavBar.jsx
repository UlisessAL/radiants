import { View, Text, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import agentIcon from "../../../assets/user-circle.webp";
import mapIcon from "../../../assets/map.webp";
import { Link } from "react-router-native";

export default function NavBar() {
  return (
    <View style={styles.container}>
      <AppBarTab to="/">
        <TextAndImage image={agentIcon} text="Agentes" />
      </AppBarTab>
      <AppBarTab to="/maps">
        <TextAndImage image={mapIcon} text="Mapas" />
      </AppBarTab>
    </View>
  );
}

const TextAndImage = ({ image, text }) => {
  return (
    <>
      <Image source={image} tintColor="white" style={styles.icon} />
      <Text style={{ color: "white" }}>{text}</Text>
    </>
  );
};

const AppBarTab = ({ active, children, to }) => {
  return (
    <Link to={to} style={styles.iconContainer}>
      {children}
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Constants.statusBarHeight,
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#80808033",
    height: 80,
  },
  icon: {
    width: 50,
    height: 50,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
  },
});
