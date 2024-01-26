import { View, Text, StyleSheet, Image } from "react-native";
import { findDetailMap } from "../../data/mapsDetailsSpanish";
import { findMap } from "../../data/mapsForAgents";
import { useEffect, useState } from "react";
import MapAgents from "./MapAgents/MapAgents";
export default function MapDetail({ map }) {
  const mapDetails = findDetailMap(map.displayName);
  const mapAgents = findMap(map.displayName);
  const [agents, setAgents] = useState([]);

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
      setAgents(data.data);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  useEffect(() => {
    getAgents();
  }, []);

  const filteredAgents = agents.filter((agent) =>
    mapAgents[0].agents.includes(agent.displayName)
  );

  return (
    <View style={styles.containerDetail}>
      <Image source={{ uri: map.splash }} style={styles.imageMap} />
      <View style={styles.nameContainer}>
        <Text style={styles.nameMap}>{map.displayName.toUpperCase()}</Text>
      </View>
      <View style={styles.containerInfo}>
        {mapDetails[0].description !== null && (
          <View>
            <Text style={styles.mapSizeTitle}>//Descripción</Text>
            <Text style={styles.mapDescription}>
              {mapDetails[0].description}
            </Text>
          </View>
        )}
        {map.displayIcon !== null && (
          <View>
            <Text style={styles.mapSizeTitle}>//Tamaño de mapa</Text>
            <View style={{ alignItems: "center", paddingTop: 50 }}>
              <Image source={{ uri: map.displayIcon }} style={styles.mapSize} />
            </View>
          </View>
        )}
        <MapAgents filteredAgents={filteredAgents} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ece8e1",
  },
  nameMap: {
    color: "#f0f0f0",
    fontSize: 50,
    fontWeight: "bold",
    color: "#383e3a",
  },
  imageMap: {
    height: 600,
    width: "100%",
    flex: 1,
    objectFit: "cover",
  },
  containerDetail: {
    flex: 1,
  },
  scrollStyle: {
    flex: 1,
  },
  nameContainer: {
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  mapSizeTitle: {
    color: "#1f1f1f",
    fontSize: 30,
  },
  containerInfo: {
    padding: 20,
    gap: 30,
  },
  mapSize: {
    width: 350,
    height: 350,
    alignContent: "center",
  },
  mapDescription: {
    color: "#8b978f",
    fontSize: 20,
  },
  agentsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
});
