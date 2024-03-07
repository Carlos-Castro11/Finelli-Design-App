interface ProfileWrapper {
  children: React.ReactNode;
}

export default function ProfileWrapper({ children }: ProfileWrapper) {
  return (
    <div
      className={`
    bg-background-color p-4 rounded-md shadow-large
    `}
    >
      {children}
    </div>
  );
}
