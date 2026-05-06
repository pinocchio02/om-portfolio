import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Award, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Data Engineer Intern",
    company: "Genaiology · Remote, USA",
    period: "Feb 2026 – May 2026",
    description: [
      "Engineered automated AWS data pipelines (Python/S3), consolidating 150,000+ partitioned records and reducing processing time and cloud costs by >90%.",
      "Developed autonomous Agentic AI workflows (AWS Bedrock) for Houston Public Works, enabling instant natural-language querying across massive SCADA and ICM datasets.",
      "Designed Retrieval-Augmented Generation (RAG) architectures, empowering AI agents to autonomously map complex database schemas and dynamically generate optimized SQL queries for Amazon Redshift.",
    ],
    type: "experience",
  },
  {
    title: "AI intern",
    company: "Molmeh Technolabs · On-site, India",
    period: "Jan 2024 - April 2024",
    description: [
      "Engineered 'Document Insights using Generative AI' platform using Python, Django, PostgreSQL, and BambooLLM.",

      "Improved retrieval efficiency by 30% across 100,000+ documents through optimized real-time querying.",

      "Deployed the solution in collaboration with cross-functional teams, enabling faster and more accurate decision-making."
    ],
    type: "experience",
  },
  {
    title: "AI Intern",
    company: "Durian Pvt. Ltd. · On-site, India",
    period: "Jul 2023 - Aug 2023",
    description: [
      "Achieved 99.38% accuracy on Labeled Faces in the Wild benchmark using the dlib face recognition model, demonstrating advanced expertise in AI-based facial recognition.",
      "Integrated OpenCV for real-time webcam interaction, enabling dynamic and interactive model demonstrations."
    ],
    type: "experience",
  },
];

const certifications = [
  {
    name: "Building AI Powered Chatbots Without Programming",
    issuer: "IBM (via Coursera)",
    year: "April 2024",
  },
  {
    name: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM (via Coursera)",
    year: "April 2024",
  },
  {
    name: "Generative AI: Introduction and Applications",
    issuer: "IBM (via Coursera)",
    year: "Mar 2024",
  },
  {
    name: "IBM: Introduction to Artificial Intelligence",
    issuer: "IBM (via Coursera)",
    year: "Mar 2024",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text pb-1">
            Experience & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">Hands-on industry experience and professional certifications highlighting my work in AI, 
machine learning, and real-world system development.
</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Professional Journey</h3>
            </div>

            <div className="space-y-6 relative pl-8 border-l-2 border-primary/30">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-background glow-border"></div>

                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:glow-border">
                    <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                      <h4 className="text-xl font-bold">{exp.title}</h4>
                      <Badge variant="skill" className="text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    {Array.isArray(exp.description) ? (
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {exp.description.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">{exp.description}</p>
                    )}

                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2">{cert.name}</h4>
                      <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                    </div>
                    <Badge variant="skill" className="text-xs">
                      {cert.year}
                    </Badge>
                  </div>

                  {/* Decorative Badge Icon */}
                  <div className="mt-4 flex items-center gap-2 text-primary text-sm">
                    <Award className="h-4 w-4" />
                    <span className="font-medium">Certified Professional</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
