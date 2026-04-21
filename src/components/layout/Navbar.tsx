import { Menu, X } from "lucide-react"
import Button from "../ui/Button"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#about", label: "Acerca de mi" },
  { href: "#contact", label: "Contacto" },
]

export default function Navbar() {

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-50">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
          EP<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((links, index) => (
              <a 
                key={index}
                href={links.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {links.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm">Contacto</Button>
        </div>

        {/* Mobile Menu Button */}
        <button  
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
            {isMobileOpen ? <X size={24}/> :<Menu size={24}/>}
        </button>
      </nav>

      {/* Mobile Menu con motion */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{opacity: 0, y: -20, filter: "blur(10px)"}}
            animate={{opacity: 1, y: 0, filter: "blur(0px)"}}
            exit={{opacity: 0, y: -20, filter: "blur(10px)"}}
            transition={{duration: 0.3, ease: "easeInOut"}}
            className="md:hidden glass-strong"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((links, index) => (
                <motion.a 
                  key={index}
                  initial={{opacity: 0, x: -10}}
                  animate={{opacity: 1, x: 0}}
                  transition={{delay: index * 0.14}} //Efecto de cascada
                  href={links.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground py-2"
                >
                  {links.label}
                </motion.a>
              ))}

              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.6}}
              >
                <Button className="w-full">Contacto</Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </header>
  )
}
