interface ProfileWrapper {
  children: React.ReactNode;
}

export default function ProfileWrapper({ children }: ProfileWrapper) {
  return (
    <div
      className={`
      mt-8 md:px-44
    `}
    >
      {children}
    </div>
  );
}
