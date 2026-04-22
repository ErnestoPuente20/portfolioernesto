import { Cpu, Layout, Globe, Zap } from 'lucide-react'
import {motion} from 'motion/react'

const highlights = [
  {
    icon: Cpu,
    title: "Arquitectura Robusta",
    description: "Diseño de sistemas escalables con lógica de ingeniería sólida y modular."
    // EN: "Scalable system design with solid engineering and modular logic."
  },
  {
    icon: Layout,
    title: "Interfaces Modernas",
    description: "Creación de experiencias visuales fluidas usando React, TypeScript y animaciones."
    // EN: "Crafting fluid visual experiences using React, TypeScript, and animations."
  },
  {
    icon: Zap,
    title: "Optimización Crítica",
    description: "Enfoque en rendimiento y carga eficiente para una experiencia de usuario sin fricción."
    // EN: "Focus on performance and efficient loading for a frictionless user experience."
  },
  {
    icon: Globe,
    title: "Visión Global",
    description: "Desarrollo con estándares internacionales, listo para colaborar en entornos remotos."
    // EN: "Development with international standards, ready for remote collaboration."
  }
]

export default function About() {
  return (
    <section id='about' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* left column */}
            <div className='space-y-8'>
              <motion.div
                initial={{opacity: 0, y: 15}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.8}}
                transition={{duration: 0.8, ease: "easeOut", delay: 0.1}}
              >
                <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
                  Acerca de mi
                </span>
              </motion.div>

              <motion.h2
                className='text-4xl md:text-5xl font-bold leading-tight text-foreground'
                initial={{opacity: 0, y: 15}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.8}}
                transition={{duration: 0.6, delay: 0.3}}
              >
                Transformando lógica en <br />
                <span className='text-primary'>Experiencias visuales</span>
              </motion.h2>

              <div className='space-y-4 text-muted-foreground text-lg leading-relaxed'>
                {[
                  "Soy un Ingeniero de Sistemas apasionado por la intersección entre el diseño y la arquitectura de software. Desde Bolivia, me dedico a construir productos digitales que no solo se ven bien, sino que están optimizados bajo el capó.",
                  "Mi enfoque principal es el ecosistema de React y Next.js, utilizando TypeScript para garantizar código robusto y escalable. Creo firmemente que la ingeniería no se trata solo de escribir código, sino de encontrar soluciones.",
                  "Cuando no estoy en el IDE, me gusta explorar las últimas actualizaciones de herramientas como Framer Motion o Lucide, buscando el equilibrio perfecto entre rendimiento y estética."
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    initial={{opacity: 0, y: 10}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6, delay: 0.5 + (index * 0.2)}}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              <motion.div
                className='relative group'
                initial={{opacity: 0, scale: 0.95}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{duration: 0.8, delay: 1.1}}
              >
                <div className="absolute -inset-1 bg-linear-to-r from-primary/50 to-secondary/50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative glass rounded-2xl p-8 border border-white/10">
                  <div className='flex gap-2 mb-4'>
                    <div className='w-2 h-2 rounded-full bg-red-500/50' />
                    <div className='w-2 h-2 rounded-full bg-yellow-500/50' />
                    <div className='w-2 h-2 rounded-full bg-green-500/50' />
                  </div>
                  <p className="text-foreground/90 font-mono text-sm leading-relaxed">
                    <span className="text-primary font-bold">{">"}</span> "Mi misión es elevar el estándar del desarrollo frontend, entregando interfaces que se sientan instantáneas y código que sea un placer mantener."
                  </p>
                </div>
              </motion.div>
            </div>

            <div className='lg:pt-20 grid sm:grid-cols-2 gap-6'>
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  // Retraso para que aparezcan después de que el texto termine de entrar
                  transition={{ duration: 0.5, delay: 1.3 + (index * 0.1) }}
                  className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors"
                >
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-foreground font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}
