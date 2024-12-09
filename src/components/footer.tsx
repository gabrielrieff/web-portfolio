import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 w-full mb-8">
      <span className="font-semibold">Mais</span>
      <span>
        Você pode encontrar mais sobre mim ou entrar em contato no{" "}
        <Link
          href="https://www.linkedin.com/in/gabriel-rieff/"
          target="_blank"
          className="font-semibold underline hover:text-blue-300"
        >
          linkedin
        </Link>{" "}
        e mais do meu codigo no{" "}
        <Link
          href="https://github.com/gabrielrieff"
          target="_blank"
          className="font-semibold underline hover:text-blue-300"
        >
          Github
        </Link>
      </span>
    </footer>
  );
}
