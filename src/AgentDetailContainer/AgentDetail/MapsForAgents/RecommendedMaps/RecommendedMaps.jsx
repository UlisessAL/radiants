import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapPick from "../../../../components/MapPick/MapPick";
import SkeletonMaps from "../../../../components/SkeletonLoader/SkeletonMaps";
import { findAgent } from "../../../../data/agentsForMaps";
export default function RecommendedMaps({ nameAgent }) {
  const [maps, setMaps] = useState([]);
  const agent = findAgent(nameAgent);
  const getMaps = async () => {
    try {
      const response = await fetch(
        "https://valorant-api.com/v1/maps?language=es-ES"
      );
      if (!response.ok) {
        throw new Error(
          `La solicitud falló con el código de estado ${response.status}`
        );
      }
      const data = await response.json();
      setMaps(data.data);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  useEffect(() => {
    getMaps();
  }, []);

  const filteredMaps = maps.filter((map) =>
    agent[0].recommendedMaps.includes(map.displayName)
  );
  const fillMap = Array(10);

  return (
    <>
      {maps.length <= 0 ? (
        <>
          {fillMap.map((a, index) => (
            <View key={index} style={{ flex: 1 }}>
              <SkeletonMaps />
            </View>
          ))}
        </>
      ) : (
        <View style={styles.container}>
          {filteredMaps.map((map) => (
            <View key={map.uuid} style={{ flex: 1 }}>
              <MapPick map={map} key={map.uui} />
            </View>
          ))}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
  },
});
