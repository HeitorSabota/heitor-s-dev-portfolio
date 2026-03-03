import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Marketplace",
    description: "Plataforma de e-commerce estilo Mercado Livre com listagem de produtos, carrinho de compras e sistema de busca.",
    tags: ["React.JS", "Next.js", "TypeScript", "NoSQL"],
    demo: "#",
    repo: "#",
  },
  {
    title: "API Backend",
    description: "API RESTful robusta construída com Express para gerenciamento de dados com autenticação e validação.",
    tags: ["Node.JS", "Express", "SQL", "TypeScript"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Painel administrativo com visualização de dados em tempo real, gráficos interativos e relatórios.",
    tags: ["React.JS", "TypeScript", "SASS", "Node.JS"],
    demo: "#",
    repo: "#",
  },
];

const ProjectsSection = () => (
  <section id="projetos" className="py-24 px-4">
    <div className="mx-auto max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center text-3xl font-bold sm:text-4xl"
      >
        Meus <span className="text-gradient">Projetos</span>
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="flex h-full flex-col border-border/50 bg-card/50 backdrop-blur-sm transition-colors hover:border-primary/30">
              <div className="h-40 rounded-t-lg bg-gradient-to-br from-primary/20 via-accent/10 to-secondary flex items-center justify-center">
                <span className="font-mono text-2xl text-muted-foreground/50">{"{ }"}</span>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-mono text-[10px]">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter className="mt-auto gap-2">
                <Button size="sm" variant="outline" className="gap-1.5" asChild>
                  <a href={project.demo}>
                    <ExternalLink className="h-3.5 w-3.5" /> Demo
                  </a>
                </Button>
                <Button size="sm" variant="ghost" className="gap-1.5" asChild>
                  <a href={project.repo}>
                    <Github className="h-3.5 w-3.5" /> Código
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
