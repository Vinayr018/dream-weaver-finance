import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ShieldCheck, Zap, Handshake, Award } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Advisors",
    description: "Decades of expertise ensuring your financial security and growth.",
  },
  {
    icon: Zap,
    title: "Fast Approvals",
    description: "Streamlined processes for quick loan sanctions and disbursements.",
  },
  {
    icon: Handshake,
    title: "Transparent Process",
    description: "No hidden charges. Complete clarity at every step of the journey.",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    description: "Certified professionals dedicated to your financial success.",
  },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why-us" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">
            The <span className="gold-gradient-text">Findreams</span> Advantage
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`text-center glass-card rounded-2xl p-8 gold-border-glow hover:gold-glow transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              <div className="w-16 h-16 rounded-2xl gold-gradient-bg flex items-center justify-center mx-auto mb-5">
                <f.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
