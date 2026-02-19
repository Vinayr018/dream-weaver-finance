import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/findreams-logo.png";
import heroImage from "@/assets/hero-finance.jpg";
import GoldParticles from "./GoldParticles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-28">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.25 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </motion.div>

      <GoldParticles />

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.04] rounded-full blur-[150px]" />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/[0.05] rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `linear-gradient(hsl(43 74% 49% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(43 74% 49% / 0.4) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />
      </div>

      <div className="relative z-10 container mx-auto text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="mb-8">
          <div className="relative inline-block">
            <img src={logo} alt="Findreams Solutions" className="w-36 h-36 md:w-52 md:h-52 mx-auto object-contain drop-shadow-2xl animate-float" />
            <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.05, 0.15] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 rounded-full border border-primary/20 -z-10" />
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10 animate-glow-pulse" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="inline-flex items-center gap-2 px-5 py-2 rounded-full gold-border-glow bg-primary/[0.06] mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium tracking-wide">Trusted Financial Partner</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Turning Dreams Into
          <br />
          <span className="gold-gradient-text">Financial Reality</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="text-silver text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Empowering individuals and businesses with accessible financial solutions.
          From personal loans to strategic consulting — your future starts here.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/services" className="group gold-gradient-bg text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-lg flex items-center gap-2 transition-all duration-300 gold-glow-strong hover:scale-105">
            Explore Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/contact" className="px-8 py-3.5 rounded-xl font-semibold text-lg gold-border-strong text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105">
            Apply Now
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-primary/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
