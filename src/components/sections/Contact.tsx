import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import Button from "../ui/Button"; // Asegúrate de que la ruta sea correcta
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ernesto20puente@gmail.com", // Pon tu correo real aquí
    href: "mailto:ernesto20puente@gmail.com",
  },
  // {
  //   icon: Phone,
  //   label: "WhatsApp",
  //   value: "+591 69045144", // Tu número de Bolivia
  //   href: "https://wa.me/59169045144", // Enlace directo a WhatsApp
  // },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "La Paz, Bolivia",
    href: "#",
  },
];

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [isLoading,setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsLoading(true)
    setSubmitStatus({type: null, message: ""})
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Configuración de EmailJS incompleta.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "¡Mensaje enviado! Me pondré en contacto contigo pronto.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS error:", error); // Verifica que diga 'err' y no 'error'
      setSubmitStatus({
        type: "error",
        message: error?.text || "No se pudo enviar el mensaje. Intenta de nuevo.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"/>
        <div className="absolute bottom-1/4 right-1/4"/>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-display uppercase tracking-[0.3em] mb-4 block">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            ¿Tienes un proyecto?{" "}
            <span className="text-primary">
              Hablemos.
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Estoy disponible para nuevos retos y colaboraciones.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulario */}
          <div className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-4xl border border-white/10 shadow-2xl">
            <form className="space-y-6" action="" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium mb-2 text-white/70 ml-1">Nombre</label>
                  <input 
                    id="nombre"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => 
                      setFormData({...formData, name: e.target.value})
                    }
                    className="w-full px-5 py-4 bg-white/5 rounded-2xl border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-white" 
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/70 ml-1">Email</label>
                  <input 
                    id="email"
                    type="email"
                    required
                    placeholder="Tu@correo.com"
                    value={formData.email}
                    onChange={(e) => 
                      setFormData({...formData, email: e.target.value})
                    }
                    className="w-full px-5 py-4 bg-white/5 rounded-2xl border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-white" 
                  />
                </div>
              </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/70 ml-1">Mensaje</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="¿En que puedo ayudarte?"
                    value={formData.message}
                    onChange={(e) => 
                      setFormData({...formData, message: e.target.value})
                    }
                    className="w-full px-5 py-4 bg-white/5 rounded-2xl border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-white resize-none"
                  />
                </div>

                <Button
                  className="w-full h-14 rounded-2xl text-lg font-bold flex items-center justify-center gap-3"
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Enviando..." : (
                  <>
                    Enviar Mensaje
                    <Send className="w-5 h-5" />
                  </>
                )}
                </Button>
                
                {submitStatus.type && (
                  <div className={`flex items-center gap-3 p-4 rounded-2xl border transition-all ${
                    submitStatus.type === "success" 
                    ? "bg-green-500/10 border-green-500/20 text-green-400" 
                    : "bg-red-500/10 border-red-500/20 text-red-400"
                  }`}>
                    {submitStatus.type === "success" ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                    <p className="text-sm font-medium">{submitStatus.message}</p>
                  </div>
                )}
            </form>
          </div>

          {/* Informacion lateral */}
          <div className="flex flex-col gap-6">
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-4xl border border-white/10">
              <h3 className="text-xl font-bold mb-6 text-white">Información de contacto</h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i} 
                    href=""
                    className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-primary"/>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                        {item.label}
                      </div>
                      <div className="text-white font-medium">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Disponibilidad */}
            <div className="bg-primary/5 backdrop-blur-xl p-8 rounded-4xl border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute"/>
                  <div className="w-3 h-3 bg-green-500 rounded-full relative"/>
                </div>
                <span>Disponible ahora</span>
              </div>
              <p>
                Actualmente estoy aceptando proyectos como freelance y oportunidades de tiempo completo. 
                ¡Hablemos sobre cómo puedo aportar valor a tu equipo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};