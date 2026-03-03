import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--muted)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--muted)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-sm text-primary"
        >
          {"// Olá, eu sou"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          Heitor <span className="text-gradient">Martins</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-2 font-mono text-lg text-primary sm:text-xl"
        >
          Programador Fullstack
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mb-8 max-w-lg text-muted-foreground"
        >
          Desenvolvendo soluções web completas com foco em performance, usabilidade e código limpo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <Button size="lg" onClick={() => scrollTo("#contato")} className="glow-primary gap-2">
            <Mail className="h-4 w-4" /> Entre em contato
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollTo("#projetos")}>
            Ver projetos
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16"
        >
          <button onClick={() => scrollTo("#sobre")} className="animate-bounce text-muted-foreground">
            <ArrowDown className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
