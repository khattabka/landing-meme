import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogContainer,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/lib/scroll-area";
import { PlusIcon } from "lucide-react";
export interface DialogProjectProps {
  title: string;
  image: string;
  description: string;
}

export function DialogProject(props: DialogProjectProps) {
  return (
    <Dialog
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 24,
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: "12px",
        }}
        className="flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
      >
        <DialogImage
          src={props.image}
          alt={props.title}
          className="h-72 sm:h-full w-full  object-cover"
        />
        <div className="flex flex-grow flex-row items-end justify-between p-2">
          <div>
            <DialogTitle className="text-zinc-950 dark:text-zinc-50">
              {props.title}
            </DialogTitle>
            <DialogSubtitle className="text-zinc-700 dark:text-zinc-400">
              {props.description}
            </DialogSubtitle>
          </div>
          <button
            type="button"
            className="relative ml-1 flex h-8 w-8 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
            aria-label="Open dialog"
          >
            <PlusIcon size={25} />
          </button>
        </div>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: "12px",
          }}
          className="relative h-auto w-[500px] border border-gray-100 bg-white"
        >
          <ScrollArea className="h-[90vh]" type="scroll">
            <div className="relative p-6">
              <div className="flex justify-center py-10">
                <DialogImage
                  src={props.image}
                  alt={props.title}
                  className="h-auto w-[200px]"
                />
              </div>
              <div className="">
                <DialogTitle className="text-black">{props.title}</DialogTitle>
                <div className="mt-4 text-sm text-gray-700">
                  <p>{props.description}</p>
                </div>
              </div>
            </div>
          </ScrollArea>
          <DialogClose className="text-zinc-500" />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
}
