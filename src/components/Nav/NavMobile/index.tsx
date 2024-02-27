"use client";
import React from "react";

// Components
import { NavMobileRoot } from "./NavMobileRoot";
import { NavRoot } from "../NavRoot";

// Constants
import { ConstantsTitles, ConstantsUrls } from "@/constants";

export default function NavMobile() {
  const [mobileActive, setMobileActive] = React.useState(false);
  return (
    <>
      <button
        onClick={() => setMobileActive(!mobileActive)}
        className="bg-violet-600 text-white"
      >
        menu
      </button>
      {mobileActive ? (
        <NavMobileRoot.Wrapper>
          <NavRoot.Item
            isMobile={true}
            link={ConstantsUrls.HOME_URL}
            text={ConstantsTitles.HOME_TITLE}
          />
          <NavRoot.Item
            isMobile={true}
            link={ConstantsUrls.ABOUT_URL}
            text={ConstantsTitles.ABOUT_TITLE}
          />
          <NavRoot.Item
            isMobile={true}
            link={ConstantsUrls.PROJECTS_URL}
            text={ConstantsTitles.PROJECTS_TITLE}
          />
          <NavRoot.Item
            isMobile={true}
            link={ConstantsUrls.CONTACT_URL}
            text={ConstantsTitles.CONTACT_TITLE}
          />
        </NavMobileRoot.Wrapper>
      ) : null}
    </>
  );
}
