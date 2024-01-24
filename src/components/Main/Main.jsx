import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import NavBar from "../NavBar/NavBar";
import { Route, Routes } from "react-router-native";
import ShowAgents from "../ShowAgents/ShowAgents";

export default function Main() {
  return (
    <View style={styles.container}>
      <Routes>
        <Route path="/" element={<ShowAgents />} />
        <Route path="/maps" element={<Text>Probando</Text>} />
        <Route path="/agents/:agentRole" element={<ShowAgents />} />
      </Routes>
      <StatusBar style="auto" />
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111111",
    marginTop: Constants.statusBarHeight,
    flex: 1,
    gap: 10,
    justifyContent: "space-between",
  },
});
