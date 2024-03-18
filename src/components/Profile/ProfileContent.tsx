// Components
import { CardRoot } from "../Card/CardRoot";

// Data
import { ProfileData } from "@/Database/Profile";
import { ProfileRoot } from "./ProfileRoot";

export default function ProfileContent() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 mb-5 items-center">
      <ProfileRoot.Image image={ProfileData.image} />
      <div className="flex flex-col gap-1 xl:gap-2 text-center lg:text-start">
        <CardRoot.Title title={ProfileData.title} />
        <p className="text-primary-color">{ProfileData.text}</p>
      </div>
    </div>
  );
}
