import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/findreams-logo.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 w-full h-0.5 z-[60]">
        <div
          className="h-full gold-gradient-bg transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0.5 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "glass-navbar py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <a href="#hero" className="flex items-center gap-2">
            <img src={logo} alt="Findreams Solutions" className="h-10 w-10 object-contain" />
            <span className="font-display text-lg font-bold gold-gradient-text hidden sm:block">
              FINDREAMS
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="gold-gradient-bg text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden glass-card mt-2 mx-4 rounded-xl p-4 animate-fade-up">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-foreground/80 hover:text-primary transition-colors border-b border-border/30 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 text-center gold-gradient-bg text-primary-foreground px-5 py-2.5 rounded-lg font-semibold"
            >
              Get Started
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
