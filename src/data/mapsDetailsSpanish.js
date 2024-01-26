export const DETAIL_MAPS = [
  {
    mapName: "Ascent",
    description:
      "Un terreno abierto para las batallas por posicionamiento y los enfrentamientos de desgaste divide Ascent en dos sitios. Puedes fortificar cada uno utilizando puertas destructibles: una vez puestas, no habrá manera de pasar a menos que las derribes. Cede el menor territorio posible.",
  },
  {
    mapName: "Split",
    description:
      "Si quieres ir lejos, debes subir. Un par de sitios divididos por un centro elevado permite un movimiento rápido por medio de dos ascensores de cuerda. Cada sitio cuenta con una gran torre vital para el control. Recuerda mirar arriba antes de que todo vuele por los aires.",
  },
  {
    mapName: "Fracture",
    description:
      "Un centro de investigación ultrasecreto dividido por un experimento fallido de radianita. Con opciones de defensa tan divididas como el mismo mapa, la elección es tuya: enfrentar a los atacantes en su propio territorio o cerrar las escotillas y resistir el asalto.",
  },
  {
    mapName: "Bind",
    description:
      "Dos sitios. No existe un centro. Debes elegir derecha o izquierda. ¿Cuál será tu elección? Ambos ofrecen caminos directos para los atacantes y un par de teletransportadores unidireccionales facilitan el flanqueo.",
  },
  {
    mapName: "Breeze",
    description:
      "Disfruta de la vista de ruinas históricas o cuevas junto al mar en este paraíso tropical. Pero trae algo con que cubrirte del sol... y de los disparos a larga distancia. Lo necesitarás en estos grandes espacios abiertos. Cuida los flancos y siente la brisa.",
  },
  { mapName: "District", description: null },
  { mapName: "Kasbah", description: null },
  { mapName: "Drift", description: null },
  { mapName: "Piazza", description: null },
  {
    mapName: "Lotus",
    description:
      "Una misteriosa estructura cuyos muros resguardan un conducto astral irradia poder ancestral. Inmensas y monolíticas puertas brindan una variedad de oportunidades de movimiento y abren el camino a tres misteriosos sitios.",
  },
  {
    mapName: "Sunset",
    description:
      "Un desastre en una instalación local de Kingdom amenaza con sepultar el vecindario completo. Visita tu camión de comida favorito y luego lleva la pelea a la ciudad en este mapa tradicional de tres carriles.",
  },
  {
    mapName: "Pearl",
    description:
      "Los atacantes avanzan hacia los defensores en este mapa de dos sitios, ambientado en una ciudad submarina. Pearl es un mapa enfocado en el entorno, sin mecánicas. Lleva la batalla hacia un Mid compacto o a zonas más extendidas en nuestro primer mapa en la Tierra Omega.",
  },
  {
    mapName: "Icebox",
    description:
      "Tu próximo campo de batalla es un sitio de excavación secreto de Kingdom en algún lugar del ártico. Los dos sitios para plantar están protegidos tanto por nieve como por metal, y no es fácil acceder a ellos de forma horizontal. Aprovecha las tirolesas y nunca te verán venir.",
  },
  { mapName: "Campo de tiro", description: null },
  {
    mapName: "Haven",
    description:
      "Bajo un monasterio olvidado, emerge un clamor entre los agentes rivales que se enfrentan para controlar tres sitios. Hay más territorio por controlar, pero los defensores pueden usar el terreno adicional para realizar ataques agresivos.",
  },
];

export const findDetailMap = (mapName) => {
  const array = DETAIL_MAPS.filter((map) => map.mapName == mapName);
  return array;
};
