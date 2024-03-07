import CalendarClockIcon from "../assets/CalendarClock";

interface EducationTime {
  time: string;
}

export default function EducationTime({ time }: EducationTime) {
  return (
    <div className="flex gap-2">
      <CalendarClockIcon />
      <p>{time}</p>
    </div>
  );
}
