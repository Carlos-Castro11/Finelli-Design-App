// Components
import { NavRoot } from "./NavRoot";

// Constants
import { ConstantsTitles, ConstantsUrls } from "@/constants";

export default function Nav() {
  return (
    <NavRoot.Wrapper>
      <NavRoot.Item
        link={ConstantsUrls.HOME_URL}
        text={ConstantsTitles.HOME_TITLE}
      />
      <NavRoot.Item
        link={ConstantsUrls.PROJECTS_URL}
        text={ConstantsTitles.PROJECTS_TITLE}
      />
      <NavRoot.Item
        link={ConstantsUrls.SERVICES_URL}
        text={ConstantsTitles.SERVICES_TITLE}
      />
      <NavRoot.Item
        link={ConstantsUrls.ABOUT_URL}
        text={ConstantsTitles.ABOUT_TITLE}
      />
      <NavRoot.Item
        link={ConstantsUrls.CONTACT_URL}
        text={ConstantsTitles.CONTACT_TITLE}
        style={`bg-primary-color text-white p-2 rounded-md shadow after:invisible
        hover:bg-background-color hover:text-primary-color transition-all duration-200
        `}
      />
    </NavRoot.Wrapper>
  );
}
