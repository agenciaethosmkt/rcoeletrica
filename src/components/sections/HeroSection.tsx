import heroImage from "@/assets/hero-electrician-logo.jpg";
import logoRco from "@/assets/logo-rco.png";
import { WhatsAppButton } from "@/components/WhatsAppFloat";
import { CheckCircle, MapPin, Clock, Shield } from "lucide-react";

const checks = [
  "Troca de disjuntor em SP",
  "Atualização de quadro elétrico residencial",
  "Instalar ventilador de teto",
  "Instalação de chuveiro",
  "Eletricista perto de mim com atendimento profissional",
];

const badges = [
  { icon: <Shield size={14} />, text: "Serviço com Garantia" },
  { icon: <Clock size={14} />, text: "Hora Marcada" },
  { icon: <MapPin size={14} />, text: "São Paulo Capital" },
];

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, hsl(215 50% 10% / 0.97) 0%, hsl(215 50% 10% / 0.75) 60%, transparent 100%)" }} />

      {/* Logo no canto superior direito */}
      <div className="absolute top-5 right-6 z-20">
        <img src={logoRco} alt="R.C.O Serviços" className="h-12 md:h-16 w-auto opacity-90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-24">
        <div className="max-w-3xl mx-auto text-center lg:text-center">
          {/* Trust badges */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {badges.map((badge) => (
              <span
                key={badge.text}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "hsl(43 95% 53% / 0.2)",
                  color: "hsl(43 95% 60%)",
                  border: "1px solid hsl(43 95% 53% / 0.4)",
                }}
              >
                {badge.icon}
                {badge.text}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
            style={{ color: "hsl(0 0% 100%)", fontFamily: "Montserrat, sans-serif" }}
          >
            Eletricista em SP com{" "}
            <span style={{ color: "hsl(43 95% 53%)" }}>Garantia</span>{" "}
            e{" "}
            <span style={{ color: "hsl(43 95% 53%)" }}>Orçamento sem Surpresa</span>
          </h1>

          <p className="text-lg md:text-xl mb-8" style={{ color: "hsl(215 20% 80%)" }}>
            Serviço elétrico seguro, organizado e sem improvisos.
            <br />
            Atendimento com hora marcada em São Paulo capital.
          </p>

          {/* Checklist */}
          <ul className="space-y-3 mb-10 inline-block text-left">
            {checks.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "hsl(43 95% 53%)" }}
                />
                <span style={{ color: "hsl(215 20% 85%)" }} className="text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <WhatsAppButton
            text="Solicitar Orçamento no WhatsApp"
            message="Olá! Vim pelo site e gostaria de solicitar um orçamento para serviço elétrico."
          />

          <p className="mt-4 text-sm" style={{ color: "hsl(215 20% 60%)" }}>
            Se você pesquisou por <em>eletricista residencial SP</em>, está no lugar certo.
          </p>
        </div>
      </div>

    </section>
  );
}
