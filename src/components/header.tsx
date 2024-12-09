import { SquareTerminal } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./toggle-mode";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-20 w-full">
      <Link href="/">
        <SquareTerminal className="size-10 bg-black text-white dark:bg-white dark:text-black rounded-md" />
      </Link>

      <nav className="flex items-center">
        <Link href={""}>
          <Button variant="link" className="font-semibold">
            Contatos
          </Button>
        </Link>
        <Link href={"#project"}>
          <Button variant="link" className="font-semibold">
            Projetos
          </Button>
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
}
