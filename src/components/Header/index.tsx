import { HeaderRoot } from "./HeaderRoot";
// Components
import Logo from "../Logo";
import Nav from "../Nav";

export default function Header() {
  return (
    <HeaderRoot.Wrapper>
      <HeaderRoot.Content>
        <Logo />
        <Nav />
      </HeaderRoot.Content>
    </HeaderRoot.Wrapper>
  );
}
