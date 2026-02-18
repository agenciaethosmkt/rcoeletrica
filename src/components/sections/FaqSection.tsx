import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Precisa mesmo trocar o quadro elétrico?",
    answer: "Se ele for antigo ou subdimensionado, sim. Quadros antigos podem causar sobrecarga e risco de incêndio. Fazemos um diagnóstico técnico antes de qualquer recomendação.",
  },
  {
    question: "Tem garantia?",
    answer: "Sim. Garantia formal após execução do serviço. Você não paga duas vezes pelo mesmo problema.",
  },
  {
    question: "Atende quais regiões?",
    answer: "São Paulo capital, com foco em Mooca, Tatuapé, Vila Mariana, Ipiranga, Santana e regiões próximas.",
  },
  {
    question: "Quanto custa um eletricista em SP?",
    answer: "Depende do diagnóstico e do serviço necessário. O orçamento é fechado antes do início do serviço — sem surpresa no valor final.",
  },
  {
    question: "Atende emergência?",
    answer: "Sim. Atendemos emergências elétricas em São Paulo. Entre em contato pelo WhatsApp para atendimento rápido.",
  },
  {
    question: "O material é incluso?",
    answer: "Depende do serviço e da preferência do cliente. Oferecemos a opção de incluir o material no orçamento, garantindo qualidade nos componentes utilizados.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 text-left py-1 group"
        aria-expanded={open}
      >
        <span className="text-base font-semibold transition-colors"
          style={{ color: open ? "hsl(43 80% 38%)" : "hsl(var(--foreground))", fontFamily: "Montserrat, sans-serif" }}>
          {question}
        </span>
        <ChevronDown
          size={20}
          className="flex-shrink-0 transition-transform duration-200"
          style={{
            color: "hsl(var(--muted-foreground))",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      {open && (
        <p className="mt-3 text-sm leading-relaxed pb-1" style={{ color: "hsl(var(--muted-foreground))" }}>
          {answer}
        </p>
      )}
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="py-20 section-light" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ background: "hsl(215 50% 18% / 0.08)", color: "hsl(215 50% 30%)", border: "1px solid hsl(215 50% 18% / 0.15)" }}>
              ❓ Dúvidas Frequentes
            </span>
            <h2 className="text-3xl md:text-4xl font-black"
              style={{ color: "hsl(var(--primary))", fontFamily: "Montserrat, sans-serif" }}>
              Perguntas Frequentes
            </h2>
          </div>

          <div>
            {faqs.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
