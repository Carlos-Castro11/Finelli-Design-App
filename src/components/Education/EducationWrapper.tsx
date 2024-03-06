interface EducationWrapper {
  children: React.ReactNode;
}

export default function EducationWrapper({ children }: EducationWrapper) {
  return (
    <div
      className={`bg-background-color border border-primary-color 
      rounded p-2 shadow flex self-center`}
    >
      {children}
    </div>
  );
}
