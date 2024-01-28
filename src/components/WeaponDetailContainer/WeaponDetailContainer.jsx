import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useParams } from "react-router-native";
import SkeletonAgentDetail from "../SkeletonLoader/SkeletonAgentDetail";
import WeaponDetail from "./WeaponDetail/WeaponDetail";
import GoBack from "../GoBack/GoBack";
export default function WeaponDetailContainer() {
  const { weaponUuid } = useParams();
  const [weapon, setWeapon] = useState([]);

  const getWeaponByUuid = async (uuid) => {
    try {
      const response = await fetch(
        `https://valorant-api.com/v1/weapons/${uuid}?language=es-ES`
      );
      if (!response.ok) {
        throw new Error(
          `La solicitud falló con el código de estado ${response.status}`
        );
      }
      const data = await response.json();
      setWeapon(data.data);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  useEffect(() => {
    getWeaponByUuid(weaponUuid);
  }, [weaponUuid]);

  return (
    <View style={styles.container}>
      <GoBack to={"/weapons"} />
      {weapon <= 0 ? (
        <SkeletonAgentDetail />
      ) : (
        <ScrollView style={styles.scrollStyle}>
          <WeaponDetail weapon={weapon} />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollStyle: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#ece8e1",
  },
});
