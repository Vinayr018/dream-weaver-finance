import logo from "@/assets/findreams-logo.png";
import { Facebook, Twitter, Instagram, Linkedin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-background sparkle-line-top">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Findreams" className="w-12 h-12 object-contain" />
              <span className="font-display text-xl font-bold gold-gradient-text">FINDREAMS SOLUTIONS</span>
            </div>
            <p className="text-silver text-sm leading-relaxed max-w-sm mb-6">
              Turning dreams into financial reality. Your trusted partner for personal loans, business loans, home loans, and expert financial consulting.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full gold-border-glow flex items-center justify-center text-silver hover:text-primary hover:bg-primary/[0.08] transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4 text-primary">Quick Links</h4>
            <div className="space-y-2.5">
              {[
                { label: "Home", href: "#hero" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Why Us", href: "#why-us" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-silver text-sm hover:text-primary hover:translate-x-1 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services & Domain */}
          <div>
            <h4 className="font-display font-bold mb-4 text-primary">Services</h4>
            <div className="space-y-2.5 mb-6">
              {["Personal Loans", "Education Loans", "Business Loans", "Home Loans", "Consulting"].map((s) => (
                <p key={s} className="text-silver text-sm">{s}</p>
              ))}
            </div>
            <div className="luxury-card rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <Globe className="w-3.5 h-3.5 text-primary" />
                <p className="text-xs text-silver">Suggested Domain</p>
              </div>
              <p className="text-primary font-semibold text-sm">findreamssolutions.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-silver text-xs">
            © {new Date().getFullYear()} Findreams Solutions. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Turning Dreams Into Financial Reality
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
