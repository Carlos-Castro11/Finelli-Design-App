import { CardRoot } from "../Card/CardRoot";
import ProjectImage from "../Project/ProjectImage";

export default function ProfileContent() {
  return (
    <div className="grid gap-4 mb-4 lg:grid-cols-2 lg:gap-7">
      <div>
        <ProjectImage image="iron-man.jpg" />
      </div>
      <div className="flex flex-col gap-2 lg:gap-5">
        <CardRoot.Title title="giovana finelli" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
          blanditiis quasi praesentium, saepe officia, magnam exercitationem
          explicabo itaque rerum eveniet repellendus soluta fugit obcaecati qui
          ducimus sit ut autem totam? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Sed blanditiis quasi praesentium, saepe officia,
          magnam exercitationem explicabo itaque rerum eveniet repellendus
          soluta fugit obcaecati qui ducimus sit ut autem totam?
        </p>
      </div>
    </div>
  );
}
