import GraduationIcon from "../assets/Graduation";

interface EducationUniversityProps {
  university: string;
}

export default function EducationUniversity({
  university,
}: EducationUniversityProps) {
  return (
    <div className="flex gap-2">
      <GraduationIcon />
      <p>{university}</p>
    </div>
  );
}
