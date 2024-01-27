import { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
export default function AgentAbilities({ abilities }) {
  const [selectedSkill, setSelectedSkill] = useState(abilities[0]);
  const selectSkill = (skill) => {
    setSelectedSkill(skill);
  };

  const whichAbilityIs = (abilityName) => {
    switch (abilityName) {
      case "Ability1":
        return "Q:";
      case "Ability2":
        return "E:";
      case "Grenade":
        return "C:";
      case "Ultimate":
        return "X:";
      default:
        "";
        break;
    }
  };

  return (
    <>
      <View style={styles.abilitieContainer}>
        {abilities.map((ability) => (
          <View key={ability.displayName}>
            <Pressable onPress={() => selectSkill(ability)}>
              <Image
                source={{ uri: ability.displayIcon }}
                style={styles.imageAbility}
                tintColor={
                  ability.displayName === selectedSkill.displayName
                    ? "#2b2a29"
                    : "#8b978f"
                }
              />
            </Pressable>
          </View>
        ))}
      </View>
      <View style={styles.skillDescription}>
        <Text style={styles.nameSkill}>
          {whichAbilityIs(selectedSkill.slot)} {selectedSkill.displayName}
        </Text>
        <Text style={styles.description}>{selectedSkill.description}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  abilitieContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 20,
  },
  imageAbility: {
    width: 60,
    height: 60,
  },
  nameSkill: {
    fontWeight: "800",
    fontSize: 35,
  },
  skillDescription: {
    paddingTop: 20,
    minHeight: 200,
  },
  description: {
    fontSize: 20,
    color: "#8b978f",
  },
});
