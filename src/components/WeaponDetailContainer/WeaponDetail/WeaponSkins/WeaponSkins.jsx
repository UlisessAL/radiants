import { View, StyleSheet } from "react-native";
import SkinPick from "./SkinPick/SkinPick";
export default function WeaponSkins({ skins }) {
  return (
    <View style={styles.container}>
      {skins.map((skin) => (
        <View style={styles.skinContainer}>
          <SkinPick skin={skin} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skinContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
