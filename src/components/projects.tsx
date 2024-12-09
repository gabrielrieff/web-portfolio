import { data } from "@/Database/db";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="w-full" id="project">
      <h2 className="font-semibold text-xl">Projetos</h2>
      <div className="p-5">
        {data.map((project) => (
          <div
            className="w-[400px] h-[300px] flex flex-col gap-5"
            key={project.id}
          >
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <div className="flex items-center gap-3">
              {project.technologies.map((Technique, index) => (
                <Technique key={index} className="size-7" />
              ))}
            </div>
            <p className="line-clamp-5 text-justify">{project.description}</p>
            <div className="flex justify-between items-center">
              <Link href={project.links.github}>
                <FaGithub className="size-8" />
              </Link>
              <Link
                href={""}
                className="font-extralight text-xs hover:text-slate-600"
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
