import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useParams } from "react-router-native";
import AgentDetail from "./AgentDetail/AgentDetail";
import GoBack from "../components/GoBack/GoBack";
export default function AgentDetailContainer() {
  const { agentUuid } = useParams();
  const [agent, setAgent] = useState([]);

  const getAgentByUuid = async (uuid) => {
    try {
      const response = await fetch(
        `https://valorant-api.com/v1/agents/${uuid}?language=es-ES`
      );
      if (!response.ok) {
        throw new Error(
          `La solicitud falló con el código de estado ${response.status}`
        );
      }
      const data = await response.json();
      setAgent(data.data);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  useEffect(() => {
    getAgentByUuid(agentUuid);
  }, [agentUuid]);

  return (
    <View style={styles.container}>
      <GoBack to={"/"} />
      <ScrollView>
        <View style={styles.containerAgent}>
          <AgentDetail agent={agent} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  containerAgent: {
    flex: 1,
  },
});
