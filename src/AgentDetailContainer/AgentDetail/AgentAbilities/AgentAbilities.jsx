import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
export default function AgentAbilities({ abilities }) {
  const [selectedSkill, setSelectedSkill] = useState(abilities[0]);
  const selectSkill = (skill) => {
    setSelectedSkill(skill);
  };
  return (
    <>
      <View style={styles.abilitieContainer}>
        {abilities.map((ability) => (
          <View key={ability.displayName}>
            <TouchableOpacity onPress={() => selectSkill(ability)}>
              <Image
                source={{ uri: ability.displayIcon }}
                style={styles.imageAbility}
                tintColor={
                  ability.displayName === selectedSkill.displayName
                    ? "#2b2a29"
                    : "#8b978f"
                }
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.skillDescription}>
        <Text style={styles.nameSkill}>{selectedSkill.displayName}</Text>
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
