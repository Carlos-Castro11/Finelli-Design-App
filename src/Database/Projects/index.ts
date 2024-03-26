interface ProjectsDataProps {
  id: number;
  title: string;
  image: string;
  link: string;
}

export const ProjectsData: ProjectsDataProps[] = [
  {
    id: 1,
    title: "Quarto de casal",
    image: "/CoupleRoom/Room-1.jpg",
    link: `/project/1`,
  },
  {
    id: 2,
    title: "Escritório",
    image: "/Office/Office-1.jpg",
    link: "/project/2",
  },

  {
    id: 3,
    title: "Quarto gamer",
    image: "/BoyRoom/Quarto-menino-2.jpg",
    link: "/project/3",
  },
  {
    id: 4,
    title: "Cozinha",
    image: "/Kitchen/Kitchen-5.jpg",
    link: "/project/4",
  },
];
