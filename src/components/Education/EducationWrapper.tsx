interface EducationWrapper {
  children: React.ReactNode;
}

export default function EducationWrapper({ children }: EducationWrapper) {
  return (
    <div
      className={`border border-light-blue 
      rounded p-2 shadow-md`}
    >
      {children}
    </div>
  );
}
