import { RiNodejsFill, RiNextjsLine  } from "react-icons/ri";
import { SiMysql, SiExpress, SiDotnet } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { dbProject } from "./Project";

export const data: dbProject[] = [
  {
    id: 1,
    title: "Gerencimento de tarefas",
    imagens: [""],
    description: {
      resume: `Um sistema de gerenciamento de tarefas projetado para organizar a rotina de forma simples, rápida e acessível.`,
      about: `Este sistema foi desenvolvido para ajudar o usuário a organizar sua rotina, incluindo tarefas e compromissos, de forma simples e rápida. Com um design otimizado para dispositivos móveis, oferece agilidade, velocidade e acessibilidade.`,
      TechnologyChoices: `As tecnologias utilizadas incluem Next.js no front-end, escolhido por sua velocidade e robustez, e Node.js com Express no back-end, garantindo flexibilidade e eficiência. O banco de dados PostgreSQL foi adotado para sua confiabilidade e suporte a operações complexas.`
    },
    technologies: [BiLogoTypescript, RiNextjsLine, RiNodejsFill, SiExpress, BiLogoPostgresql],
    links: {
      github: "",
      website: "adsdasd"
    }
  },
  {
    id: 2,
    title: "Fluxo de finanças",
    imagens: [],
    description: {
      resume: "Aplicação para gerenciamento de finanças pessoais com foco em simplicidade e eficiência.",
      about: "",
      TechnologyChoices: ""
    },
    technologies: [BiLogoTypescript, SiDotnet, RiNextjsLine, SiMysql],
    links: {
      github: "https://github.com/gabrielrieff/financeflow",
    },
  },
];
