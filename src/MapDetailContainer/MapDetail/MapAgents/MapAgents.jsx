import { View, Text, StyleSheet } from "react-native";
import AgentInfo from "../../../AgentInfo/AgentInfo";
import { Link } from "react-router-native";
export default function MapAgents({ filteredAgents }) {
  return (
    <>
      {filteredAgents.length > 0 && (
        <View style={styles.agentRecommendedContainer}>
          <Text style={styles.mapSizeTitle}>//Agentes recomendados</Text>
          <View style={styles.agentsContainer}>
            {filteredAgents.map((agent) => (
              <Link to={`/agent/${agent.uuid}`} key={agent.uuid}>
                <AgentInfo agent={agent} />
              </Link>
            ))}
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  agentRecommendedContainer: {
    gap: 20,
  },
  mapSizeTitle: {
    color: "#1f1f1f",
    fontSize: 30,
  },
  agentsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },
});
