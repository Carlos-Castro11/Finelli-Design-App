import AwardIcon from "../assets/Award";

interface EducationCourseProps {
  course: string;
}

export default function EducationCourse({ course }: EducationCourseProps) {
  return (
    <div className="flex gap-2">
      <AwardIcon />
      <p>{course}</p>
    </div>
  );
}
