import Banner from "@/components/Banner.tsx";
import BannerTitle from "@/components/Banner.tsx/BannerTitle";
export default function Projects() {
  return (
    <>
      <section id="projects" className="grid gap-10">
        <Banner image="ferrari.jpg">
          <BannerTitle text="Projetos" />
        </Banner>
      </section>
    </>
  );
}
