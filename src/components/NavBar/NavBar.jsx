import { View, Text, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import agentIcon from "../../../assets/user-circle.webp";
import mapIcon from "../../../assets/map.webp";
import { Link, useLocation } from "react-router-native";

export default function NavBar() {
  const { pathname } = useLocation();
  return (
    <View style={styles.container}>
      <AppBarTab to="/">
        <TextAndImage
          image={agentIcon}
          text="Agentes"
          active={pathname != "/maps"}
        />
      </AppBarTab>
      <AppBarTab to="/maps">
        <TextAndImage
          image={mapIcon}
          text="Mapas"
          active={pathname === "/maps"}
        />
      </AppBarTab>
    </View>
  );
}

const TextAndImage = ({ image, text, active }) => {
  const colorImg = active ? "#f0f0f0" : "#8b978f";
  return (
    <>
      <Image source={image} tintColor={colorImg} style={styles.icon} />
      <Text style={{ color: colorImg }}>{text}</Text>
    </>
  );
};

const AppBarTab = ({ children, to }) => {
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
    backgroundColor: "#ff46554d",
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
