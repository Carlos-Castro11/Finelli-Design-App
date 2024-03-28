interface ProjectsDataProps {
  id: number;
  title: string;
  image_cover: string;
  link: string;
  images?: string[];
}

export const ProjectsData: ProjectsDataProps[] = [
  {
    id: 1,
    title: "Quarto de casal",
    image_cover: "/CoupleRoom/Room-1.jpg",
    link: `/project/1`,
  },
  {
    id: 2,
    title: "Escritório",
    image_cover: "/Office/Office-1.jpg",
    link: "/project/2",
  },
  {
    id: 3,
    title: "Quarto gamer",
    image_cover: "/BoyRoom/Quarto-menino-2.jpg",
    link: "/project/3",
  },
  {
    id: 4,
    title: "Cozinha",
    image_cover: "/Kitchen/Kitchen-5.jpg",
    link: "/project/4",
  },
  {
    id: 5,
    title: "Escritório",
    image_cover: "/Office/Office-1.jpg",
    link: "/project/2",
  },
  {
    id: 6,
    title: "Quarto de casal",
    image_cover: "/CoupleRoom/Room-1.jpg",
    link: `/project/1`,
  },
];
