// Components
import { FooterRoot } from "./FooterRoot";

// Icon
import Icon from "@/utils/Icon";
import Logo from "../assets/Logo";

export default function Footer() {
  return (
    <FooterRoot.Wrapper>
      <FooterRoot.Content />
      {/* Second Footer */}
      <FooterRoot.Second />
    </FooterRoot.Wrapper>
  );
}
