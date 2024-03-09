// Components
import { FooterRoot } from "./FooterRoot";
import ContactItem from "../ContactItem";
import Logo from "../assets/Logo";

export default function Footer() {
  return (
    <FooterRoot.Wrapper>
      <FooterRoot.Content>
        <div
          className={`relative flex place-content-center place-self-center
          after:content[''] after:bg-gradient-to-r after:from-transparent after:to-background-color 
          after:absolute after:h-[1px] after:w-full after:left-full after:bottom-1/2
          before:content[''] before:bg-gradient-to-l before:from-transparent before:to-background-color 
          before:absolute before:h-[1px] before:w-full before:right-full before:bottom-1/2
        `}
        >
          <Logo primaryColor={false} />
        </div>
        <ContactItem link={"/"} icon="Instagram" linkText="@giovana_finelli" />
        <ContactItem link={"/"} icon="Phone" linkText="(38) 9 9128-5937" />
        <ContactItem
          link={"/"}
          icon="Mail"
          linkText="giovanafinelli@gmail.com"
        />
      </FooterRoot.Content>
      {/* Second Footer */}
      <FooterRoot.Second />
    </FooterRoot.Wrapper>
  );
}
