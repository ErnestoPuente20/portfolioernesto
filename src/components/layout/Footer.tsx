import {FaGithub, FaTiktok, FaWhatsapp} from "react-icons/fa6";

const socialLinks = [
    {icon: FaGithub, href: "#", label: "GitHub"},
    {icon: FaTiktok, href: "#", label: "TikTok"},
    {icon: FaWhatsapp, href: "#", label: "WhatsApp"},
]

const footerLinks = [
    {href: "#skills", label: "Habilidades"},
    {href: "#projects", label: "Proyectos"},
    {href: "#about", label: "Acerca de mi"},
    {href: "#contact", label: "Contacto"},
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & copyright */}
                    <div className="text-center md:text-left">
                        <a href="#" className="text-xl font-bold tracking-tight">
                            PM<span className="text-primary">.</span>
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                            © {currentYear} Ernesto Puente. Todos los derechos reservados.
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a 
                                key={link.href}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a 
                                key={social.label}
                                href={social.href}
                                aria-label={social.href}
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                            >
                                <social.icon className="w-5 h-5"/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
