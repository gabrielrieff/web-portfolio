export default function About() {
  return (
    <main className="flex flex-col w-full">
      <strong>Olá, me chamo</strong>
      <div>
        <h1 className="font-extrabold md:text-8xl text-7xl text-transparent bg-gradient-to-r
        dark:from-pink-500 dark:via-gray-200 dark:to-purple-500 from-red-500 via-gray-200 to-orange-500
         inline-block bg-clip-text">
          Gabriel rieff
        </h1>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-4">
        Olá, sou Gabriel, graduando em Análise e Desenvolvimento de Sistemas,
        com mais de 2 anos de experiência em desenvolvimento de software.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-3">
        Sou uma pessoa organizada e com habilidades interpessoais desenvolvidas,
        o que me permite trabalhar bem em equipe e estabelecer relacionamentos
        produtivos. Tenho uma forte capacidade de análise para resolver
        problemas e lidar com cenários críticos, sempre disposto a aprender e a
        colaborar. Estou constantemente em busca de entender o negócio, as
        necessidades dos clientes e suas dificuldades, para entregar soluções de
        excelência.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-3">
        Atuo como desenvolvedor fullstack, utilizando uma variedade de
        tecnologias, incluindo HTML, CSS, JavaScript/TypeScript, React, .NET,
        Node.js e MySQL. Estou sempre em busca de expandir meu conhecimento
        sobre as tecnologias que uso e de me aprofundar em estruturas e padrões
        de projeto.
      </p>
    </main>
  );
}
