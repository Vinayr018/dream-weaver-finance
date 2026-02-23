import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import EMICalculator from "@/components/EMICalculator";
import HowToApply from "@/components/HowToApply";
import FounderCard from "@/components/FounderCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wallet, GraduationCap, Briefcase, Home, LineChart, FileText, Receipt, TrendingUp } from "lucide-react";

import imgPersonal from "@/assets/service-personal-loan.jpg";
import imgEducation from "@/assets/service-education-loan.jpg";
import imgBusiness from "@/assets/service-business-loan.jpg";
import imgHome from "@/assets/service-home-loan.jpg";
import imgConsulting from "@/assets/service-consulting.jpg";

const services = [
  { icon: Wallet, title: "Personal Loans", description: "Flexible personal loans with competitive rates.", image: imgPersonal, link: "/loans/personal" },
  { icon: GraduationCap, title: "Education Loans", description: "Education financing for students at every level.", image: imgEducation, link: "/loans/education" },
  { icon: Briefcase, title: "Business Loans", description: "Capital solutions for businesses of all sizes.", image: imgBusiness, link: "/loans/business" },
  { icon: Home, title: "Home Loans", description: "Affordable home financing options.", image: imgHome, link: "/loans/home" },
  { icon: FileText, title: "Income Tax Filing", description: "Hassle-free ITR filing with expert guidance.", image: imgConsulting, link: "/service/income-tax" },
  { icon: Receipt, title: "GST Filing Services", description: "Stay GST compliant with timely filing.", image: imgConsulting, link: "/service/gst-filing" },
  { icon: TrendingUp, title: "Investment Guidance", description: "Smart investments for long-term wealth growth.", image: imgConsulting, link: "/service/investment-guidance" },
  { icon: LineChart, title: "Financial Consulting", description: "Expert guidance for long-term wealth.", image: imgConsulting, link: "/services" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* Services Preview */}
      <section className="section-padding relative sparkle-line-top overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">Our Services</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">
              Comprehensive <span className="gold-gradient-text">Financial Solutions</span>
            </h2>
            <p className="text-silver max-w-2xl mx-auto text-lg">
              From personal aspirations to business ambitions, we offer a full spectrum of financial services.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to={service.link} className="block group luxury-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-500">
                  <div className="relative h-40 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </div>
                  <div className="p-5">
                    <div className="w-12 h-12 rounded-full gold-border-strong flex items-center justify-center mb-3 bg-primary/[0.06] -mt-10 relative z-10">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-1 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-silver text-sm mb-2">{service.description}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services" className="inline-flex items-center gap-2 gold-gradient-bg text-primary-foreground px-8 py-3 rounded-xl font-semibold gold-glow-strong hover:scale-105 transition-transform">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* EMI Calculator Preview */}
      <section className="section-padding sparkle-line-top">
        <div className="container mx-auto">
          <EMICalculator />
        </div>
      </section>

      {/* How to Apply */}
      <section className="section-padding sparkle-line-top">
        <div className="container mx-auto">
          <HowToApply />
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding sparkle-line-top">
        <div className="container mx-auto">
          <ReviewsSection />
        </div>
      </section>

      {/* Founder */}
      <FounderCard />

      <Footer />
    </div>
  );
};

export default Index;
