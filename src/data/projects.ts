import type { Project } from "../types";

export const projectsData: Project[] = [
  {
    title: "Zycorak Web",
    client: "E-commerce familiar",
    description: "Sitio web para la empresa Zycorak, con carrito de compras mediante pedido de whatsapp y codigo de tiktok para ganar productos",
    longDescription: "Este proyecto fue un reto logístico. Implementé un carrito de compras que, en lugar de pasarela de pago, genera un mensaje estructurado para WhatsApp. Además, integré Firebase para gestionar un sistema de cupones promocionales captados desde TikTok, permitiendo a los clientes obtener productos gratis tras validar su código en tiempo real.",
    image: "/projects/project-1/portada-zycorak.webp",
    gallery: [
      "/projects/project-1/zycorak-1.webp", 
      "/projects/project-1/zycorak-2.webp", 
      "/projects/project-1/zycorak-3.webp",
      "/projects/project-1/zycorak-4.webp",
      "/projects/project-1/zycorak-5.webp",
      "/projects/project-1/zycorak-6.webp",
    ],
    tags: ["React", "Typescript", "Tailwind CSS", "Firebase", "Framer Motion"],
    link: "https://zycorak.netlify.app/",
    github: "https://github.com/ErnestoPuente20/zycorak-web.git",
    type: "Web App",
  },
  {
    title: "Kyoto House Landing Page",
    client: "Kyoto House",
    description: "Landing page para Kyoto House, un restaurante ficticio de comida japonesa con una estética futurista y Cyberpunk. Destaca por su navegación dinámica de menú por categorías y una interfaz vibrante iluminada por neones.",
    longDescription: "Kyoto House es una landing page interactiva que fusiona la gastronomía tradicional japonesa con una estética futurista inspirada en el Neo-Tokyo. Desarrollado con un diseño 100% responsive y optimizado para móviles, el proyecto destaca por una interfaz inmersiva de contrastes oscuros y efectos de neón que guían al usuario de forma intuitiva. Su funcionalidad principal es un menú dinámico que permite filtrar y explorar platos por categorías en tiempo real, demostrando un manejo avanzado de estilos y animaciones fluidas para lograr una experiencia web de alto impacto visual.",
    image: "/projects/project-2/portada-2.webp",
    gallery: [
      "/projects/project-2/restaurant-1.webp", 
      "/projects/project-2/restaurant-2.webp", 
      "/projects/project-2/restaurant-3.webp",
      "/projects/project-2/restaurant-4.webp",
      "/projects/project-2/restaurant-5.webp",
    ],
    tags: ["NextJs", "Typescript", "Tailwind CSS", "Framer Motion"],
    link: "https://kyoto-house.vercel.app/",
    github: "https://github.com/ErnestoPuente20/kyoto-house.git",
    type: "Web App",
  },
  {
    title: "Urbania - Inmobiliaria Premium",
    client: "Proyecto de Portafolio",
    description: "Sitio web corporativo de alta gama para bienes raíces con navegación fluida y animaciones de alto rendimiento.",
    longDescription: "El gran reto de este proyecto fue la experiencia de usuario y el rendimiento visual. Implementé Next.js (App Router) aprovechando Turbopack para una velocidad de carga estática óptima. Desarrollé una interfaz ultra fluida utilizando GSAP para las microinteracciones de las tarjetas de propiedades y optimicé el comportamiento de navegación nativa (anclas HTML) para evitar bloqueos de historial en SPA, logrando una navegación impecable tanto en escritorio como en dispositivos móviles.",
    image: "/projects/project-3/portada-3.webp", // Ajusta el número de carpeta según tu estructura
    gallery: [
      "/projects/project-3/urbania-1.webp", 
      "/projects/project-3/urbania-2.webp", 
      "/projects/project-3/urbania-3.webp",
      "/projects/project-3/urbania-4.webp",
      "/projects/project-3/urbania-5.webp",
    ],
    tags: ["Next.js", "React", "Typescript", "Tailwind CSS", "GSAP", "Vercel"],
    link: "https://realstate-phi-liart.vercel.app/", // Pega aquí el enlace final que te dio Vercel
    github: "https://github.com/ErnestoPuente20/realstate.git", // Pega aquí tu enlace de GitHub
    type: "Web App",
  },
  {
    title: "Novatech - Tienda de Hardware & Cotizador",
    client: "Empresa de Tecnología",
    description: "Sitio web corporativo para una tienda de componentes de computadora, con catálogo dinámico y un formulario avanzado de cotización.",
    longDescription: "Un proyecto web corporativo enfocado en la experiencia de usuario (UX/UI) para el sector de hardware. Implementé una arquitectura limpia utilizando Blocksy y Elementor, optimizando el rendimiento mediante la eliminación de scripts heredados pesados (como sliders dinámicos complejos) y la conversión de imágenes a formatos de última generación como WebP. El sitio destaca por su catálogo estructurado de componentes y un sistema interactivo de cotización diseñado para captar leads de manera eficiente.",
    image: "/projects/project-4/portada-4.webp",
    gallery: [
      "/projects/project-4/tech-1.webp", 
      "/projects/project-4/tech-2.webp", 
      "/projects/project-4/tech-3.webp",
      "/projects/project-4/tech-4.webp",
      "/projects/project-4/tech-5.webp",
    ],
    tags: ["WordPress", "Elementor Pro", "Blocksy Theme", "UI/UX Design", "Web Optimization"],
    link: "#",
    github: "#",
    type: "WordPress",
  },
]