interface UniqueProjectWrapperProps {
  children: React.ReactNode;
}

export default function UniqueProjectWrapper({
  children,
}: UniqueProjectWrapperProps) {
  return (
    <div className="grid grid-cols-3 gap-4 lg:gap-0 lg:gap-y-4 mt-5">
      {children}
    </div>
  );
}
