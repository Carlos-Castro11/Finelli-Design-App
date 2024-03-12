interface ProfileDataProps {
  image: string;
  title: string;
  text: string;
}

export const ProfileData: ProfileDataProps = {
  image: "groot.jpg",
  title: "Giovana finelli",
  text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, non quibusdam 
    vel voluptatem vitae excepturi veritatis alias fuga nemo natus. Reprehenderit odit excepturi 
    cupiditate id! Ab placeat provident eos qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Voluptate, non quibusdam vel voluptatem vitae excepturi veritatis alias fuga nemo natus. Reprehenderit 
    odit excepturi cupiditate id! Ab placeat provident eos qui? luptatem vitae excepturi veritatis alias 
    fuga nemo natus. Reprehenderit odit excepturi cupiditate id! Ab placeat provident eos qui? eos qui?`,
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
    course: "Bachareal em Arquitetura",
    university: "Centro Universitário FIPMOC",
    duration: "5 anos",
  },
  {
    id: 2,
    course: "Bachareal em Design de Interiores",
    university: "Universidade Cesumar",
    duration: "2 anos",
  },
];
