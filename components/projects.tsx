import { DialogProject } from "./dialog_project";

/**
 * A list of projects we have worked on
 *
 * @property {string} title - The title of the project
 * @property {string} description - A brief description of the project
 * @property {string} metrics - A metric highlighting the success of the project
 */
const projects = [
  {
    title: "$CHIMPU",
    description: " A meme coin about Chimpu, a legendary Chimpanzee Mascot",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "$VESPER",
    description: "A meme coin about Vesper, the legendary Greek Goddess of Love",
    image: "https://picsum.photos/200/301",
  },
  {
    title: "$BRINGO",
    description: "A meme coin about Bringo, the beloved Doggo",
    image: "https://picsum.photos/200/302",
  },
];

export function Projects() {
  return (
    <section className="py-32 flex items-center justify-center" id="projects">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Previous Projects
          </h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-[600px] mx-auto">
          See the Results for Yourself
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div className="flex items-center justify-center">
              <DialogProject
                key={project.title}
                description={project.description}
                image={project.image}
                title={project.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
