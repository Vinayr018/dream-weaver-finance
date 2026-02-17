import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/findreams-logo.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-28"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central gold orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/[0.04] rounded-full blur-[100px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-silver/[0.03] rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        
        {/* Corner sparkle accents */}
        <div className="absolute top-20 left-10 w-1 h-1 bg-primary/60 rounded-full animate-glow-pulse" />
        <div className="absolute top-40 right-20 w-0.5 h-0.5 bg-gold-light/50 rounded-full animate-glow-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-1/4 w-0.5 h-0.5 bg-primary/40 rounded-full animate-glow-pulse" style={{ animationDelay: "2s" }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(43 74% 49% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(43 74% 49% / 0.4) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Top & bottom sparkle lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <img
              src={logo}
              alt="Findreams Solutions"
              className="w-36 h-36 md:w-48 md:h-48 mx-auto object-contain drop-shadow-2xl animate-float"
            />
            {/* Glow behind logo */}
            <div className="absolute inset-0 w-full h-full bg-primary/10 rounded-full blur-3xl -z-10 animate-glow-pulse" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full gold-border-glow bg-primary/[0.06] mb-6"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium tracking-wide">Trusted Financial Partner</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Turning Dreams Into
          <br />
          <span className="gold-gradient-text">Financial Reality</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-silver text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Empowering individuals and businesses with accessible financial solutions.
          From personal loans to strategic consulting — your future starts here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="gold-gradient-bg text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-lg flex items-center gap-2 transition-all duration-300 gold-glow-strong hover:scale-105"
          >
            Explore Services
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl font-semibold text-lg gold-border-glow text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
