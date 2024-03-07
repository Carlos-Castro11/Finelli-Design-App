interface EducationProps {
  course: string;
  university: string;
  time: string;
}

import GraduationIcon from "../assets/Graduation";
import { EducationRoot } from "./EducationRoot";

export default function Education({
  course,
  university,
  time,
}: EducationProps) {
  return (
    <EducationRoot.Wrapper>
      <EducationRoot.Content>
        <EducationRoot.Course course={course} />
        <EducationRoot.University university={university} />
        <EducationRoot.Time time={time} />
      </EducationRoot.Content>
    </EducationRoot.Wrapper>
  );
}
