import { WhatsAppButton } from "@/components/WhatsAppFloat";
import { MapPin } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-24" style={{ background: "var(--gradient-dark)" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 rounded-full" style={{ background: "hsl(43 95% 53%)" }} />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            style={{ color: "hsl(0 0% 100%)", fontFamily: "Montserrat, sans-serif" }}>
            Eletricista Residencial em SP com{" "}
            <span style={{ color: "hsl(43 95% 53%)" }}>Atendimento Imediato</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {["Evite riscos", "Evite incêndios", "Evite dor de cabeça"].map((item) => (
              <div key={item} className="rounded-xl py-4 px-5"
                style={{ background: "hsl(0 0% 100% / 0.06)", border: "1px solid hsl(0 0% 100% / 0.1)" }}>
                <p className="text-lg font-bold" style={{ color: "hsl(0 0% 95%)" }}>🚫 {item}</p>
              </div>
            ))}
          </div>

          <p className="text-lg mb-4" style={{ color: "hsl(215 20% 70%)" }}>
            Fale diretamente com o responsável pelo serviço.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center mb-10 text-sm">
            {["Sem intermediários.", "Sem improviso.", "Sem surpresa no valor final."].map((item) => (
              <span key={item} className="font-semibold" style={{ color: "hsl(43 95% 60%)" }}>
                ✓ {item}
              </span>
            ))}
          </div>

          {/* BIG CTA button */}
          <div className="flex justify-center mb-6">
            <WhatsAppButton
              text="Solicitar Orçamento Agora no WhatsApp"
              message="Olá! Gostaria de solicitar um orçamento para serviço elétrico residencial em SP."
            />
          </div>

          <div className="flex items-center justify-center gap-2 mt-4"
            style={{ color: "hsl(215 20% 55%)" }}>
            <MapPin size={14} />
            <span className="text-sm">São Paulo Capital — Atendimento Profissional com Hora Marcada</span>
          </div>
        </div>
      </div>
    </section>
  );
}
