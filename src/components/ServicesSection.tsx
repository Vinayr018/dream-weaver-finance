import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Wallet,
  GraduationCap,
  Briefcase,
  Home,
  LineChart,
} from "lucide-react";

const services = [
  {
    icon: Wallet,
    title: "Personal Loans",
    description: "Flexible personal loans tailored to your needs with competitive rates and quick disbursement.",
  },
  {
    icon: GraduationCap,
    title: "Education Loans",
    description: "Invest in your future with our education financing solutions for students at every level.",
  },
  {
    icon: Briefcase,
    title: "Business Loans",
    description: "Fuel your entrepreneurial vision with capital solutions designed for businesses of all sizes.",
  },
  {
    icon: Home,
    title: "Home Loans",
    description: "Make your dream home a reality with our affordable and transparent home financing options.",
  },
  {
    icon: LineChart,
    title: "Financial Consulting",
    description: "Expert guidance to optimize your finances, plan investments, and achieve long-term wealth.",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding relative sparkle-line-top">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/[0.02] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-60 h-60 bg-silver/[0.02] rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">Our Services</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">
            Comprehensive <span className="gold-gradient-text">Financial Solutions</span>
          </h2>
          <p className="text-silver max-w-2xl mx-auto text-lg">
            From personal aspirations to business ambitions, we offer a full spectrum of financial services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group luxury-card rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              {/* Icon with gold ring */}
              <div className="w-16 h-16 rounded-full gold-border-strong flex items-center justify-center mb-6 group-hover:gold-glow-strong transition-all duration-500 bg-primary/[0.06]">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-silver leading-relaxed text-sm">
                {service.description}
              </p>
              {/* Bottom gold accent line */}
              <div className="mt-6 h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent w-0 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
