import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type EducationItem = {
    institution: string;
    degree: string;
    major: string;
    year: string;
    gpa: string;
};

const education: EducationItem[] = [
    {
        institution: "University of Texas at Arlington",
        degree: "Master of Science",
        major: "Computer Science",
        year: "2024 – 2026",
        gpa: "GPA: 3.8 / 4.00",
    },
    {
        institution: "Gandhinagar Institute of Technology",
        degree: "Bachelor of Technology",
        major: "Information Technology",
        year: "2020 – 2024",
        gpa: "CGPA: 8.38 / 10.00",
    },
];

const Education = () => {
    return (
        <section id="education" className="py-20 relative">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text pb-1">
                        Education
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
                        Built a solid computer science foundation through rigorous coursework and continuous hands-on learning in AI and data technologies.
                    </p>
                </motion.div>

                {/* Education Cards */}
                <div className="max-w-3xl mx-auto space-y-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                        >
                            <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                                <h3 className="text-xl font-bold">{edu.institution}</h3>
                                <Badge variant="skill" className="text-xs">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    {edu.year}
                                </Badge>
                            </div>

                            <p className="text-primary font-medium">
                                {edu.degree}
                            </p>

                            <p className="text-muted-foreground">
                                Major: <span className="font-medium">{edu.major}</span>
                            </p>

                            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                                <GraduationCap className="h-4 w-4 text-primary" />
                                <span>{edu.gpa}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
