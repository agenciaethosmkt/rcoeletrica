import { WhatsAppButton } from "@/components/WhatsAppFloat";
import { Zap, LayoutGrid, Settings, Wind, Droplets, AlertCircle } from "lucide-react";

const services = [
  {
    icon: <Zap size={28} />,
    title: "Troca de Disjuntor SP",
    description: "Evite sobrecarga e risco de curto-circuito. Substituição segura e dentro das normas.",
  },
  {
    icon: <LayoutGrid size={28} />,
    title: "Quadro Elétrico Residencial SP",
    description: "Atualização completa para suportar ar-condicionado, forno elétrico e equipamentos modernos.",
  },
  {
    icon: <Settings size={28} />,
    title: "Troca de Quadro de Luz",
    description: "Instalação organizada e dentro das normas técnicas.",
  },
  {
    icon: <Wind size={28} />,
    title: "Instalar Ventilador de Teto",
    description: "Instalação segura, sem risco de queda ou sobrecarga no circuito.",
  },
  {
    icon: <Droplets size={28} />,
    title: "Instalador de Chuveiro SP",
    description: "Ligação correta, evitando aquecimento excessivo e risco de choque elétrico.",
  },
  {
    icon: <AlertCircle size={28} />,
    title: "Eletricista Urgente SP",
    description: "Atendimento rápido para emergências elétricas em São Paulo capital.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 section-gray" id="servicos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ background: "hsl(43 95% 53% / 0.12)", color: "hsl(43 80% 38%)", border: "1px solid hsl(43 95% 53% / 0.3)" }}>
            <Zap size={14} />
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight"
            style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}>
            Serviços Elétricos com{" "}
            <span style={{ color: "hsl(43 95% 44%)" }}>Segurança e Profissionalismo</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
            Atendemos São Paulo capital com foco em bairros de classe média e média alta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="mb-4" style={{ color: "hsl(43 95% 44%)" }}>{service.icon}</div>
              <h3 className="text-lg font-bold mb-2"
                style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}>
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
            Se você pesquisou por <em>eletricista perto de mim em São Paulo</em>, atendemos sua região.
          </p>
          <WhatsAppButton
            text="Solicitar Atendimento Agora"
            message="Olá! Gostaria de solicitar atendimento elétrico residencial em SP."
          />
        </div>
      </div>
    </section>
  );
}
