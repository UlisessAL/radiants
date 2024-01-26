export const agentsInMaps = [
  { mapName: "Lotus", agents: ["Sage", "Neon", "Chamber", "Harbor", "Iso"] },
  {
    mapName: "Ascent",
    agents: [
      "Sage",
      "Gekko",
      "Fade",
      "Breach",
      "Deadlock",
      "KAY/O",
      "Sova",
      "Killjoy",
      "Harbor",
      "Phoenix",
      "Omen",
      "Jett",
    ],
  },
  {
    mapName: "Split",
    agents: ["Sage", "Raze", "Skye", "Cypher", "Reyna", "Omen"],
  },
  { mapName: "Fracture", agents: ["Neon", "Breach", "Deadlock"] },
  {
    mapName: "Bind",
    agents: [
      "Fade",
      "Deadlock",
      "Raze",
      "Chamber",
      "Skye",
      "Cypher",
      "Viper",
      "Brimstone",
      "Yoru",
      "Reyna",
    ],
  },
  {
    mapName: "Breeze",
    agents: ["KAY/O", "Cypher", "Sova", "Harbor", "Viper", "Jett"],
  },
  {
    mapName: "Sunset",
    agents: ["Raze", "Skye", "Cypher", "Sova", "Astra", "Brimstone", "Iso"],
  },
  { mapName: "Pearl", agents: ["Gekko", "Deadlock", "Harbor", "Astra"] },
  {
    mapName: "Icebox",
    agents: ["Sage", "Sova", "Killjoy", "Harbor", "Viper", "Yoru", "Jett"],
  },
  {
    mapName: "Haven",
    agents: ["Gekko", "Fade", "Chamber", "Sova", "Killjoy", "Omen", "Jett"],
  },
  { mapName: "Campo de tiro", agents: [] },
  { mapName: "District", agents: [] },
  { mapName: "Piazza", agents: [] },
  { mapName: "Drift", agents: [] },
  { mapName: "Kasbah", agents: [] },
];

export const findMap = (mapName) => {
  const array = agentsInMaps.filter((map) => map.mapName == mapName);
  return array;
};
