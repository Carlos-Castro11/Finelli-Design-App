interface DefaultTextProps {
  text: string;
}

export default function DefaultText({ text }: DefaultTextProps) {
  return <p className="text-primary-color">{text}</p>;
}
