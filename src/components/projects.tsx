import { data } from "@/Database/db";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";

export default function Projects() {
  return (
    <div className="w-full" id="project">
      <h2 className="font-semibold text-xl">Projetos</h2>
      <div className="p-5 flex flex-col gap-4">
        {data.map((project) => (
          <div
            className="flex flex-col gap-5"
            key={project.id}
          >
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <p className="line-clamp-5 text-justify text-sm">{project?.description.resume}</p>
            <div className="flex items-center gap-3">
              {project.technologies.map((Technique, index) => (
                <Technique key={index} className="size-7" />
              ))}
            </div>
            <div className="flex justify-between items-center text-xs">
              <Button variant="link" asChild>
                <Link href={project.links.github} target="_blank">
                  <FaGithub className="size-5" />
                  Repositorio
                </Link>
              </Button>
              <Link
                href={`/project/${project.id}`}
                className="font-extralight hover:text-slate-600"
              >
                Ler mais...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
