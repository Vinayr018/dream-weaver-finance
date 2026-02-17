import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { Target, Eye } from "lucide-react";

const Counter = ({ end, label, suffix = "+" }: { end: number; label: string; suffix?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl font-bold gold-gradient-text mb-2">
        {isVisible ? count.toLocaleString() : "0"}{suffix}
      </div>
      <div className="text-silver text-sm font-medium tracking-wide">{label}</div>
    </div>
  );
};

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding relative sparkle-line-top">
      <div className="container mx-auto" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">About Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">
            Building <span className="gold-gradient-text">Financial Futures</span>
          </h2>
          <p className="text-silver max-w-2xl mx-auto text-lg leading-relaxed">
            Findreams Solutions is a premier financial services company dedicated to making quality financial products accessible to everyone.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-6 mb-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="luxury-card rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gold-gradient-bg flex items-center justify-center shadow-lg">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold">Our Mission</h3>
            </div>
            <p className="text-silver leading-relaxed">
              Empower individuals and businesses through accessible, transparent, and innovative financial solutions that drive growth and prosperity.
            </p>
          </div>

          <div className="luxury-card rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gold-gradient-bg flex items-center justify-center shadow-lg">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold">Our Vision</h3>
            </div>
            <p className="text-silver leading-relaxed">
              Become a nationally trusted and globally recognized financial solutions provider, setting new standards in customer-centric financial services.
            </p>
          </div>
        </div>

        {/* Counters */}
        <div className={`luxury-card rounded-2xl p-8 md:p-12 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-3 gap-8">
            <Counter end={5000} label="Clients Served" />
            <Counter end={10} label="Years Experience" />
            <Counter end={20} label="Financial Products" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
