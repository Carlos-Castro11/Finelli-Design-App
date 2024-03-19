interface ProfileDataProps {
  image: string;
  title: string;
  text: string;
}

export const ProfileData: ProfileDataProps = {
  image: "/perfil.jpg",
  title: "Giovana finelli",
  text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, non quibusdam 
    vel voluptatem vitae excepturi veritatis alias fuga nemo natus. Reprehenderit odit excepturi 
    cupiditate id! Ab placeat provident eos qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Voluptate, non quibusdam vel voluptatem vitae excepturi veritatis alias fuga nemo natus. Reprehenderit 
    odit excepturi cupiditate id!`,
};

interface EducationDataProps {
  id: number;
  course: string;
  university: string;
  duration: string;
}

export const EducationData: EducationDataProps[] = [
  {
    id: 1,
    course: "Bacharel em Arquitetura",
    university: "Centro Universitário FIPMOC",
    duration: "5 anos",
  },
  {
    id: 2,
    course: "Bacharel em Design de Interiores",
    university: "Universidade Cesumar",
    duration: "2 anos",
  },
];
