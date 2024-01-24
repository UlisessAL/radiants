import ContentLoader, { Rect } from "react-content-loader/native";

export default function SkeletonAgents(props) {
  return (
    <ContentLoader
      speed={2}
      width={150}
      height={80}
      viewBox="0 0 300 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <Rect x="43" y="28" rx="0" ry="0" width="119" height="105" />
      <Rect x="50" y="147" rx="0" ry="0" width="104" height="11" />
    </ContentLoader>
  );
}
