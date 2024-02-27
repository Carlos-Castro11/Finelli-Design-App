import { NavRoot } from "./NavRoot";

export default function Nav() {
  return (
    <NavRoot.Wrapper>
      <NavRoot.Item text="home" />
      <NavRoot.Item text="sobre" />
      <NavRoot.Item text="projetos" />
      <NavRoot.Item text="contato" />
    </NavRoot.Wrapper>
  );
}
