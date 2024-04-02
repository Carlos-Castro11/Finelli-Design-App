interface UniqueProjectWrapperProps {
  children: React.ReactNode;
}

export default function UniqueProjectWrapper({
  children,
}: UniqueProjectWrapperProps) {
  return <div className="grid grid-cols-3 gap-4 mt-7">{children}</div>;
}
