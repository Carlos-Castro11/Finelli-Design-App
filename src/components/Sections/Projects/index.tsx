import path from "../../../../public/images/iron-man.jpg";
export default function Projects() {
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${path.src})` }}
        className="mt-5 flex items-center justify-center h-96 bg-fixed bg-cover rounded shadow-lg"
      >
        <h1 className="text-5xl text-white uppercase bg-violet-800">
          Projetos
        </h1>
      </div>
    </section>
  );
}
