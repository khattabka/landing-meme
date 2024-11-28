import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import {
  RiTelegramFill,
  RiTwitterXFill
} from "react-icons/ri";
const data = [
  {
    title: "Twitter",
    icon: (
      <RiTwitterXFill
        className="h-full w-full text-neutral-600 dark:text-neutral-300"
      />
    ),
    href: "https://twitter.com/0xMnemonics",
  },
  {
    title: "Telegram",
    icon: (
      <RiTelegramFill className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "https://t.me/0xMnemonics",
  },
  {
    title: "Github",
    icon: (
      <AiFillGithub className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "https://github.com/0xMnemonics",
  },
];

export function DockContactHero() {
  return (
    <div className="flex justify-center items-center mt-8">
      <Dock className="items-end px-3">
        {data.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DockItem key={idx} className="aspect-square rounded-full">
              <DockLabel className="text-neutral-600 dark:text-neutral-300">
                {item.title}
              </DockLabel>
              <DockIcon className="h-full w-full">{item.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  );
}
