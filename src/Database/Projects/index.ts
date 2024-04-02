export interface ProjectsDataProps {
  id: number;
  title: string;
  image_cover: string;
  link: string;
  images: string[];
}

export const ProjectsData: ProjectsDataProps[] = [
  {
    id: 1,
    title: "Quarto de casal",
    image_cover: "/CoupleRoom/Room-1.jpg",
    link: `/project/1`,
    images: [
      "/CoupleRoom/Room-1.jpg",
      "/CoupleRoom/Room-2.jpg",
      "/CoupleRoom/Room-3.jpg",
      "/CoupleRoom/Room-4.jpg",
      "/CoupleRoom/Room-5.jpg",
      "/CoupleRoom/Room-6.jpg",
    ],
  },
  {
    id: 2,
    title: "Escritório",
    image_cover: "/Office/Office-1.jpg",
    link: "/project/2",
    images: [
      "/Office/Office-1.jpg",
      "/Office/Office-2.jpg",
      "/Office/Office-3.jpg",
      "/Office/Office-4.jpg",
    ],
  },
  {
    id: 3,
    title: "Quarto gamer",
    image_cover: "/BoyRoom/Quarto-menino-2.jpg",
    link: "/project/3",
    images: [
      "/BoyRoom/Quarto-menino-2.jpg",
      "/BoyRoom/Quarto-menino-1.jpg",
      "/BoyRoom/Quarto-menino-3.jpg",
      "/BoyRoom/Quarto-menino-4.jpg",
    ],
  },
  {
    id: 4,
    title: "Cozinha",
    image_cover: "/Kitchen/Kitchen-5.jpg",
    link: "/project/4",
    images: [
      "/Kitchen/Kitchen-5.jpg",
      "/Kitchen/Kitchen-1.jpg",
      "/Kitchen/Kitchen-2.jpg",
      "/Kitchen/Kitchen-3.jpg",
      "/Kitchen/Kitchen-4.jpg",
      "/Kitchen/Kitchen-6.jpg",
    ],
  },
  {
    id: 5,
    title: "Escritório",
    image_cover: "/Office/Office-1.jpg",
    link: "/project/2",
    images: [
      "/Office/Office-1.jpg",
      "/Office/Office-2.jpg",
      "/Office/Office-3.jpg",
      "/Office/Office-4.jpg",
    ],
  },
  {
    id: 6,
    title: "Quarto de casal",
    image_cover: "/CoupleRoom/Room-1.jpg",
    link: `/project/1`,
    images: [
      "/CoupleRoom/Room-1.jpg",
      "/CoupleRoom/Room-2.jpg",
      "/CoupleRoom/Room-3.jpg",
      "/CoupleRoom/Room-4.jpg",
      "/CoupleRoom/Room-5.jpg",
      "/CoupleRoom/Room-6.jpg",
    ],
  },
];
