import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import AgentAbilities from "./AgentAbilities/AgentAbilities";
import MapsForAgents from "./MapsForAgents/MapsForAgents";
export default function AgentDetail({ agent }) {
  return (
    <>
      {agent.displayName == undefined ? (
        <Text>Cargando...</Text>
      ) : (
        <>
          <View style={styles.imageContainer}>
            <ImageBackground
              source={{ uri: agent.background }}
              style={styles.backgroundImage}
            />
            <Image source={{ uri: agent.bustPortrait }} style={styles.image} />
          </View>
          <View style={styles.infoAgent}>
            <Text style={styles.roleAgent}>//ROL</Text>
            <View style={styles.roleAndIcon}>
              <Text style={styles.nameAgent}>{agent.role.displayName}</Text>
              <Image
                style={styles.roleIcon}
                source={{ uri: agent.role.displayIcon }}
                tintColor="#2b2a29"
              />
            </View>
            <Text style={styles.titleDescription}>//Descripción</Text>
            <Text style={styles.description}>{agent.description}</Text>
            <View>
              <Text style={styles.titleHabilities}>Habilidades</Text>
              <AgentAbilities abilities={agent.abilities} />
            </View>
          </View>
          <View>
            <MapsForAgents agentName={agent.displayName} />
          </View>
        </>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%", // ajusta el ancho según tus necesidades
    height: "100%", // ajusta la altura según tus necesidades
    resizeMode: "cover", // Opciones: 'cover', 'contain', 'stretch', 'repeat', 'center'
    position: "absolute",
  },
  roleAgent: {
    color: "#141212",
    fontSize: 30,
  },
  imageContainer: {
    backgroundColor: "#0f1923",
    minHeight: 570,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  infoAgent: {
    padding: 20,
    flex: 1,
  },
  nameAgent: {
    fontSize: 50,
    fontWeight: "bold",
  },
  roleIcon: {
    width: 40,
    height: 40,
  },
  roleAndIcon: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  titleDescription: {
    paddingTop: 20,
    color: "#141212",
    fontSize: 30,
  },
  description: {
    fontSize: 20,
    color: "#8b978f",
  },
  titleHabilities: {
    fontSize: 50,
    fontWeight: "bold",
    paddingTop: 50,
  },
});
