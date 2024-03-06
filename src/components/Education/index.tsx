interface EducationProps {
  course: string;
  university: string;
}

import GraduationIcon from "../assets/Graduation";
import { EducationRoot } from "./EducationRoot";

export default function Education({ course, university }: EducationProps) {
  return (
    <EducationRoot.Wrapper>
      <EducationRoot.Content>
        <EducationRoot.Course course={course} />
        <EducationRoot.University university={university} />
      </EducationRoot.Content>
    </EducationRoot.Wrapper>
  );
}
