import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import { MapPin, Mail, Phone, Send, Clock } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="Get In"
        highlight="Touch"
        subtitle="Ready to take the next step? Reach out and let us guide your financial journey."
        breadcrumb="Home / Contact"
      />

      <section className="section-padding sparkle-line-top">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Info */}
            <div className="space-y-6">
              <div className="luxury-card rounded-2xl p-8 space-y-6">
                {[
                  { Icon: MapPin, title: "Our Office", text: "Tumakuru, Karnataka, India" },
                  { Icon: Mail, title: "Email", text: "info@findreams.com" },
                  { Icon: Phone, title: "Phone", text: "+91 90000 00000" },
                  { Icon: Clock, title: "Business Hours", text: "9:00 AM – 7:00 PM (Mon–Sat)" },
                ].map(({ Icon, title, text }) => (
                  <div key={title} className="flex items-start gap-4 group">
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 rounded-full gold-border-strong flex items-center justify-center bg-primary/[0.06] group-hover:bg-primary/[0.15] transition-all duration-300">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{title}</h4>
                      <p className="text-silver text-sm">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

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
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all" placeholder="Your name" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block text-silver-light">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block text-silver-light">Phone</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all" placeholder="+91 00000 00000" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block text-silver-light">Message</label>
                <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none" placeholder="How can we help you?" />
              </div>
              <button type="submit" className="w-full gold-gradient-bg text-primary-foreground py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all gold-glow-strong hover:scale-[1.02] group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* FAQ */}
          <FAQSection />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
