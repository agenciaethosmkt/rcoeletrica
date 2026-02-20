import { WhatsAppButton } from "@/components/WhatsAppFloat";
import { ShieldCheck, X, CheckCircle } from "lucide-react";

const problems = [
  "Atrasa",
  "Faz gambiarra",
  "Não dá garantia",
  "Some depois do pagamento",
];

const differentials = [
  "Orçamento fechado antes de iniciar",
  "Serviço com Garantia",
  "Compra de material inclusa",
  "Atendimento direto com o responsável",
  "Serviço limpo e organizado",
];

export function TrustSection() {
  return (
    <section className="py-20" style={{ background: "var(--gradient-dark)" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ background: "hsl(43 95% 53% / 0.15)", color: "hsl(43 95% 60%)", border: "1px solid hsl(43 95% 53% / 0.3)" }}>
              <ShieldCheck size={14} />
              Por que nos escolher?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6"
              style={{ color: "hsl(0 0% 100%)", fontFamily: "Montserrat, sans-serif" }}>
              Por Que a R.C.O Não É{" "}
              <span style={{ color: "hsl(43 95% 53%)" }}>"Só Mais um Eletricista em SP"</span>?
            </h2>
            <p className="text-lg" style={{ color: "hsl(215 20% 70%)" }}>
              Sabemos que o maior medo não é o preço.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* The fear */}
            <div className="rounded-2xl p-8" style={{ background: "hsl(0 60% 30% / 0.2)", border: "1px solid hsl(0 60% 40% / 0.3)" }}>
              <h3 className="text-xl font-bold mb-6" style={{ color: "hsl(0 70% 65%)", fontFamily: "Montserrat, sans-serif" }}>
                É contratar alguém que…
              </h3>
              <ul className="space-y-3">
                {problems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: "hsl(0 70% 45%)" }}>
                      <X size={12} color="white" strokeWidth={3} />
                    </div>
                    <span style={{ color: "hsl(0 20% 80%)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The solution */}
            <div className="rounded-2xl p-8" style={{ background: "hsl(142 60% 30% / 0.2)", border: "1px solid hsl(142 60% 40% / 0.3)" }}>
              <h3 className="text-xl font-bold mb-6" style={{ color: "hsl(142 60% 60%)", fontFamily: "Montserrat, sans-serif" }}>
                A R.C.O Elétrica trabalha diferente.
              </h3>
              <ul className="space-y-3">
                {differentials.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: "hsl(142 60% 55%)" }} />
                    <span style={{ color: "hsl(215 20% 85%)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-base mb-8" style={{ color: "hsl(215 20% 65%)" }}>
              Se você buscou por <em>eletricista residencial em SP com garantia</em>, é exatamente isso que oferecemos.
              <br />
              <strong style={{ color: "hsl(0 0% 100%)" }}>Aqui não existe improviso. Existe padrão técnico e responsabilidade.</strong>
            </p>
            <WhatsAppButton
              text="Falar com o Eletricista"
              message="Olá! Gostaria de saber mais sobre os serviços da R.C.O Elétrica com garantia."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
