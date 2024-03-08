interface FooterWrapper {
  children: React.ReactNode;
}

export default function FooterWrapper({ children }: FooterWrapper) {
  return (
    <footer id="contact" className="shadow-large">
      {children}
    </footer>
  );
}
