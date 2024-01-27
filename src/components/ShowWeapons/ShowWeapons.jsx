import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SkeletonMaps from "../SkeletonLoader/SkeletonMaps";
import MapPick from "../MapPick/MapPick";
import WeaponPick from "./WeaponPick/WeaponPick";
export default function ShowWeapons() {
  const [weapons, setWeapons] = useState([]);
  const getWeapons = async () => {
    try {
      const response = await fetch(
        "https://valorant-api.com/v1/weapons?language=es-ES"
      );
      if (!response.ok) {
        throw new Error(
          `La solicitud falló con el código de estado ${response.status}`
        );
      }
      const data = await response.json();
      setWeapons(data.data);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  useEffect(() => {
    getWeapons();
  }, []);

  const fill = Array(10);
  return (
    <View style={styles.container}>
      {weapons.length <= 0 ? (
        <FlatList data={fill} renderItem={() => <SkeletonMaps />} />
      ) : (
        <>
          <FlatList
            data={weapons}
            renderItem={({ item: weapon }) => <WeaponPick weapon={weapon} />}
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
