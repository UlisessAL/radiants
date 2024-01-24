import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import SkeletonAgents from "./SkeletonLoader/SkeletonAgents";

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
            <View style={styles.agentPick}>
              <Image
                source={{ uri: agent.displayIcon }}
                style={styles.agentIcon}
              />
              <Text
                style={{
                  color: "white",
                  alignSelf: "center",
                  fontWeight: "bold",
                }}
              >
                {agent.displayName}{" "}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.uuid}
          numColumns={4}
        />
      )}
    </View>
  );
}

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
