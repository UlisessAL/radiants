import { Text, Image, StyleSheet } from "react-native";
export default function AgentInfo({ agent }) {
  return (
    <>
      <Image source={{ uri: agent.displayIcon }} style={styles.agentIcon} />
      <Text
        style={{
          color: "#1f1f1f",
          alignSelf: "center",
          fontWeight: "bold",
        }}
      >
        {agent.displayName}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  agentIcon: {
    width: 80,
    height: 80,
    objectFit: "cover",
    borderColor: "#1f1f1f",
    borderWidth: 1.5,
    backgroundColor: "#80808033",
  },
});
