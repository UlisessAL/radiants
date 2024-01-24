import { View, Text, StyleSheet } from "react-native";
import RecommendedMaps from "./RecommendedMaps/RecommendedMaps";
export default function MapsForAgents({ agentName }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleMaps}>Mapas recomendados</Text>
      <RecommendedMaps nameAgent={agentName} />
    </View>
  );
}

const styles = StyleSheet.create({
  titleMaps: {
    fontSize: 30,
    fontWeight: "bold",
  },
  container: {
    padding: 20,
    alignItems: "center",
  },
});
