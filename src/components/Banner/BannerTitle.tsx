// Font
import { Roboto } from "next/font/google";

const font = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface BannerTitleProps {
  text: string;
}
export default function BannerTitle({ text }: BannerTitleProps) {
  return (
    <div className={`${font.className} uppercase p-2 z-10`}>
      <h1 className="md:text-7xl text-5xl font-bold drop-shadow-text text-background-color">
        {text}
      </h1>
    </div>
  );
}
