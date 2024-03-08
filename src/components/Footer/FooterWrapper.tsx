interface FooterWrapper {
  children: React.ReactNode;
}

export default function FooterWrapper({ children }: FooterWrapper) {
  return <footer id="contact">{children}</footer>;
}
