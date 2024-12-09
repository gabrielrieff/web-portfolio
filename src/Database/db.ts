import { IconType } from "react-icons";
import { AiOutlineDotNet } from "react-icons/ai";
import { RiNextjsFill } from "react-icons/ri";
import { SiMysql, SiTypescript } from "react-icons/si";

type dbProject = {
  id: number;
  title: string;
  description: string;
  technologies: IconType[];
  links: {
    github: string;
    website: string;
  };
};

export const data: dbProject[] = [
  {
    id: 1,
    title: "Finance flow",
    description: `Esta é uma API desenvolvida utilizando .NET 8, com princípios do Domain-Driven Design (DDD) para fornecer uma solução estruturada e eficaz no gerenciamento de despesas pessoais. O principal objetivo é permitir ao usuário registrar suas despesas, detalhando algumas informações essenciais como título, data descrição, valor e forma de pagamento, utilizando uma forma segura de armazenar os dados, com o banco de dados MySQL.
A arquitetura da API segue em REST, utilizando métodos HTTP padrão para uma comunicação eficiente e simplificada.
Dentre os pacotes NuGet utilizados, o AutoMapper é responsável pelo mapeamento  entre objetos de domínio e requisição/resposta, reduzindo a necessidade de código repetitivo e manual. O FluentAssertivo é utilizado nos testes de unidade para tornar as verificações mais legíveis, ajudando a escrever testes claros e compreensíveis. Para as validações, o FluentValidation é usado para implementar regras de validação de formas simples e intuitivas nas classes de requisições, mantendo o código limpo e fácil de manter. Por fim, o EntityFramework atua como ORM que simplifica as interações com o banco de dados, permitindo o uso de objetos .NET para manipular dados diretamente, sem a necessidade de lidar com consultas SQL.`,
    technologies: [RiNextjsFill, AiOutlineDotNet, SiMysql, SiTypescript],
    links: {
      github: "",
      website: "",
    },
  },
];
