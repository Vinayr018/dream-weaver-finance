import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { Target, Eye, TrendingUp } from "lucide-react";

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
      <div className="text-muted-foreground text-sm font-medium">{label}</div>
    </div>
  );
};

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">About Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">
            Building <span className="gold-gradient-text">Financial Futures</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Findreams Solutions is a premier financial services company dedicated to making quality financial products accessible to everyone. We bridge the gap between dreams and financial reality.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-6 mb-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="glass-card rounded-2xl p-8 gold-border-glow hover:gold-glow transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg gold-gradient-bg flex items-center justify-center">
                <Target className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Empower individuals and businesses through accessible, transparent, and innovative financial solutions that drive growth and prosperity.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 gold-border-glow hover:gold-glow transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg gold-gradient-bg flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Become a nationally trusted and globally recognized financial solutions provider, setting new standards in customer-centric financial services.
            </p>
          </div>
        </div>

        {/* Counters */}
        <div className={`glass-card rounded-2xl p-8 md:p-12 gold-border-glow transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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
