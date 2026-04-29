import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import type { Project } from '../../types';
import { useState } from 'react';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    const [index, setIndex] = useState(0);

    const nextStep = () => {
        if (project && index < project.gallery.length - 1) setIndex(index + 1)
    }
    const prevStep = () => {
        if (index > 0) setIndex(index - 1)
    }

    return (
        <Dialog.Root open={!!project} onOpenChange={() => {
            setIndex(0);
            onClose();
        }}>
            <AnimatePresence>
                {project && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay asChild>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className='fixed inset-0 bg-black/95 backdrop-blur-md z-100'
                            />
                        </Dialog.Overlay>

                        <div className='fixed inset-0 z-101 flex items-center justify-center p-4 md:p-6 lg:p-12'>
                            <Dialog.Content asChild>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    // Mantenemos flex-col para Móvil/Tablet y flex-row para Desktop
                                    className='w-full max-w-6xl max-h-[95vh] bg-[#0A0A0A] border border-white/10 rounded-4xl overflow-hidden relative shadow-2xl flex flex-col lg:flex-row'
                                >
                                    {/* --- SOLUCIÓN ERRORES CONSOLA (Sin librerías extra) --- */}
                                    <div className="sr-only">
                                        <Dialog.Title>{project.title}</Dialog.Title>
                                        <Dialog.Description>{project.description}</Dialog.Description>
                                    </div>
                                    {/* ------------------------------- */}

                                    <button
                                        onClick={onClose}
                                        className='absolute top-6 right-6 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-all z-110'
                                    >
                                        <X className='w-5 h-5' />
                                    </button>

                                    {/* --- IZQUIERDA: CARRUSEL UNIFICADO A 16:10 --- */}
                                    <div className='w-full lg:w-3/5 bg-white/5 relative group aspect-16/10 lg:aspect-auto lg:self-stretch overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 shrink-0'>
                                        <AnimatePresence mode='wait'>
                                            <motion.img
                                                key={index}
                                                src={project.gallery[index]}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                className="w-full h-full object-contain"
                                            />
                                        </AnimatePresence>

                                        {/* Controles Carrusel */}
                                        {project.gallery.length > 1 && (
                                            <>
                                                {/* pointer-events-none en el container para que el scroll táctil sobre la imagen funcione */}
                                                <div className="absolute inset-0 flex items-center justify-between p-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none">
                                                    <button
                                                        onClick={prevStep}
                                                        disabled={index === 0}
                                                        // pointer-events-auto solo para los botones
                                                        className={`p-3 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 text-white transition-all pointer-events-auto ${index === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-primary'}`}
                                                    >
                                                        <ChevronLeft className="w-6 h-6" />
                                                    </button>
                                                    <button
                                                        onClick={nextStep}
                                                        disabled={index === project.gallery.length - 1}
                                                        className={`p-3 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 text-white transition-all pointer-events-auto ${index === project.gallery.length - 1 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-primary'}`}
                                                    >
                                                        <ChevronRight className="w-6 h-6" />
                                                    </button>
                                                </div>
                                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                                    {project.gallery.map((_, i) => (
                                                        <div key={i} className={`h-1 transition-all rounded-full ${i === index ? 'w-8 bg-primary' : 'w-2 bg-white/20'}`} />
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {/* --- DERECHA: INFO (Scrollable) --- */}
                                    {/* overscroll-contain y custom-scrollbar para iPad */}
                                    <div className='w-full lg:w-2/5 p-8 md:p-10 lg:p-12 flex flex-col grow overflow-y-auto custom-scrollbar overscroll-contain touch-pan-y'>
                                        <div className="mb-auto">
                                            <span className="text-primary font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block italic font-bold">
                                                {project.client}
                                            </span>
                                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white leading-tight">
                                                {project.title}
                                            </h2>

                                            <div className="space-y-8">
                                                <div>
                                                    <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Descripción</h4>
                                                    <p className="text-muted-foreground leading-relaxed text-base">
                                                        {project.longDescription}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Stack Tecnológico</h4>
                                                    <div className="flex flex-wrap gap-2.5">
                                                        {project.tags.map((tag) => (
                                                            <span key={tag} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-muted-foreground">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* BOTONES DE ACCIÓN (Siempre visibles al final) */}
                                        <div className="flex items-center gap-3 mt-12 pt-8 border-t border-white/5 shrink-0">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all active:scale-95"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                                Visitar Web
                                            </a>
                                            {project.github !== "#" && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
                                                >
                                                    <FaGithub className="w-6 h-6" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </Dialog.Content>
                        </div>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    )
}