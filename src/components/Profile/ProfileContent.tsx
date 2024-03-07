import { CardRoot } from "@/components/Card/CardRoot";
import ProjectImage from "../Project/ProjectImage";

export default function ProfileContent() {
  return (
    <div className="grid gap-4 mb-4">
      <ProjectImage image="iron-man.jpg" />
      <CardRoot.Title title="giovana finelli" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed blanditiis
        quasi praesentium, saepe officia, magnam exercitationem explicabo itaque
        rerum eveniet repellendus soluta fugit obcaecati qui ducimus sit ut
        autem totam?
      </p>
    </div>
  );
}
