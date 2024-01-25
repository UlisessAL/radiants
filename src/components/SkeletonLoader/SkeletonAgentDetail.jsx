import ContentLoader, { Rect } from "react-content-loader/native";

export default function SkeletonAgentDetail(props) {
  return (
    <ContentLoader
      speed={2}
      width={500}
      height={1050}
      viewBox="0 0 500 1050"
      backgroundColor="#9a8d8d"
      foregroundColor="#ecebeb"
      {...props}
    >
      <Rect x="26" y="8" rx="0" ry="0" width="350" height="473" />
      <Rect x="32" y="499" rx="0" ry="0" width="230" height="27" />
      <Rect x="291" y="57" rx="0" ry="0" width="0" height="1" />
      <Rect x="33" y="536" rx="0" ry="0" width="228" height="23" />
    </ContentLoader>
  );
}
