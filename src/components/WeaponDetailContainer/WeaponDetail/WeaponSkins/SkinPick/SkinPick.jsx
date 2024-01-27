import { Text, StyleSheet, Image, View } from "react-native";
export default function SkinPick({ skin }) {
  return (
    <View style={styles.container}>
      <ImageAndText image={skin.displayIcon} nameSkin={skin.displayName} />
    </View>
  );
}

const ImageAndText = ({ image, nameSkin }) => {
  return (
    <>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.nameSkin}>{nameSkin}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 50,
    minHeight: 80,
    objectFit: "contain",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#00000073",
    width: 350,
    marginBottom: 10,
    height: 110,
    paddingTop: 5,
  },
  nameSkin: {
    color: "#efefef",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2,
    fontWeight: "bold",
    fontSize: 20,
  },
});
