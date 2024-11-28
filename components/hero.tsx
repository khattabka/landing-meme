"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { DockContactHero } from "./dock_contact";

  /**
   * A hero section for the homepage that displays a heading, a paragraph, and a button to view projects.
   * The section is animated to slide in from the bottom and fade in.
   * The button is animated to pulse when clicked.
   * The section also includes a docked contact hero element at the bottom.
   */
export function Hero() {
  return (
    <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-l from-red-500 to-gray-500">
              Dominate the Meme Coin Market. Effortlessly.
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-xl/relaxed dark:text-zinc-400">
              Launching a meme coin is hard. Managing it is harder.{" "}
              <span className="text-primary">That’s where I come in 🚀</span>
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <div className="space-x-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8"
                  onClick={() => {
                    const element = document.getElementById("projects");
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                      });

                      const animation = element.animate(
                        [
                          { transform: "translateY(0px)" },
                          { transform: "translateY(-10px)" },
                          { transform: "translateY(0px)" },
                        ],
                        {
                          duration: 150,
                          easing: "ease-in-out",
                        }
                      );

                      animation.onfinish = () => {
                        animation.cancel();
                      };
                    }
                  }}
                >
                  View My Work
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <DockContactHero />
        </motion.div>
      </div>
    </section>
  );
}
