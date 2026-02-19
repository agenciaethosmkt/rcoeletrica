import { WhatsAppButton } from "@/components/WhatsAppFloat";
import electricalPanel from "@/assets/electrical-panel.jpg";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Pontual, explicou tudo antes de começar. Serviço limpo e organizado. Recomendo!",
    location: "Vila Mariana",
    stars: 5,
  },
  {
    text: "Já tinha pago duas vezes pelo mesmo problema. Dessa vez ficou resolvido de verdade.",
    location: "Tatuapé",
    stars: 5,
  },
  {
    text: "Orçamento fechado, sem surpresa no final. Exatamente o que eu precisava.",
    location: "Mooca",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} fill="hsl(43 95% 53%)" color="hsl(43 95% 53%)" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-20 section-light" id="depoimentos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ background: "hsl(142 60% 40% / 0.1)", color: "hsl(142 50% 32%)", border: "1px solid hsl(142 60% 40% / 0.25)" }}>
            ⭐ Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4"
            style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}>
            O que Nossos Clientes{" "}
            <span style={{ color: "hsl(43 95% 53%)" }}>estão Dizendo</span>
          </h2>
          <p className="text-lg" style={{ color: "hsl(var(--muted-foreground))" }}>
            Famílias que buscavam um eletricista residencial SP confiável e encontraram segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {testimonials.map((t) => (
            <div key={t.location} className="testimonial-card">
              <StarRating count={t.stars} />
              <blockquote className="text-base leading-relaxed mb-4 italic"
                style={{ color: "hsl(var(--foreground))" }}>
                "{t.text}"
              </blockquote>
              <footer className="text-sm font-semibold" style={{ color: "hsl(var(--muted-foreground))" }}>
                — Cliente, {t.location}
              </footer>
            </div>
          ))}
        </div>

        {/* Before / After image */}
        <div className="max-w-2xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img
            src={electricalPanel}
            alt="Antes e depois de quadro elétrico residencial - R.C.O Serviços SP"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="p-4 text-center" style={{ background: "hsl(var(--primary))" }}>
            <p className="text-sm font-semibold" style={{ color: "hsl(0 0% 100%)" }}>
              ✅ Antes e depois de quadro elétrico residencial em São Paulo
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-base mb-6 font-medium" style={{ color: "hsl(var(--foreground))" }}>
            Nosso objetivo é simples: <strong>Resolver o problema uma única vez.</strong>
          </p>
          <WhatsAppButton
            text="Falar com Eletricista Confiável"
            message="Olá! Quero contratar um eletricista confiável em SP. Como funciona?"
          />
        </div>
      </div>
    </section>
  );
}
