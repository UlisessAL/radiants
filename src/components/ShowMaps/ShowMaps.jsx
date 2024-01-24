import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MapPick from "../MapPick/MapPick";
import SkeletonMaps from "../SkeletonLoader/SkeletonMaps";
export default function ShowMaps() {
  const [maps, setMaps] = useState([]);
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

  const fill = Array(10);

  return (
    <View style={styles.container}>
      {maps.length <= 0 ? (
        <FlatList data={fill} renderItem={() => <SkeletonMaps />} />
      ) : (
        <>
          <FlatList
            data={maps}
            renderItem={({ item: map }) => <MapPick map={map} />}
            keyExtractor={(item) => item.uuid}
          />
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
  },
});
