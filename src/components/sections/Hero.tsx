import {color, motion} from 'motion/react'
import Button from '../ui/Button'
import { ArrowRight } from 'lucide-react'
import {FaGithub, FaTiktok, FaWhatsapp} from "react-icons/fa6"

export default function Hero() {

  const socials = [
    {icon: FaGithub, href: "#", color: "#24292e"},
    {icon: FaTiktok, href: "#", color: "#ff0050"},
    {icon: FaWhatsapp, href: "#", color: "#25d366"},
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img 
          src="/bg-hero-space.webp" 
          alt="Hero image" 
          className="w-full h-full object-cover opacity-40" 
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"/>
      </div>
      {/* Blue dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, ) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#21bff0",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-20'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left column - Text Content */}
          <div className='space-y-8'>
            <motion.div
              initial={{opacity: 0, y: 20, filter: "blur(10px)"}}
              animate={{opacity: 1, y: 0, filter: "blur(0px)"}}
              transition={{duration: 0.3, ease: "easeInOut"}}
            >
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                Ingeniero de Sistemas — Frontend Dev
              </span>     
            </motion.div>

            {/* Headline */}
            <div className='space-y-4'>
              <motion.h1 
                className='font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'
                initial={{ opacity: 0, y: 20, filter: "blur(10px)"}}
                animate={{opacity: 1, y: 0, filter: "blur(0px)"}}
                transition={{delay: 0.3, duration: 1}}
              >
                Construyendo interfaces <span className='text-primary glow-text'>digitales</span>
                <br />
                elevadas al
                <br />
                <span className='font-body italic font-normal text-white'>
                  máximo detalle
                </span>
              </motion.h1>
              <motion.p 
                className='text-lg text-muted-foreground max-w-lg'
                initial={{ opacity: 0, y: 20, filter: "blur(10px)"}}
                animate={{opacity: 1, y: 0, filter: "blur(0px)"}}
                transition={{delay: 0.7, duration: 1}}
              >
                Hola, soy Ernesto — Ingeniero de Sistemas enfocado en el ecosistema de React. Desarrollo aplicaciones web escalables y eficientes, combinando precisión técnica con experiencias interactivas modernas.
              </motion.p> 
            </div>

            {/* CTA */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 1, duration: 0.5}}
              className='relative group w-fit'
            >
              <div className='absolute -inset-0.5 bg-primary/40 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-500'/>
              <Button size='lg'>
                <span className='font-display tracking-widest uppercase text-sm'>Contáctame</span> 

                <motion.div
                  animate={{x: [0, 5, 0]}}
                  transition={{repeat: Infinity, duration: 1.5, ease: "easeInOut"}}
                >
                  <ArrowRight className='w-5 h-5'/>
                </motion.div>
                
                <div className='absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine'/>
              </Button>
            </motion.div>

            {/* Social Links */}
            <div className='flex gap-6 pt-6'>
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    // Definimos los estados iniciales
                    initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                    // Aplicamos la animación de entrada con su propio delay
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      filter: "blur(0px)",
                      transition: {
                        delay: 1.2 + (index * 0.15),
                        duration: 0.5,
                        ease: "easeOut"
                      }
                    }}
                    // El hover ahora es independiente y reacciona al instante
                    whileHover={{ 
                      scale: 1.2, 
                      transition: { 
                        type: "spring", // Usar spring lo hace sentir más "físico" y pro
                        stiffness: 400, 
                        damping: 10 
                      } 
                    }}
                    whileTap={{ scale: 0.9 }}
                    className='text-muted-foreground hover:text-primary transition-colors duration-300 relative group'
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Icon size={28} className='relative drop-shadow-md'/>
                  </motion.a>
                )
              })}
            </div>
          </div>
          {/* Right column - Profile image */}
          <div className='relative'>
            <div className='relative max-w-md mx-auto'>
              <div className='absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse'/>
              <div className='relative glass rounded-3xl p-2 glow-border'>
                <img src="/image-profile.webp" alt="Ernesto Puente" className='w-full aspect-4/5 object-cover rounded-2xl '/>
              </div>             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
