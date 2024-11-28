'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border/40"
    >
      <div className="container h-16 mx-auto relative flex items-center justify-between">
        <div className="w-10" /> {/* Spacer */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link 
            href="/" 
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-gradient"
          >
            Mnemonics
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </motion.nav>
  )
}
