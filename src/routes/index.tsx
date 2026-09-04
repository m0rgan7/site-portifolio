import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const projects = [
  {
    year: "2025",
    name: "Pipeline Íris",
    role: "Data Engineering · Airflow + Spark",
    desc: "Pipeline de ingestão de 2TB/dia com Airflow, Spark e Delta Lake. Data quality com Great Expectations e catálogo via OpenMetadata.",
    stack: ["Python", "Spark", "Airflow", "Delta"],
  },
  {
    year: "2025",
    name: "Sentinela ML",
    role: "Machine Learning · MLOps",
    desc: "Modelo de detecção de fraude em tempo real (XGBoost + features via Feast). Deploy com MLflow, monitoramento de drift e retraining automatizado.",
    stack: ["PyTorch", "MLflow", "Feast", "Kafka"],
  },
  {
    year: "2024",
    name: "Muralha SIEM",
    role: "Cybersecurity · Threat Detection",
    desc: "Plataforma de detecção de ameaças com correlação de eventos em Wazuh + ELK, regras Sigma customizadas e resposta automatizada via SOAR.",
    stack: ["Wazuh", "ELK", "Sigma", "Python"],
  },
  {
    year: "2024",
    name: "Nimbus Studio",
    role: "Full-stack · Node + Vite",
    desc: "Painel analítico full-stack com autenticação zero-trust, RBAC granular e dashboards em tempo real sobre um data warehouse ClickHouse.",
    stack: ["Node.js", "React", "ClickHouse"],
  },
];

const stack = [
  "Python", "Java", "JavaScript", "AWS", "Git", "HTML",
  "CSS", "Tanstack", "TailwindCSS", "Docker", "TypeScript", "SpringBoot"
];

function Portfolio() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit"})
      );
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground grain">
      <div className="grain-overlay" aria-hidden />

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-xl font-semibold tracking-tight">
            ateliê<span className="text-ember">.</span>digital
          </a>
          <nav className="hidden md:flex gap-8 text-sm font-mono-ui text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition">01 · Trabalho</a>
            <a href="#about" className="hover:text-foreground transition">02 · Sobre</a>
            <a href="#stack" className="hover:text-foreground transition">03 · Stack</a>
            <a href="#contact" className="hover:text-foreground transition">04 · Contato</a>
          </nav>
          <div className="font-mono-ui text-xs text-muted-foreground tabular-nums">
            SP · {time}<span className="text-ember animate-blink">_</span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="pt-40 pb-24 md:pt-56 md:pb-40 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8 animate-fadeup" style={{ animationDelay: "0.05s" }}>
            <span className="h-2 w-2 rounded-full bg-ember animate-pulse" />
            <span className="font-mono-ui text-xs uppercase tracking-widest text-muted-foreground">
              Disponível para novos projetos · 2026
            </span>
          </div>

          <h1 className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.9] font-normal tracking-tight text-balance animate-fadeup">
            Transformo <em className="text-ember italic font-light">dados</em><br />
            em <span className="underline decoration-ember/60 decoration-[3px] underline-offset-[0.15em]">decisões</span>.
          </h1>

          <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-6 md:col-start-6 text-lg md:text-xl text-muted-foreground max-w-xl text-balance animate-fadeup" style={{ animationDelay: "0.2s" }}>
              Engenheira de dados com foco em{" "}
              <span className="text-foreground">machine learning</span> e{" "}
              <span className="text-foreground">cibersegurança</span> — e full-stack quando o produto pede.
              Pipelines resilientes, modelos observáveis e sistemas que não vazam.
            </p>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border/60 py-6 overflow-hidden bg-secondary/30">
        <div className="flex whitespace-nowrap animate-marquee font-display text-4xl md:text-6xl">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-10 pr-10">
              {["Python", "PySpark", "Airflow", "PyTorch", "MLflow", "Kafka", "Wazuh", "ClickHouse"].map((w) => (
                <span key={w} className="flex items-center gap-10">
                  <span className="text-foreground/90">{w}</span>
                  <span className="text-ember">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* WORK */}
      <section id="work" className="px-6 md:px-10 py-24 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="font-display text-4xl md:text-6xl tracking-tight">
              Trabalhos <em className="text-ember italic font-light">selecionados</em>
            </h2>
            <span className="font-mono-ui text-xs text-muted-foreground hidden md:inline">/ 04 peças</span>
          </div>

          <ul className="border-t border-border">
            {projects.map((p, i) => (
              <li key={p.name} className="group border-b border-border">
                <a
                  href="https://github.com/m0rgan7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid md:grid-cols-12 gap-6 py-8 md:py-12 items-baseline transition-all duration-500 group-hover:pl-4"
                >
                  <div className="md:col-span-1 font-mono-ui text-xs text-muted-foreground">
                    /{String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-3xl md:text-5xl tracking-tight group-hover:text-ember transition-colors">
                      {p.name}
                    </h3>
                    <div className="mt-2 font-mono-ui text-xs text-muted-foreground">
                      {p.role} · {p.year}
                    </div>
                  </div>
                  <p className="md:col-span-5 text-muted-foreground text-balance">{p.desc}</p>
                  <div className="md:col-span-2 flex flex-wrap gap-1.5 md:justify-end">
                    {p.stack.map((s) => (
                      <span key={s} className="font-mono-ui text-[10px] uppercase tracking-wider border border-border px-2 py-1 rounded-full text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-10 py-24 md:py-40 bg-secondary/20 border-y border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden rounded-sm border border-border bg-secondary/30 p-8 flex flex-col justify-between">
              <div className="font-mono-ui text-xs text-muted-foreground">
                // manifest.txt
              </div>
              <div className="font-display text-3xl md:text-4xl leading-tight text-balance">
                <em className="italic text-ember font-light">dado</em> bruto<br />
                → <em className="italic font-light">insight</em><br />
                → <span className="underline decoration-ember/60 decoration-2 underline-offset-4">decisão</span>
              </div>
              <div className="font-mono-ui text-xs text-ember">
                ∎ build 2026
              </div>
            </div>
          </div>

          <div className="md:col-span-7 md:pl-8">
            <span className="font-mono-ui text-xs uppercase tracking-widest text-ember">02 · Sobre</span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight text-balance">
              Código como <em className="italic text-ember font-light">ofício</em>, não como pressa.
            </h2>
            <div className="mt-8 space-y-5 text-lg text-muted-foreground max-w-2xl">
              <p>
                Comecei adolescente automatizando planilhas com <span className="text-foreground">Python</span> e nunca mais parei
                de perseguir o dado. Hoje construo pipelines que movem terabytes, treino modelos que
                aprendem em produção e endureço sistemas contra quem não deveria estar ali.
              </p>
              <p>
                Vivo entre <span className="text-foreground">data engineering</span>,{" "}
                <span className="text-foreground">machine learning</span> e{" "}
                <span className="text-foreground">cibersegurança</span> — com base full-stack sólida para
                entregar da ingestão à interface. Contratos claros, observabilidade cedo, segurança por padrão.
              </p>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-8">
              {[
                { k: "11", l: "anos de código" },
                { k: "40+", l: "projetos entregues" },
                { k: "9", l: "clientes recorrentes" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-5xl text-ember">{s.k}</dt>
                  <dd className="mt-1 font-mono-ui text-xs uppercase tracking-widest text-muted-foreground">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="px-6 md:px-10 py-24 md:py-40">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono-ui text-xs uppercase tracking-widest text-ember">03 · Ferramentas</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight max-w-3xl text-balance">
            A caixa de <em className="italic text-ember font-light">ferramentas</em> que uso todos os dias.
          </h2>

          <div className="mt-16 flex flex-wrap gap-3">
            {stack.map((s, i) => (
              <span
                key={s}
                className="font-display text-2xl md:text-3xl px-5 py-2 rounded-full border border-border hover:border-ember hover:text-ember hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-6">
            {[
              { t: "Data Engineering", d: "Airflow, Spark, Delta Lake, Kafka. Pipelines idempotentes com data quality e catálogo." },
              { t: "Machine Learning", d: "PyTorch, scikit-learn, MLflow, Feast. Do notebook ao endpoint monitorado, com controle de drift." },
              { t: "Cybersecurity", d: "SIEM com Wazuh/ELK, regras Sigma, threat hunting, hardening e resposta a incidentes." },
              { t: "Full-stack", d: "React + TypeScript com back-ends em Python/Node. Interfaces que respeitam o dado por trás." },
              { t: "Infra & Cloud", d: "Docker, Kubernetes e AWS. IaC, observabilidade e custo consciente desde o dia zero." },
              { t: "Segurança por padrão", d: "Zero-trust, secret management, threat modeling e revisão de código orientada a risco." },
            ].map((c) => (
              <article key={c.t} className="p-8 rounded-lg border border-border bg-card hover:bg-secondary transition-colors">
                <div className="font-mono-ui text-xs text-ember mb-3">/{c.t.toLowerCase().replace(/\s+/g, "-")}</div>
                <h3 className="font-display text-2xl mb-2">{c.t}</h3>
                <p className="text-muted-foreground text-sm">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-10 py-24 md:py-40 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-mono-ui text-xs uppercase tracking-widest text-ember">04 · Vamos conversar</span>
          <h2 className="mt-6 font-display text-[clamp(3rem,10vw,10rem)] leading-[0.9] tracking-tight text-balance">
            Tem uma <em className="italic text-ember font-light">ideia</em>?<br />
            <span className="underline decoration-ember/60 decoration-[3px] underline-offset-[0.12em]">Vamos construir.</span>
          </h2>

          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-12 font-mono-ui text-lg md:text-xl px-8 py-4 rounded-full bg-ember text-ink hover:bg-foreground transition-colors"
          >
            ola@atelie.digital →
          </a>

          <div className="mt-16 flex justify-center gap-8 font-mono-ui text-sm text-muted-foreground">
            <a href="https://github.com/m0rgan7" target="_blank" rel="noopener noreferrer" className="hover:text-ember">GitHub</a>
            <a href="https://linkedin.com/in/lavínia-melo-735a4a2a9/" target="_blank" rel="noopener noreferrer" className="hover:text-ember">LinkedIn</a>
            <a href="#" className="hover:text-ember">Read.cv</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 md:px-10 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 font-mono-ui text-xs text-muted-foreground">
          <div>© 2026 · Ateliê Digital · Dados, ML & segurança</div>
          <div>Latitude −23.55 · Longitude −46.63</div>
        </div>
      </footer>
    </div>
  );
}