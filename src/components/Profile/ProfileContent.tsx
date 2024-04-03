// Components
import { ProfileRoot } from "./ProfileRoot";
import SecondTitle from "../SecondTitle";
import DefaultText from "../DefaultText";

// Data
import { ProfileData } from "@/Database/Profile";

export default function ProfileContent() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 mb-5 items-center">
      <ProfileRoot.Image image={ProfileData.image} />
      <div className="flex flex-col gap-1 xl:gap-2 text-center lg:text-start">
        <SecondTitle title={ProfileData.title} />
        <DefaultText text={ProfileData.text} />
      </div>
    </div>
  );
}
