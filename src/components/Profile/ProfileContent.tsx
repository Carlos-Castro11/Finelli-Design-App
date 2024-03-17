// Components
import { CardRoot } from "../Card/CardRoot";

// Data
import { ProfileData } from "@/Database/Profile";
import { ProfileRoot } from "./ProfileRoot";

export default function ProfileContent() {
  return (
    <div className="grid gap-4 mb-4 lg:grid-cols-2 lg:gap-7">
      <div className="flex place-content-center">
        <ProfileRoot.Image image={ProfileData.image} />
      </div>
      <div className="flex flex-col gap-2 lg:gap-5">
        <CardRoot.Title title={ProfileData.title} />
        <p className="text-primary-color">{ProfileData.text}</p>
      </div>
    </div>
  );
}
