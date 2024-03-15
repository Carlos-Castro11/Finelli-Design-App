interface EducationWrapper {
  children: React.ReactNode;
}

export default function EducationWrapper({ children }: EducationWrapper) {
  return (
    <div
      className={`bg-background-color border border-light-blue 
      rounded p-2 shadow`}
    >
      {children}
    </div>
  );
}
