"use client";
import { HeaderRoot } from "./HeaderRoot";

// Components
import Logo from "../Logo";
import Nav from "../Nav";
import NavMobile from "../Nav/NavMobile";

// Hooks
import useMedia from "@/hooks/useMedia";

//Utils
import Delayed from "@/utils/Delayed";

export default function Header() {
  const mobile = useMedia("(max-width: 700px)");
  return (
    <HeaderRoot.Wrapper>
      <HeaderRoot.Content>
        <Logo />
        {mobile ? (
          <NavMobile />
        ) : (
          <Delayed>
            <Nav />
          </Delayed>
        )}
      </HeaderRoot.Content>
    </HeaderRoot.Wrapper>
  );
}
