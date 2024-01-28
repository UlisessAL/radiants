import { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import MapDetail from "./MapDetail/MapDetail";
import SkeletonAgentDetail from "../components/SkeletonLoader/SkeletonAgentDetail";
import GoBack from "../components/GoBack/GoBack";
export default function MapDetailContainer() {
  const { mapUuid } = useParams();
  const [map, setMap] = useState([]);

  const getAgentByUuid = async (uuid) => {
    try {
      const response = await fetch(
        `https://valorant-api.com/v1/maps/${uuid}?language=es-ES`
      );
      if (!response.ok) {
        throw new Error(
          `La solicitud falló con el código de estado ${response.status}`
        );
      }
      const data = await response.json();
      setMap(data.data);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  useEffect(() => {
    getAgentByUuid(mapUuid);
  }, [mapUuid]);

  return (
    <View style={styles.container}>
      <GoBack to={"/maps"} />
      {map.displayName == undefined ? (
        <SkeletonAgentDetail />
      ) : (
        <ScrollView style={styles.scrollStyle}>
          <MapDetail map={map} />
        </ScrollView>
      )}
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
});
