import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import SkeletonAgents from "./SkeletonLoader/SkeletonAgents";
import { Link } from "react-router-native";

export default function AgentPick({ agents }) {
  const fill = Array(23);

  return (
    <View style={styles.agentPickContainer}>
      {agents.length <= 0 ? (
        <FlatList
          data={fill}
          renderItem={() => <SkeletonAgents />}
          numColumns={4}
        />
      ) : (
        <FlatList
          data={agents}
          renderItem={({ item: agent }) => (
            <Link to={`/agent/${agent.uuid}`} style={styles.agentPick}>
              <AgentInfo agent={agent} />
            </Link>
          )}
          keyExtractor={(item) => item.uuid}
          numColumns={4}
        />
      )}
    </View>
  );
}

const AgentInfo = ({ agent }) => {
  return (
    <>
      <Image source={{ uri: agent.displayIcon }} style={styles.agentIcon} />
      <Text
        style={{
          color: "white",
          alignSelf: "center",
          fontWeight: "bold",
        }}
      >
        {agent.displayName}{" "}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  agentIcon: {
    width: 80,
    height: 80,
    objectFit: "cover",
    borderColor: "#ece8e1",
    borderWidth: 1.5,
    backgroundColor: "#80808033",
  },
  agentPick: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingBottom: 10,
  },
  agentPickContainer: {
    gap: 10,
    flex: 1,
  },
});
