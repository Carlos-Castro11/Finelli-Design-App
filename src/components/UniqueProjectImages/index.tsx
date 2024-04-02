import { UniqueProjectImageRoot } from "./UniqueProjectImageRoot";

interface UniqueProjectImagesProps {
  images: string[];
}

export default function UniqueProjectImages({
  images,
}: UniqueProjectImagesProps) {
  return (
    <UniqueProjectImageRoot.Wrapper>
      {images.map((image) => (
        <UniqueProjectImageRoot.Image image={image} key={image} />
      ))}
    </UniqueProjectImageRoot.Wrapper>
  );
}
