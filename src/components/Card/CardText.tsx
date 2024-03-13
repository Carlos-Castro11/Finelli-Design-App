interface CardTextProps {
  text: string;
}

export default function CardText({ text }: CardTextProps) {
  return <p className="text-gray-700">{text}</p>;
}
