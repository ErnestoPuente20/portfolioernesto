import {motion} from 'motion/react'
import {SiReact, SiWordpress, SiTypescript, SiTailwindcss, SiFirebase, SiFigma, SiAffinitydesigner, SiBlender, SiDavinciresolve, SiRive } from 'react-icons/si'
import {TbBrandFramerMotion} from 'react-icons/tb'
import {Cpu, Layout, Zap} from 'lucide-react'

interface SkillItem {
  name: string;
  icon: React.ReactNode | null;
  status?: string; // El signo '?' indica que es opcional
}

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  items: SkillItem[];
  description?: string;
}

const skillsGroups: SkillGroup[] = [
  {
    category: "Desarrollo Web",
    icon: <Cpu className="w-6 h-6" />,
    items: [
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
      { name: "WordPress", icon: <SiWordpress className="text-[#21759B]" /> },
    ],
    description: "Desarrollo de aplicaciones web robustas con enfoque en rendimiento y escalabilidad lógica."
  },
  {
    category: "Diseño y Branding",
    icon: <Layout className="w-5 h-5" />,
    items: [
      { name: "Figma", icon: <SiFigma /> },
      { name: "Affinity", icon: <SiAffinitydesigner /> },
      { name: "UI Design", icon: null },
      { name: "Branding", icon: null },
    ],
  },
  {
    category: "Animación y 3D",
    icon: <Zap className="w-5 h-5" />,
    items: [
      { name: "Motion", icon: <TbBrandFramerMotion className="text-[#FF00C1]"/> },
      { name: "Blender", icon: <SiBlender className="text-[#F5792A]" /> },
      { name: "Rive", icon: <SiRive/>, status: "Aprendiendo" },
      { name: "DaVinci", icon: <SiDavinciresolve/>, status: "Aprendiendo" },
    ],
  }
];

export default function Skills() {
  
  return (
   <section id='skills' className='py-24 bg-background'>
      <div className='container mx-auto px-6'>
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className='text-primary font-mono text-sm uppercase tracking-[0.3em]'>02 // Habilidades</span>
          <h2 className='text-4xl font-display font-bold mt-8'>Stack y Herramientas</h2>
        </motion.div>

        {/* Contenedor Principal: Una columna por categoría */}
        <div className='grid grid-cols-1 gap-12'>
          {skillsGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-6"
            >
              {/* Título de Categoría con línea decorativa */}
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight">{group.category}</h3>
                <div className="h-px bg-white/10 grow ml-4"></div>
              </div>

              {/* Grid de Items: Súper legible y espacioso */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {group.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/3 border border-white/5 hover:border-primary/40 hover:bg-primary/2 transition-all group"
                  >
                    {/* Icono Grande - Ahora tiene todo el espacio superior libre */}
                    <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon ? item.icon : <span className="text-xl font-bold opacity-20">{item.name[0]}</span>}
                    </div>
                    
                    {/* Contenedor de Texto y Estado */}
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                        {item.name}
                      </span>

                      {/* Badge de Estado: Ahora como un subtítulo sutil */}
                      {item.status && (
                        <div className="flex items-center gap-1.5 mt-1 px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                          </span>
                          <span className="text-[9px] uppercase font-bold font-mono text-primary tracking-widest">
                            {item.status}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
