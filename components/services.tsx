
import { TiltCard } from "./tilt_card";

const services = [
  {
    title: "Custom Websites That Convert",
    description:
      "Modern design, optimized for conversions, and mobile-first. 90% of users decide whether to invest based on your website alone. Don't let a poorly designed site kill your momentum.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Viral Memes That Spread",
    description:  
      "Custom meme campaigns tailored to your brand, designed to dominate Twitter, Telegram, and Discord. Turn your audience into ambassadors with viral content that keeps your project top of mind.",
    image: "https://picsum.photos/200/300",
  },
  ,
  {
    title: "Dynamic Videos and Stickers That Engage",
    description:
      "We understand the fast-paced world of crypto. Our clients see 30% higher conversion rates, meme campaigns with 1M+ impressions, and communities that retain 90%+ active members.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Community Management That Thrives",
    description:
      "24/7 support to manage Telegram and Discord, custom stickers and bots, and retention strategies to keep your community buzzing. A strong, loyal community is the backbone of every successful project.",
    image: "https://picsum.photos/200/300",
  },
];

export function Services() {
  return (
    <section className="py-32 bg-secondary/10 flex items-center justify-center">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            The All-in-One Solution for Meme Coin Creators
          </h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-[600px] mx-auto">
            Comprehensive solutions for your project's success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div className="flex items-center justify-center">
              <TiltCard
                key={service!.title}
                description={service!.description}
                image={service!.image}
                title={service!.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
