import { View, Text, StyleSheet, Image } from "react-native";
import WeaponSkins from "./WeaponSkins/WeaponSkins";
export default function WeaponDetail({ weapon }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleWeapon}>{weapon.displayName}</Text>
      </View>
      <Image source={{ uri: weapon.displayIcon }} style={styles.imageWeapon} />
      <View style={styles.detailsContainer}>
        {weapon.shopData && (
          <View>
            <Text style={styles.titleDescription}>//Precio</Text>
            <Text style={styles.description}>
              {weapon.shopData.cost} créditos
            </Text>
          </View>
        )}
        {weapon.weaponStats && weapon.weaponStats.damageRanges.length > 1 && (
          <TableForNormalWeapons weapon={weapon} />
        )}
        {weapon.weaponStats && weapon.weaponStats.damageRanges.length == 1 && (
          <TableForSnipers weapon={weapon} />
        )}
        <Text style={styles.titleDescription}>//Skins</Text>
        <WeaponSkins skins={weapon.skins} />
      </View>
    </View>
  );
}

const TableThreeColumn = ({ textOne, textTwo, textThree, isTitle }) => {
  const STYLES_TEXT = [
    isTitle && styles.titleTable,
    !isTitle && styles.textTable,
  ];
  return (
    <View style={styles.tableColumn}>
      <Text style={STYLES_TEXT}>{textOne}</Text>
      <Text style={STYLES_TEXT}>{textTwo}</Text>
      <Text style={STYLES_TEXT}>{textThree}</Text>
    </View>
  );
};

const TableTwoColumn = ({ textOne, textTwo, isTitle }) => {
  const STYLES_TEXT = [
    isTitle && styles.titleTable,
    !isTitle && styles.textTable,
  ];
  return (
    <View style={styles.tableColumn}>
      <Text style={STYLES_TEXT}>{textOne}</Text>
      <Text style={STYLES_TEXT}>{textTwo}</Text>
    </View>
  );
};

const TableForNormalWeapons = ({ weapon }) => {
  return (
    <View style={styles.tableContainer}>
      <TableThreeColumn
        textOne={"Daño"}
        textTwo={"Cerca"}
        textThree={"Lejos"}
        isTitle={true}
      />
      <TableThreeColumn
        textOne={"Cabeza"}
        textTwo={Math.round(weapon.weaponStats.damageRanges[0].headDamage)}
        textThree={Math.round(weapon.weaponStats.damageRanges[1].headDamage)}
      />
      <TableThreeColumn
        textOne={"Cuerpo"}
        textTwo={Math.round(weapon.weaponStats.damageRanges[0].bodyDamage)}
        textThree={Math.round(weapon.weaponStats.damageRanges[1].bodyDamage)}
      />
      <TableThreeColumn
        textOne={"Piernas"}
        textTwo={Math.round(weapon.weaponStats.damageRanges[0].legDamage)}
        textThree={Math.round(weapon.weaponStats.damageRanges[1].legDamage)}
      />
    </View>
  );
};

const TableForSnipers = ({ weapon }) => {
  return (
    <View style={styles.tableContainer}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 35 }}>Daño</Text>
      </View>
      <TableTwoColumn
        textOne={"Cabeza"}
        textTwo={Math.round(weapon.weaponStats.damageRanges[0].headDamage)}
      />
      <TableTwoColumn
        textOne={"Cuerpo"}
        textTwo={Math.round(weapon.weaponStats.damageRanges[0].bodyDamage)}
      />
      <TableTwoColumn
        textOne={"Piernas"}
        textTwo={Math.round(weapon.weaponStats.damageRanges[0].legDamage)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ece8e1",
    gap: 20,
  },
  imageWeapon: {
    width: "100%",
    height: 100,
    marginTop: 50,
    objectFit: "contain",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2b2a29",
  },
  titleWeapon: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
  },
  detailsContainer: {
    padding: 20,
    gap: 20,
  },
  titleDescription: {
    color: "#141212",
    fontSize: 50,
  },
  description: {
    fontSize: 40,
    color: "#8b978f",
  },
  tableContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "stretch",
    gap: 10,
    borderWidth: 2,
    padding: 5,
  },
  tableColumn: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textTable: {
    minWidth: 50,
    fontSize: 20,
    color: "#8b978f",
  },
  titleTable: {
    fontSize: 35,
  },
});
