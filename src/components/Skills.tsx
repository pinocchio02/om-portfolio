import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = {
    "Programming Languages": [
        "Python",
        "SQL",
        "R",
        "JavaScript",
        "C",
        "C++",
        "HTML",
        "CSS"
    ],

    "ML & Computer Vision": [
        "YOLOv8",
        "OpenCV",
        "TensorFlow",
        "PyTorch",
        "IBM Watsonx Assistant"
    ],

    "Frameworks & APIs": [
        "React",
        "FastAPI",
        "Flask",
        "Django",
        "Node.js",
        "REST APIs"
    ],

    "Data & Analytics Tools": [
        "Jupyter Notebook",
        "Google Colab",
        "Power BI",
        "Tableau",
        "Postman"
    ],

    "Databases": [
        "MySQL",
        "PostgreSQL",
        "Snowflake"
    ],

    "Cloud & DevOps": [
        "AWS",
        "GCP",
        "Docker",
        "Git"
    ]
};


const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text pb-1">
                        Tech Stack
                    </h2>

                    <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
                        A modern technology stack covering data analysis, machine learning, computer vision, and end-to-end model deployment.
                    </p>

                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(skills).map(([category, items]) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                        >
                            <h3 className="text-xl font-semibold mb-4 capitalize">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <Badge key={skill} variant="skill">
                                        {skill}
                                    </Badge>
                                ))}

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
