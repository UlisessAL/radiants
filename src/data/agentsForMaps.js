export const agentsForMaps = [
  { agent: "Sage", recommendedMaps: ["Icebox", "Split", "Ascent"] },
  { agent: "Neon", recommendedMaps: ["Lotus", "Fracture"] },
  { agent: "Gekko", recommendedMaps: ["Ascent", "Pearl", "Haven"] },
  { agent: "Fade", recommendedMaps: ["Ascent", "Haven", "Bind"] },
  { agent: "Breach", recommendedMaps: ["Fracture", "Ascent"] },
  {
    agent: "Deadlock",
    recommendedMaps: ["Ascent", "Fracture", "Pearl", "Bind"],
  },
  { agent: "Raze", recommendedMaps: ["Sunset", "Split", "Bind"] },
  { agent: "Chamber", recommendedMaps: ["Bind", "Haven"] },
  { agent: "KAY/O", recommendedMaps: ["Ascent", "Breeze"] },
  { agent: "Skye", recommendedMaps: ["Bind", "Split", "Sunset"] },
  { agent: "Cypher", recommendedMaps: ["Sunset", "Split", "Breeze"] },
  {
    agent: "Sova",
    recommendedMaps: ["Haven", "Ascent", "Icebox", "Breeze", "Sunset"],
  },
  { agent: "Killjoy", recommendedMaps: ["Haven", "Ascent", "Icebox"] },
  {
    agent: "Harbor",
    recommendedMaps: ["Breeze", "Icebox", "Bind", "Pearl"],
  },
  { agent: "Viper", recommendedMaps: ["Icebox", "Breeze", "Bind"] },
  { agent: "Phoenix", recommendedMaps: ["Ascent"] },
  { agent: "Astra", recommendedMaps: ["Sunset"] },
  { agent: "Brimstone", recommendedMaps: ["Bind", "Sunset"] },
  { agent: "Iso", recommendedMaps: ["Lotus", "Sunset"] },
  { agent: "Yoru", recommendedMaps: ["Bind", "Icebox", "Ascent"] },
  { agent: "Reyna", recommendedMaps: ["Split", "Bind"] },
  { agent: "Omen", recommendedMaps: ["Haven", "Ascent", "Split"] },
  {
    agent: "Jett",
    recommendedMaps: ["Breeze", "Haven", "Ascent", "Icebox"],
  },
];

export const findAgent = (agentName) => {
  const array = agentsForMaps.filter((agent) => agent.agent == agentName);
  return array;
};
