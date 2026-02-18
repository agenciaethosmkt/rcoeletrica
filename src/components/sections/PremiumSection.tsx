import { WhatsAppButton } from "@/components/WhatsAppFloat";
import { CheckCircle } from "lucide-react";

const premiumValues = [
  "Segurança para sua família",
  "Eletricista residencial em SP organizado",
  "Serviço elétrico seguro",
  "Garantia por escrito",
  "Nada de gambiarra",
];

export function PremiumSection() {
  return (
    <section className="py-20" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
            style={{ background: "hsl(43 95% 53% / 0.2)", color: "hsl(43 95% 60%)", border: "1px solid hsl(43 95% 53% / 0.4)" }}>
            💎 Posicionamento Premium
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight"
            style={{ color: "hsl(0 0% 100%)", fontFamily: "Montserrat, sans-serif" }}>
            Se Você Procura Apenas o{" "}
            <span style={{ color: "hsl(43 95% 53%)" }}>Mais Barato…</span>
          </h2>

          <p className="text-xl mb-8" style={{ color: "hsl(215 20% 75%)" }}>
            Talvez não sejamos a melhor opção.
          </p>

          <div className="rounded-2xl p-8 mb-10 text-left mx-auto max-w-lg"
            style={{ background: "hsl(0 0% 100% / 0.07)", border: "1px solid hsl(0 0% 100% / 0.12)" }}>
            <p className="text-lg font-bold mb-5" style={{ color: "hsl(43 95% 60%)", fontFamily: "Montserrat, sans-serif" }}>
              Mas se você busca:
            </p>
            <ul className="space-y-3">
              {premiumValues.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5"
                    style={{ color: "hsl(43 95% 53%)" }} />
                  <span style={{ color: "hsl(0 0% 92%)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl p-6 mb-10"
            style={{ background: "hsl(43 95% 53% / 0.15)", border: "1px solid hsl(43 95% 53% / 0.3)" }}>
            <p className="text-2xl font-black" style={{ color: "hsl(0 0% 100%)", fontFamily: "Montserrat, sans-serif" }}>
              Então você está no lugar certo.
            </p>
            <p className="mt-2 text-lg" style={{ color: "hsl(215 20% 75%)" }}>
              Nosso foco não é preço baixo. É <strong style={{ color: "hsl(43 95% 60%)" }}>tranquilidade.</strong>
            </p>
          </div>

          <WhatsAppButton
            text="Falar Agora com a R.C.O Serviços"
            message="Olá! Quero contratar a R.C.O Serviços para minha instalação elétrica."
          />
        </div>
      </div>
    </section>
  );
}
