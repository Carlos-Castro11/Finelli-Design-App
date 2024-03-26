interface ServicesDataProps {
  id: number;
  iconName: string;
  title: string;
  text: string;
  isMiddleCard?: boolean;
}

export const ServicesData: ServicesDataProps[] = [
  {
    id: 1,
    iconName: "MessagesSquare",
    title: "Consultorias",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, non quibusdam 
    vel voluptatem vitae excepturi veritatis alias fuga nemo natus. Reprehenderit odit excepturi cupiditate id! 
    Ab placeat provident eos qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, non quibusdam vel 
    voluptatem vitae excepturi veritatis alias fuga nemo natus. Reprehenderit odit excepturi cupiditate id! Ab placeat 
    provident eos qui? luptatem vitae excepturi veritatis alias fuga nemo natus. Reprehenderit odit excepturi 
    cupiditate id! Ab placeat provident eos qui? eos qui?`,
  },
  {
    id: 2,
    iconName: "PencilRuler",
    title: "Projetos de interiores",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, non quibusdam 
    vel voluptatem vitae excepturi veritatis alias fuga nemo natus. Reprehenderit odit excepturi cupiditate id! 
    Ab placeat provident eos qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, non quibusdam vel 
    voluptatem vitae excepturi veritatis alias fuga nemo natus. Reprehenderit odit excepturi cupiditate id! Ab placeat 
    provident eos qui? luptatem vitae excepturi veritatis alias fuga nemo natus. Reprehenderit odit excepturi 
    cupiditate id! Ab placeat provident eos qui? eos qui?`,
    isMiddleCard: true,
  },
  {
    id: 3,
    iconName: "Image",
    title: "Renderizações",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, non quibusdam 
    vel voluptatem vitae excepturi veritatis alias fuga nemo natus. Reprehenderit odit excepturi cupiditate id! 
    Ab placeat provident eos qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, non quibusdam vel 
    voluptatem vitae excepturi veritatis alias fuga nemo natus. Reprehenderit odit excepturi cupiditate id! Ab placeat 
    provident eos qui? luptatem vitae excepturi veritatis alias fuga nemo natus. Reprehenderit odit excepturi 
    cupiditate id! Ab placeat provident eos qui? eos qui?`,
  },
];
