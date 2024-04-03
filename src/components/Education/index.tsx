import GraduationIcon from "../assets/Graduation";
import AwardIcon from "../assets/Award";
import CalendarClockIcon from "../assets/CalendarClock";

interface EducationProps {
  course: string;
  university: string;
  time: string;
}

import { EducationRoot } from "./EducationRoot";

export default function Education({
  course,
  university,
  time,
}: EducationProps) {
  return (
    <EducationRoot.Wrapper>
      <EducationRoot.Content>
        <EducationRoot.Item icon={<AwardIcon />} text={course} />
        <EducationRoot.Item icon={<GraduationIcon />} text={university} />
        <EducationRoot.Item icon={<CalendarClockIcon />} text={time} />
      </EducationRoot.Content>
    </EducationRoot.Wrapper>
  );
}
