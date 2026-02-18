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
    <section id="why-us" className="section-padding relative sparkle-line-top overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">
            The <span className="gold-gradient-text">Findreams</span> Advantage
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`text-center luxury-card rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              {/* Gold-ringed circle icon with animated ring */}
              <div className="relative mx-auto mb-5 w-[72px] h-[72px]">
                <div className="w-full h-full rounded-full gold-border-strong flex items-center justify-center bg-primary/[0.06] group-hover:bg-primary/[0.15] transition-all duration-500">
                  <f.icon className="w-8 h-8 text-primary" />
                </div>
                {/* Outer glow ring on hover */}
                <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/20 group-hover:scale-[1.35] transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/10 group-hover:scale-[1.6] transition-all duration-700 opacity-0 group-hover:opacity-100" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{f.title}</h3>
              <p className="text-silver text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
