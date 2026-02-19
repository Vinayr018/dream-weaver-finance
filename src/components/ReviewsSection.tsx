import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Findreams made my home loan process incredibly smooth. The team guided me at every step and I got the best interest rate!",
    role: "Home Loan Client",
  },
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Got my business loan approved in just 48 hours. Their transparency and professionalism are unmatched.",
    role: "Business Loan Client",
  },
  {
    name: "Ananya Reddy",
    rating: 4,
    text: "The education loan consultation was very helpful. They connected me with the right bank for my master's abroad.",
    role: "Education Loan Client",
  },
  {
    name: "Mohammed Farhan",
    rating: 5,
    text: "Excellent financial consulting. They helped me restructure my debts and plan my investments wisely.",
    role: "Consulting Client",
  },
  {
    name: "Sneha Patil",
    rating: 5,
    text: "Quick personal loan approval with minimal documentation. Very happy with the service!",
    role: "Personal Loan Client",
  },
  {
    name: "Vikram Singh",
    rating: 4,
    text: "The LAP process was straightforward and the team was available even after office hours to help me.",
    role: "LAP Client",
  },
];

const ReviewsSection = () => {
  return (
    <div>
      <h3 className="font-display text-2xl font-bold mb-8 text-center">
        What Our <span className="gold-gradient-text">Clients Say</span>
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="luxury-card rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-500"
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star
                  key={s}
                  className={`w-4 h-4 ${s < review.rating ? "text-primary fill-primary" : "text-muted-foreground"}`}
                />
              ))}
            </div>
            <p className="text-silver text-sm leading-relaxed mb-4">"{review.text}"</p>
            <div>
              <p className="font-semibold text-sm">{review.name}</p>
              <p className="text-xs text-muted-foreground">{review.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
