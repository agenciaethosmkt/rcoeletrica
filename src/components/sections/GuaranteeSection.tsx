import { WhatsAppButton } from "@/components/WhatsAppFloat";
import { CheckCircle, ShieldCheck } from "lucide-react";

const guarantees = [
  "Garantia formal por escrito",
  "Explicação técnica clara",
  "Orçamento transparente",
  "Compra de material inclusa",
  "Atendimento com hora marcada",
];

export function GuaranteeSection() {
  return (
    <section className="py-20 section-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                style={{ background: "hsl(43 95% 53% / 0.12)", color: "hsl(43 80% 38%)", border: "1px solid hsl(43 95% 53% / 0.3)" }}>
                📄 Garantia Real
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight"
                style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}>
                Garantia Real de Serviço
              </h2>
              <p className="text-xl font-semibold mb-6" style={{ color: "hsl(215 50% 35%)" }}>
                Você não paga duas vezes pelo mesmo problema.
              </p>

              <ul className="space-y-4 mb-8">
                {guarantees.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="flex-shrink-0 mt-0.5"
                      style={{ color: "hsl(142 60% 40%)" }} />
                    <span className="font-medium" style={{ color: "hsl(var(--foreground))" }}>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
                Instalações elétricas antigas realmente oferecem risco.
                E muitas residências em São Paulo não seguem norma.
                <br /><br />
                <strong style={{ color: "hsl(var(--foreground))" }}>
                  Nosso trabalho é corrigir isso com segurança.
                </strong>
              </p>

              <WhatsAppButton
                text="Agendar Atendimento no WhatsApp"
                message="Olá! Gostaria de agendar um atendimento elétrico com hora marcada."
                size="sm"
              />
            </div>

            {/* Shield icon + stat block */}
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="flex items-center justify-center w-40 h-40 rounded-full"
                style={{ border: "3px solid hsl(42 88% 52%)", background: "hsl(218 60% 14% / 0.05)" }}>
                <ShieldCheck size={72} strokeWidth={1.25} style={{ color: "hsl(42 88% 52%)" }} />
              </div>
              <div className="rounded-2xl p-6 text-center"
                style={{ background: "hsl(218 60% 14%)", color: "hsl(0 0% 100%)" }}>
                <p className="text-3xl font-black mb-1" style={{ color: "hsl(42 88% 52%)", fontFamily: "Montserrat, sans-serif" }}>100%</p>
                <p className="text-sm font-semibold">Garantia Formal</p>
                <p className="text-xs mt-1" style={{ color: "hsl(215 20% 70%)" }}>Em todos os serviços executados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
