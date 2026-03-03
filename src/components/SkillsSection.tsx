import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Wrench } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React.JS", "Next.js", "JavaScript", "TypeScript", "SASS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.JS", "SQL", "NoSQL"],
  },
  {
    title: "Ferramentas",
    icon: Wrench,
    skills: ["Git", "GitHub"],
  },
];

const SkillsSection = () => (
  <section id="competencias" className="py-24 px-4 bg-secondary/30">
    <div className="mx-auto max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center text-3xl font-bold sm:text-4xl"
      >
        Competê<span className="text-gradient">ncias</span>
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm transition-colors hover:border-primary/30">
              <CardHeader className="flex-row items-center gap-3 space-y-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <cat.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{cat.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="font-mono text-xs">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
