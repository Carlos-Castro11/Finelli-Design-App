interface ProfileWrapper {
  children: React.ReactNode;
}

export default function ProfileWrapper({ children }: ProfileWrapper) {
  return (
    <div
      className={`
      mt-8 lg:w-[80%] lg:mx-auto
    `}
    >
      {children}
    </div>
  );
}
