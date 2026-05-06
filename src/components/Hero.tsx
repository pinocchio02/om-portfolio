import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePic from "@/assets/profile.jpeg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Tech Stack", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience & Certifications", id: "experience" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Data visualization background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 data-grid opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        {/* HERO HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground/90 glow-text"
            animate={{
              textShadow: [
                "0 0 12px rgba(0,255,255,0.25)",
                "0 0 22px rgba(0,255,255,0.4)",
                "0 0 12px rgba(0,255,255,0.25)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Turning data into insight,
            <br />
            <span className="gradient-text opacity-95">
              and insight into impact.
            </span>
          </motion.h1>
        </motion.div>

        {/* ABOUT BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto"
        >
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl" />
              <img
                src={profilePic}
                alt="Om Ramani"
                className="
                  relative
                  w-72 h-80
                  object-cover
                  rounded-2xl
                  border
                  border-primary/30
                "
              />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Om Ramani
              </h2>
              <p className="text-xl text-muted-foreground">
                AI / ML & Data Science Enthusiast
              </p>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              I’m a Msc computer science student who enjoys working at the intersection of data, models, and real-world deployment. From training deep learning models to building end-to-end ML pipelines, I focus on creating solutions that are practical, measurable, and production-ready!
            </p>

            <div className="mt-">
              <a
                href="/Om_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="
                    bg-primary
                    text-primary-foreground
                    font-semibold
                    tracking-wide
                    px-6
                    py-4
                    rounded-xl
                    shadow-lg
                    shadow-primary/30
                    hover:shadow-primary/50
                    transition-all
                  "
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </a>
            </div>

          </div>
        </motion.div>

        {/* NAVIGATION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {navItems.map((item) => (
            <Button
              key={item.id}
              size="lg"
              variant="outline"
              onClick={() => scrollToSection(item.id)}
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              {item.label}
            </Button>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default Hero;
