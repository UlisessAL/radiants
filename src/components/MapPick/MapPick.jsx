import { View, Text, StyleSheet, Image } from "react-native";
export default function MapPick({ map }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: map.listViewIcon }} style={styles.image} />
      <Text style={styles.nameMap}>{map.displayName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 80,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#ff4655",
    width: 350,
    marginBottom: 10,
    height: 110,
  },
  nameMap: {
    color: "#f0f0f0",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2,
    fontWeight: "bold",
    fontSize: 20,
  },
});
