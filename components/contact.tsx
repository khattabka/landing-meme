import { DockContactHero } from "./dock_contact";

export function Contact() {
  return (
    <section className="py-24 md:py-32 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-center text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Let's Get Started 🚀
              </h2>
              <p className="text-lg text-center text-zinc-500 dark:text-zinc-400 md:text-xl/relaxed ">
                Don't Wait—The Market Moves Fast! Let’s turn your idea into the
                next crypto sensation.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <DockContactHero />
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              DM Now to get started!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
