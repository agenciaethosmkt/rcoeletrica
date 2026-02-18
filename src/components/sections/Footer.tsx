import { MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 border-t" style={{ background: "hsl(215 50% 8%)", borderColor: "hsl(215 40% 15%)" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <p className="text-xl font-black mb-1"
              style={{ color: "hsl(0 0% 100%)", fontFamily: "Montserrat, sans-serif" }}>
              R.C.O <span style={{ color: "hsl(43 95% 53%)" }}>Serviços</span>
            </p>
            <p className="text-xs" style={{ color: "hsl(215 20% 55%)" }}>
              Eletricista Residencial em São Paulo
            </p>
          </div>

          {/* Address */}
          <div className="flex items-center gap-2 text-sm" style={{ color: "hsl(215 20% 60%)" }}>
            <MapPin size={14} />
            <span>São Paulo Capital — SP</span>
          </div>

          {/* Keywords for SEO */}
          <div className="text-center md:text-right">
            <p className="text-xs" style={{ color: "hsl(215 20% 40%)" }}>
              Eletricista Residencial SP · Troca de Disjuntor SP · Quadro Elétrico Residencial SP
            </p>
            <p className="text-xs mt-1" style={{ color: "hsl(215 20% 35%)" }}>
              © {new Date().getFullYear()} R.C.O Serviços. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
