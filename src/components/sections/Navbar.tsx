import { useState } from "react";
import logoRco from "@/assets/logo-rco-eletrica.png";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Garantia", href: "#garantia" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: "hsl(215 50% 8%)",
        borderColor: "hsl(215 40% 15%)",
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#inicio" className="flex-shrink-0">
          <img src={logoRco} alt="R.C.O Elétrica" className="h-10 w-auto" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold transition-colors duration-200"
                style={{
                  color: "hsl(215 20% 70%)",
                  fontFamily: "Montserrat, sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(43 95% 53%)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(215 20% 70%)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          style={{ color: "hsl(0 0% 100%)" }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t" style={{ background: "hsl(215 50% 8%)", borderColor: "hsl(215 40% 15%)" }}>
          <ul className="flex flex-col py-4 px-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleClick}
                  className="text-sm font-semibold block py-1"
                  style={{
                    color: "hsl(215 20% 70%)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
