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
    <div
      className={`${font.className} border-none uppercase bg-background-color p-2 rounded shadow-xlarge`}
    >
      <h1 className="md:text-7xl text-5xl font-bold drop-shadow-text text-primary-color">
        {text}
      </h1>
    </div>
  );
}
