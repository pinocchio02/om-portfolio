import { motion } from "framer-motion";
import { Brain, Database, Sparkles, Code2, Layers, Rocket } from "lucide-react";

const dnaTraits = [
  {
    title: "Machine Learning",
    description: "Designing, training, and validating models with a focus on real-world performance.",
    icon: Brain,
  },
  {
    title: "Data Engineering",
    description: "Working with structured data, pipelines, APIs, and scalable data workflows.",
    icon: Database,
  },
  {
    title: "Deep Learning",
    description: "Building CNN-based systems for vision and representation learning tasks.",
    icon: Sparkles,
  },
  {
    title: "Problem Solving",
    description: "Breaking ambiguous problems into clear, testable components.",
    icon: Code2,
  },
  {
    title: "End-to-End Thinking",
    description: "Taking ideas from experimentation to deployment and iteration.",
    icon: Layers,
  },
  {
  title: "Model Deployment",
  description: "Deploying ML models using APIs and cloud services, with a focus on reliability and real-world usage.",
  icon: Rocket, 
}
];

const DataDNA = () => {
  return (
    <section id="data-dna" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            My Data DNA
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A snapshot of how I think, build, and work with data-driven systems.
          </p>
        </motion.div>

        {/* Traits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {dnaTraits.map((trait, index) => {
            const Icon = trait.icon;
            return (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  bg-card
                  border
                  border-border
                  rounded-xl
                  p-6
                  hover:border-primary/50
                  transition-all
                "
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">
                    {trait.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {trait.description}
                </p>

                {/* Subtle wave underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="h-[2px] mt-4 bg-gradient-to-r from-primary/60 via-secondary/40 to-transparent rounded-full"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DataDNA;
