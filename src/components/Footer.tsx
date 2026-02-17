import logo from "@/assets/findreams-logo.png";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-background sparkle-line-top">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Findreams" className="w-10 h-10 object-contain" />
              <span className="font-display text-xl font-bold gold-gradient-text">FINDREAMS SOLUTIONS</span>
            </div>
            <p className="text-silver text-sm leading-relaxed">
              Turning dreams into financial reality. Your trusted partner for loans and financial consulting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Services", "Why Us", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-silver text-sm hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Domain */}
          <div>
            <h4 className="font-display font-bold mb-4">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full gold-border-glow flex items-center justify-center text-silver hover:text-primary hover:gold-glow transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="luxury-card rounded-xl p-4">
              <p className="text-xs text-silver mb-1">Suggested Domain</p>
              <p className="text-primary font-semibold text-sm">findreamssolutions.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-6 text-center">
          <p className="text-silver text-xs">
            © {new Date().getFullYear()} Findreams Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
