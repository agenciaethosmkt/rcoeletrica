import { WhatsAppButton } from "@/components/WhatsAppFloat";
import { AlertTriangle, Zap, Flame } from "lucide-react";

const warningItems = [
  "O disjuntor desarma com frequência?",
  "As luzes piscam quando liga o chuveiro?",
  "Seu quadro de luz é antigo?",
];

const risks = [
  { icon: <Flame size={22} />, text: "Risco de incêndio" },
  { icon: <Zap size={22} />, text: "Curto-circuito e danos a eletrodomésticos" },
  { icon: <AlertTriangle size={22} />, text: "Alto consumo de energia elétrica" },
];

export function ProblemSection() {
  return (
    <section className="py-20 section-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ background: "hsl(0 84% 60% / 0.1)", color: "hsl(0 70% 45%)", border: "1px solid hsl(0 84% 60% / 0.25)" }}>
            <AlertTriangle size={14} />
            Atenção
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight"
            style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}>
            Sua Instalação Elétrica Pode Estar{" "}
            <span style={{ color: "hsl(0 70% 45%)" }}>Colocando Sua Família em Risco</span>
          </h2>

          {/* Warning signs */}
          <div className="flex flex-col gap-3 mb-10 text-left max-w-lg mx-auto">
            {warningItems.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-lg"
                style={{ background: "hsl(0 84% 60% / 0.06)", border: "1px solid hsl(0 84% 60% / 0.15)" }}>
                <span className="text-lg">⚠️</span>
                <p className="font-semibold" style={{ color: "hsl(var(--foreground))" }}>{item}</p>
              </div>
            ))}
          </div>

          <p className="text-lg mb-8 leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            Instalações elétricas antigas, fora do padrão técnico, podem representar riscos para a segurança.
          </p>

          {/* Risk cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {risks.map((risk) => (
              <div key={risk.text} className="rounded-xl p-5 text-center"
                style={{ background: "hsl(215 50% 18% / 0.06)", border: "1px solid hsl(215 50% 18% / 0.12)" }}>
                <div className="flex justify-center mb-3" style={{ color: "hsl(0 70% 45%)" }}>
                  {risk.icon}
                </div>
                <p className="font-semibold text-sm" style={{ color: "hsl(var(--foreground))" }}>{risk.text}</p>
              </div>
            ))}
          </div>

          <p className="text-base mb-10" style={{ color: "hsl(var(--muted-foreground))" }}>
            A maioria das pessoas só procura um eletricista quando algo já deu errado.
            Mas muitas vezes o problema já estava dando sinais.
            <br /><br />
            <strong style={{ color: "hsl(0 70% 45%)" }}>O barato sai caro na elétrica.</strong>
          </p>

          <WhatsAppButton
            text="Resolver Meu Problema Elétrico"
            message="Olá! Tenho um problema elétrico em casa e gostaria de resolver urgente."
          />
        </div>
      </div>
    </section>
  );
}
