import SearchContainer from "../SearchContainer/SearchContainer";
import AgentPick from "../AgentPick";
import { useEffect, useState } from "react";
import { useParams } from "react-router-native";
export default function ShowAgents() {
  const [agents, setAgents] = useState([]);
  const { agentRole } = useParams();

  const getAgents = async () => {
    try {
      const response = await fetch(
        "https://valorant-api.com/v1/agents?language=es-ES&isPlayableCharacter=true"
      );
      if (!response.ok) {
        throw new Error(
          `La solicitud falló con el código de estado ${response.status}`
        );
      }
      const data = await response.json();
      if (!agentRole || agentRole === "Todos") {
        setAgents(data.data);
      } else {
        const filteredAgents = data.data.filter(
          (agent) => agent.role.displayName === agentRole
        );
        setAgents(filteredAgents);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  useEffect(() => {
    getAgents();
  }, [agentRole]);

  return (
    <>
      <SearchContainer />
      <AgentPick agents={agents} />
    </>
  );
}
