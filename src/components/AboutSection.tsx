import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AboutSection = () => (
  <section id="sobre" className="py-24 px-4">
    <div className="mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
          Sobre <span className="text-gradient">Mim</span>
        </h2>

        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <Avatar className="h-32 w-32 shrink-0 border-2 border-primary/30 text-3xl">
            <AvatarFallback className="bg-secondary text-foreground font-mono font-bold">HM</AvatarFallback>
          </Avatar>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Sou um desenvolvedor fullstack apaixonado por criar aplicações web modernas e eficientes.
              Com experiência tanto no frontend quanto no backend, busco sempre entregar soluções completas
              que unem design funcional com código robusto.
            </p>
            <p>
              Trabalho com tecnologias como <span className="text-foreground font-medium">React.JS</span>,{" "}
              <span className="text-foreground font-medium">Next.js</span>,{" "}
              <span className="text-foreground font-medium">Node.JS</span> e bancos de dados{" "}
              <span className="text-foreground font-medium">SQL/NoSQL</span>, sempre focando em boas práticas,
              performance e experiência do usuário.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
