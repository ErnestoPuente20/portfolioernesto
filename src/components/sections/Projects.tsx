import { ExternalLink, Plus } from "lucide-react"
import { projectsData } from "../../data/projects"
import { ProjectModal } from "../ui/ProjectModal";
import {motion} from 'motion/react'
import {FaGithub} from 'react-icons/fa6'
import { useState } from "react";
import type { Project } from "../../types";


export default function Projects() {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/10 rounded-full blur-3xl"/>
      <div className="container mx-auto px-6">
        {/* Encabezado */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{opacity: 0, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, amount: 0.6}}
          >
            <span className="text-primary font-display text-sm font-medium uppercase tracking-[0.3em]">
              02 // Proyectos
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
              Proyectos con 
              <span className="text-primary">
                {" "}propósito.
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Una selección de soluciones digitales enfocadas en resolver problemas de negocio mediante tecnología moderna.
            </p>
          </motion.div>      
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              className="group relative flex flex-col"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: "-100px"}}
              transition={{delay: idx * 0.1}}
            >
              <div className="relative aspect-16/10 overflow-hidden rounded-3xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:border-primary/30">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                />
                {/* BOTONES FLOTANTES: Parte inferior izquierda */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  {/* Botón Detalles - Altura sincronizada con p-3 */}
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 p-3 w-32 justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 hover:border-white/30 transition-all active:scale-95 group/btn"
                  >
                    <Plus className="w-4 h-4 text-primary group-hover/btn:scale-110 transition-transform"/>
                    <span className="text-[12px] uppercase tracking-widest">Detalles</span>
                  </button>

                  {/* Botón GitHub */}
                  {project.github !== "#" && (
                    <a 
                      href={project.github}
                      target="_blank"
                      className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
                    >
                      <FaGithub className="w-5 h-5"/>
                    </a>
                  )}

                  {/* Botón Link Externo */}
                  <a 
                    href={project.link}
                    target="_blank"
                    className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all"
                  >
                    <ExternalLink className="w-5 h-5"/>
                  </a>
                </div>
                
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="px-3 py-1 rounded-full glass text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20">
                    {project.type}
                  </div>
                </div>
              </div>

              {/* Contenido de la Card */}
              <div className="mt-6 flex flex-col grow">
                {/* Títulos */}
                <div className="mb-2">
                  <span className="text-primary text-[10px] uppercase tracking-tighter mb-1 block font-mono">
                    {project.client}
                  </span>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-lg bg-white/5 text-[11px] font-mono text-muted-foreground border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de proyecto */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
