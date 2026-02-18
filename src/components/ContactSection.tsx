import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Mail, Phone, Send, ArrowRight } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="section-padding relative sparkle-line-top overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">Contact Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">
            Let's <span className="gold-gradient-text">Connect</span>
          </h2>
          <p className="text-silver max-w-xl mx-auto text-lg">
            Ready to take the next step? Reach out and let us guide your financial journey.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Info */}
          <div className="space-y-6">
            <div className="luxury-card rounded-2xl p-8 space-y-6">
              {[
                { Icon: MapPin, title: "Our Office", text: "Tumakuru, Karnataka, India" },
                { Icon: Mail, title: "Email", text: "info@findreams.com" },
                { Icon: Phone, title: "Phone", text: "+91 90000 00000" },
              ].map(({ Icon, title, text }) => (
                <div key={title} className="flex items-start gap-4 group">
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-full gold-border-strong flex items-center justify-center bg-primary/[0.06] group-hover:bg-primary/[0.15] transition-all duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/15 group-hover:scale-[1.3] transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{title}</h4>
                    <p className="text-silver text-sm">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="luxury-card rounded-2xl overflow-hidden h-48 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent" />
              <div className="text-center text-silver relative z-10">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-primary/50" />
                <p className="text-sm font-medium">Tumakuru, Karnataka</p>
                <p className="text-xs text-muted-foreground mt-1">India</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="luxury-card rounded-2xl p-8 space-y-5">
            <h3 className="font-display text-xl font-bold gold-gradient-text mb-2">Send Us a Message</h3>
            <div>
              <label className="text-sm font-medium mb-1.5 block text-silver-light">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                placeholder="Your name"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block text-silver-light">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block text-silver-light">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="+91 00000 00000"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block text-silver-light">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full gold-gradient-bg text-primary-foreground py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all gold-glow-strong hover:scale-[1.02] group"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
