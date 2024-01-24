import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Link, useParams } from "react-router-native";

export default function SearchContainer() {
  return (
    <View
      style={{ paddingTop: 10, justifyContent: "center", alignItems: "center" }}
    >
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <FilterTab to="/agents/Todos" text="Todos" />
        <FilterTab to="/agents/Duelista" text="Duelista" />
        <FilterTab to="/agents/Centinela" text="Centinela" />
        <FilterTab to="/agents/Iniciador" text="Iniciador" />
        <FilterTab to="/agents/Controlador" text="Controlador" />
      </ScrollView>
    </View>
  );
}

const FilterTab = ({ to, text }) => {
  const { agentRole } = useParams();
  const active = agentRole === text;
  const linkStyles = [styles.link, active && styles.active];
  return (
    <Link to={to} style={linkStyles}>
      <Text style={styles.text}> {text} </Text>
    </Link>
  );
};

const styles = StyleSheet.create({
  link: {
    borderWidth: 2,
    padding: 3,
    borderRadius: 10,
    borderColor: "#ff46554d",
    overflow: "hidden",
    backgroundColor: "#80808033",
  },
  scrollContainer: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    color: "#f0f0f0",
    fontWeight: "bold",
  },
  active: {
    backgroundColor: "#ff4655",
  },
});
