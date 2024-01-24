import ContentLoader, { Rect } from "react-content-loader/native";

export default function SkeletonMaps(props) {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <Rect x="38" y="11" rx="0" ry="0" width="350" height="105" />
      <Rect x="160" y="128" rx="0" ry="0" width="104" height="12" />
      <Rect x="291" y="57" rx="0" ry="0" width="0" height="1" />
    </ContentLoader>
  );
}
