"use client";
import React from "react";

// Components
import { NavMobileRoot } from "./NavMobileRoot";
import { NavRoot } from "../NavRoot";
// Constants
import { ConstantsTitles, ConstantsUrls } from "@/constants";

// Icon
import Icon from "@/utils/Icon";

export default function NavMobile() {
  const [mobileActive, setMobileActive] = React.useState(false);
  return (
    <>
      <NavMobileRoot.Button
        onClick={() => setMobileActive(!mobileActive)}
        isMenuMobileActive={mobileActive}
      />
      {mobileActive ? (
        <NavMobileRoot.Wrapper isMobile={true}>
          <NavRoot.Item
            icon={<Icon name="Home" />}
            isMobile={true}
            link={ConstantsUrls.HOME_URL}
            text={ConstantsTitles.HOME_TITLE}
          />
          <NavRoot.Item
            icon={<Icon name="Heart" />}
            isMobile={true}
            link={ConstantsUrls.ABOUT_URL}
            text={ConstantsTitles.ABOUT_TITLE}
          />
          <NavRoot.Item
            icon={<Icon name="Book" />}
            isMobile={true}
            link={ConstantsUrls.PROJECTS_URL}
            text={ConstantsTitles.PROJECTS_TITLE}
          />
          <NavRoot.Item
            icon={<Icon name="User" />}
            isMobile={true}
            link={ConstantsUrls.CONTACT_URL}
            text={ConstantsTitles.CONTACT_TITLE}
          />
        </NavMobileRoot.Wrapper>
      ) : null}
    </>
  );
}
