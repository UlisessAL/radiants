import { Text, StyleSheet, Image } from "react-native";
import { Link } from "react-router-native";
export default function MapPick({ map, key }) {
  return (
    <Link to={`/map/${map.uuid}`} style={styles.container} key={key}>
      <ImageAndText image={map.listViewIcon} nameMap={map.displayName} />
    </Link>
  );
}

const ImageAndText = ({ image, nameMap }) => {
  return (
    <>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.nameMap}>{nameMap}</Text>
    </>
  );
};

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
