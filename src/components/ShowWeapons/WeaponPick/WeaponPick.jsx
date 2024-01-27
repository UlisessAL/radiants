import { Text, StyleSheet, Image } from "react-native";
import { Link } from "react-router-native";
export default function WeaponPick({ weapon }) {
  return (
    <Link to={`/weapon/${weapon.uuid}`} style={styles.container}>
      <ImageAndText
        image={weapon.displayIcon}
        nameWeapon={weapon.displayName}
      />
    </Link>
  );
}

const ImageAndText = ({ image, nameWeapon }) => {
  return (
    <>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.nameWeapon}>{nameWeapon}</Text>
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
    backgroundColor: "#ebe7e080",
    width: 350,
    marginBottom: 10,
    height: 110,
    paddingTop: 5,
  },
  nameWeapon: {
    color: "#f0f0f0",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2,
    fontWeight: "bold",
    fontSize: 20,
  },
});
