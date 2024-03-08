// Icons
import Logo from "../assets/Logo";

export default function FooterContent() {
  return (
    <div className="bg-primary-color grid place-content-center py-2">
      <div
        className={`relative
        before:absolute before:content[''] before:bg-gradient-to-l before:from-transparent before:to-background-color 
        before:w-full before:h-0.5 before:right-full before:bottom-1/2
        before:-translate-y-1/2
        after:absolute after:content[''] after:bg-gradient-to-r after:from-transparent after:to-background-color
        after:w-full after:h-0.5 after:left-full after:bottom-1/2
        after:-translate-y-1/2 
      `}
      >
        <Logo primaryColor={false} />
      </div>
    </div>
  );
}
