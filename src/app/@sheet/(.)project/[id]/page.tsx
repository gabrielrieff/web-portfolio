import { InterceptedSheetContent } from "@/components/intercepted-sheet-content";
import { Sheet, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { data } from "@/Database/db";

export default async function project({
  params,
}: {
  params: Promise<{ id: string }>
}){

  const id = (await params).id

  const project = data.find((item) => item.id === Number(id))

    return (
        <Sheet defaultOpen>
        <InterceptedSheetContent className="sm:max-w-[70%]">
          <SheetHeader>
            <SheetTitle>{project?.title}</SheetTitle>
          </SheetHeader>
  
          <div className="py-4 space-y-4">
            <span>{project?.description}</span>

            <div className="flex items-center gap-3">
              {project?.technologies.map((Technique, index) => (
                <Technique key={index} className="size-10" />
              ))}
            </div>
          </div>
        </InterceptedSheetContent>
      </Sheet>
    )
}