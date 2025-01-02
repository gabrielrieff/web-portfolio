import { InterceptedSheetContent } from "@/components/intercepted-sheet-content";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { FaGithub } from "react-icons/fa";
import { data } from "@/Database/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AiFillProduct } from "react-icons/ai";

export default async function project({
  params,
}: {
  params: Promise<{ id: string }>
}){

  const id = (await params).id

  const project = data.find((item) => item.id === Number(id))

    return (
        <Sheet defaultOpen>
        <InterceptedSheetContent className="sm:max-w-[50%] space-y-4">
          <SheetHeader>
            <SheetTitle>{project?.title}</SheetTitle>
          </SheetHeader>

            <div className="py-4 space-y-8">
              <div className="flex flex-col gap-2 space-y-4">
                <span>{project?.description.resume}</span>
                <span>{project?.description.about}</span>
                <span>{project?.description.TechnologyChoices}</span>
              </div>

              <div className="flex items-center gap-3">
                {project?.technologies.map((Technique, index) => (
                  <Technique key={index} className="size-10" />
                ))}
              </div>
            </div>

          <SheetFooter>

            <div>
              <Button variant='link' asChild>
                <Link href={project?.links.github!} target="_blank">
                  <FaGithub />
                  repositorio
                </Link>
              </Button>
              {project?.links.website && (
                <Button variant='link' asChild>
                  <Link href={project?.links.website} target="_blank">
                    <AiFillProduct />
                    Web site
                  </Link>
                </Button>

              )}
            </div>
          </SheetFooter>
  

        </InterceptedSheetContent>
      </Sheet>
    )
}