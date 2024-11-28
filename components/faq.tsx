import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ChevronUp } from "lucide-react";

export function FAQ() {
  return (
    <section className="py-32 flex items-center justify-center ">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            {" "}
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-[600px] mx-auto">
            Everything you need to know about us
          </p>
        </div>

        <Accordion
          className="flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700"
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <AccordionItem value="advanced-usage" className="py-2">
            <AccordionTrigger className="w-full text-left text-xl font-medium text-zinc-950 dark:text-zinc-50">
              <div className="flex items-center justify-between">
                <div>What's included in a single project?</div>
                <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-zinc-500 dark:text-zinc-400">
                A single project typically includes the following: Website,
                Memes(Images & Videos) 5 each, 10 Stickers and Community
                Management
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="getting-started" className="py-2">
            <AccordionTrigger className="w-full text-left text-xl font-medium text-zinc-950 dark:text-zinc-50">
              <div className="flex items-center justify-between">
                <div>How long does it take to deliver?</div>
                <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-zinc-500 dark:text-zinc-400">
                Most projects are delivered within 1-2 days, with some projects
                taking up to 2-3 days. However, it's important to note that the
                delivery times may vary depending on the complexity of the
                project and the availability of resources.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="animation-properties" className="py-2">
            <AccordionTrigger className="w-full text-left text-xl font-medium text-zinc-950 dark:text-zinc-50">
              <div className="flex items-center justify-between">
                <div>Can you help build our coin’s personality?</div>
                <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-zinc-500 dark:text-zinc-400">
                Absolutely! I work with you to craft a unique voice and visual
                identity that aligns with your brand.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="community-and-support" className="py-2">
            <AccordionTrigger className="w-full text-left text-xl font-medium text-zinc-950 dark:text-zinc-50">
              <div className="flex items-center justify-between">
                <div>What’s included in community management?</div>
                <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-zinc-500 dark:text-zinc-400">
                From moderating chats to engaging your audience and fostering
                trust, I handle it all.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
