import { motion } from "framer-motion";
import { FileText, Search, CheckCircle, Banknote } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose Your Loan",
    description: "Browse our loan categories and select the one that fits your needs.",
  },
  {
    icon: FileText,
    title: "Fill Application",
    description: "Complete the online application form with your details and documents.",
  },
  {
    icon: CheckCircle,
    title: "Get Approved",
    description: "Our team reviews your application and provides quick approval within 24–72 hours.",
  },
  {
    icon: Banknote,
    title: "Receive Funds",
    description: "Once approved, the loan amount is disbursed directly to your bank account.",
  },
];

const HowToApply = () => {
  return (
    <div className="luxury-card rounded-2xl p-8 md:p-10">
      <h3 className="font-display text-2xl font-bold mb-8 text-center">
        How to <span className="gold-gradient-text">Apply</span>
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center group"
          >
            <div className="relative mx-auto mb-4 w-16 h-16">
              <div className="w-full h-full rounded-full gold-border-strong flex items-center justify-center bg-primary/[0.06] group-hover:bg-primary/[0.15] transition-all">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full gold-gradient-bg flex items-center justify-center text-primary-foreground text-xs font-bold">
                {i + 1}
              </div>
            </div>
            <h4 className="font-display font-bold mb-2 group-hover:text-primary transition-colors">
              {step.title}
            </h4>
            <p className="text-silver text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowToApply;
