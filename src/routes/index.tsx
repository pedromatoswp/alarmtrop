import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Shield,
  Bell,
  Cctv,
  Cloud,
  Smartphone,
  Zap,
  Siren,
  Wrench,
  Settings,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ChevronDown,
  Menu,
  X,
  CheckCircle2,
  Clock,
  Users,
  Sparkles,
  Radio,
  Eye,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

import heroImg from "@/assets/hero-monitoring.jpg";
import aboutImg from "@/assets/about-team.jpg";
import logoAsset from "@/assets/alarmetrop-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SecurityService",
          name: "Alarmetrop Ltda",
          image: "/favicon.ico",
          telephone: "+55 11 3966-5499",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Adelino Cardana, 293 — Sala 1708",
            postalCode: "06401-147",
            addressCountry: "BR",
          },
          areaServed: "Brasil",
          description:
            "Segurança eletrônica, monitoramento 24h, alarmes, câmeras e cerca elétrica para empresas, condomínios e residências.",
        }),
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/551139665499?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20da%20Alarmetrop.";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Differentials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

/* ---------- NAVBAR ---------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-light shadow-[0_4px_20px_-8px_rgba(0,63,125,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8 md:py-4">
        <a href="#inicio" className="flex items-center gap-2.5 shrink-0">
          <Logo scrolled={scrolled} />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-sm font-medium transition-colors hover:text-brand ${
                scrolled ? "text-ink" : "text-white/90"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-brand transition-transform hover:scale-[1.03]"
          >
            Solicitar Orçamento
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className={`md:hidden rounded-lg p-2 ${scrolled ? "text-ink" : "text-white"}`}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-light border-t border-border/60 px-4 py-4">
          <div className="flex flex-col gap-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-accent"
              >
                {n.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo({ scrolled = true }: { scrolled?: boolean }) {
  return (
    <div className={`rounded-xl transition-all ${scrolled ? "" : "bg-white/95 px-2 py-1 shadow-brand"}`}>
      <img
        src={logoAsset.url}
        alt="Alarmetrop — Sistemas de segurança"
        className="h-9 w-auto md:h-10"
      />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <img
          src={heroImg}
          alt="Central de monitoramento Alarmetrop"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-dark/90 via-brand-dark/70 to-black/85" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(74,158,255,0.25),transparent_60%)]" />

      <motion.div
        style={{ opacity }}
        className="relative mx-auto w-full max-w-7xl px-4 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-emerald-400" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Central Ativa · Monitoramento 24/7
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Sua segurança{" "}
          <span className="text-white" style={{ textShadow: "0 0 40px rgba(107,179,255,0.5), 0 0 80px rgba(107,179,255,0.25)" }}>monitorada 24 horas</span>{" "}
          por dia.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          A Alarmetrop oferece soluções completas em segurança eletrônica,
          monitoramento inteligente, instalação de alarmes, câmeras, gravação em
          nuvem e suporte especializado para empresas, condomínios e residências.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-dark shadow-brand transition-transform hover:scale-[1.03]"
          >
            Solicitar Orçamento
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 glass px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {[
            { v: "24/7", l: "Monitoramento" },
            { v: "+15", l: "Anos de mercado" },
            { v: "100%", l: "Central própria" },
            { v: "5min", l: "Tempo de resposta" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                {s.v}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em]">Role para explorar</span>
          <ChevronDown className="h-5 w-5 animate-scroll-hint" />
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-brand-soft blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-brand">
              <img
                src={aboutImg}
                alt="Instalação profissional de câmera de segurança"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1200}
                height={900}
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl glass px-5 py-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold">Equipe certificada</div>
                    <div className="text-xs text-white/70">Instalação e manutenção especializadas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div>
            <SectionTag>Sobre a Alarmetrop</SectionTag>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
              Tecnologia de ponta a{" "}
              <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">
                serviço da sua proteção
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              A Alarmetrop é especializada em soluções de segurança eletrônica
              para empresas, condomínios e residências. Trabalhamos com
              tecnologia de ponta, monitoramento inteligente e atendimento
              especializado para proteger pessoas e patrimônios com eficiência e
              confiabilidade.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: Shield, t: "Proteção total" },
                { icon: Radio, t: "Central 24h" },
                { icon: Users, t: "Time especializado" },
                { icon: Sparkles, t: "Tecnologia atual" },
              ].map(({ icon: Icon, t }) => (
                <div
                  key={t}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-brand-soft text-brand">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-sm font-semibold text-ink">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
const SERVICES = [
  {
    icon: Bell,
    title: "Alarmes Monitorados",
    desc: "Instalação completa de sistemas de alarme com monitoramento remoto pela nossa central.",
  },
  {
    icon: Cctv,
    title: "Monitoramento de Câmeras",
    desc: "Vigilância remota realizada por central especializada, 24 horas por dia.",
  },
  {
    icon: Cloud,
    title: "Gravação em Nuvem",
    desc: "Armazenamento seguro das imagens em nuvem, com acesso rápido a qualquer momento.",
  },
  {
    icon: Smartphone,
    title: "Câmeras Online",
    desc: "Câmeras com acesso remoto pelo celular ou computador, onde você estiver.",
  },
  {
    icon: Zap,
    title: "Cerca Elétrica",
    desc: "Projeto, instalação e manutenção de cercas elétricas de alta performance.",
  },
  {
    icon: Siren,
    title: "Apoio em Ocorrências",
    desc: "Verificação das imagens e suporte imediato em caso de disparo do alarme.",
  },
  {
    icon: Wrench,
    title: "Manutenção Preventiva",
    desc: "Revisões periódicas em alarmes, câmeras e cercas elétricas para máxima confiabilidade.",
  },
  {
    icon: Settings,
    title: "Manutenção Corretiva",
    desc: "Atendimento técnico rápido para correção de falhas e substituição de equipamentos.",
  },
];

function Services() {
  return (
    <section id="servicos" className="relative bg-mist py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionTag>Nossos serviços</SectionTag>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
              Soluções completas em{" "}
              <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">
                segurança eletrônica
              </span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Da instalação ao suporte contínuo — tudo o que sua empresa,
              condomínio ou residência precisa em um único lugar.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof Bell;
  title: string;
  desc: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-brand"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgba(0,90,174,0.08), transparent 60%)",
        }}
      />
      <div className="relative">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-brand transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="h-5.5 w-5.5" />
        </div>
        <h3 className="mt-5 font-display text-lg font-bold text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {desc}
        </p>
        <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-brand">
          <MessageCircle className="h-3.5 w-3.5" />
          Saiba mais no WhatsApp
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
}

/* ---------- HOW IT WORKS ---------- */
const STEPS = [
  { icon: Wrench, title: "Instalação", desc: "Equipamentos configurados no local" },
  { icon: Settings, title: "Configuração", desc: "Sistema integrado à central" },
  { icon: Eye, title: "Monitoramento", desc: "Vigilância contínua 24h" },
  { icon: Siren, title: "Disparo do Alarme", desc: "Detecção imediata" },
  { icon: Cctv, title: "Verificação", desc: "Análise das câmeras em tempo real" },
  { icon: PhoneCall, title: "Contato com o Cliente", desc: "Ação e suporte especializado" },
];

function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,90,174,0.35),transparent_60%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionTag dark>Como funciona</SectionTag>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Do primeiro contato à{" "}
              <span className="text-gradient-brand">resposta imediata</span>
            </h2>
            <p className="mt-4 text-base text-white/70">
              Um processo transparente e eficiente, do primeiro clique à
              proteção contínua do seu patrimônio.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 relative">
          {/* connecting line - desktop */}
          <div className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-brand to-transparent" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-brand shadow-brand">
                    <s.icon className="h-7 w-7 text-white" />
                    <span className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-white text-[11px] font-bold text-brand-dark">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-sm font-bold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- DIFFERENTIALS ---------- */
const DIFFERENTIALS = [
  { icon: Users, title: "Atendimento especializado", desc: "Consultores prontos para entender sua necessidade." },
  { icon: Clock, title: "Monitoramento 24 horas", desc: "Nossa central nunca dorme, sua tranquilidade também não." },
  { icon: Cloud, title: "Gravação em nuvem", desc: "Imagens seguras e acessíveis a qualquer momento." },
  { icon: Shield, title: "Equipe qualificada", desc: "Técnicos treinados e certificados no setor." },
  { icon: Sparkles, title: "Tecnologia moderna", desc: "Equipamentos das principais marcas do mercado." },
  { icon: Zap, title: "Resposta rápida", desc: "Ação imediata em caso de ocorrência." },
];

function Differentials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionTag>Diferenciais</SectionTag>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
              Por que escolher a{" "}
              <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">
                Alarmetrop
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-brand">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gradient-brand-soft opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white shadow-brand">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-bold text-ink">
                      {d.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {d.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionTag>Contato</SectionTag>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
              Fale com a nossa equipe
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Solicite um orçamento sem compromisso. Respondemos rapidamente.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-8 shadow-[0_10px_40px_-20px_rgba(0,63,125,0.2)]">
              <ContactRow
                icon={MapPin}
                title="Endereço"
                lines={["Rua Adelino Cardana, 293 — Sala 1708", "CEP 06401-147"]}
              />
              <ContactRow
                icon={MessageCircle}
                title="WhatsApp"
                lines={["(11) 3966-5499"]}
                href={WHATSAPP_URL}
              />
              <ContactRow
                icon={Phone}
                title="Telefone"
                lines={["(11) 3966-5499"]}
                href="tel:+551139665499"
              />
              <ContactRow
                icon={Mail}
                title="E-mail"
                lines={["roberto@alarmetrop.com.br", "alarmetrop@alarmetrop.com.br"]}
                href="mailto:roberto@alarmetrop.com.br"
              />

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-4 text-sm font-semibold text-white shadow-brand transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                Fale Conosco pelo WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-full min-h-[420px] overflow-hidden rounded-3xl border border-border shadow-[0_10px_40px_-20px_rgba(0,63,125,0.2)]">
              <iframe
                title="Localização Alarmetrop"
                src="https://www.google.com/maps?q=Rua+Adelino+Cardana+293+Barueri&output=embed"
                className="h-full w-full min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: typeof Phone;
  title: string;
  lines: string[];
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl p-4 transition-colors hover:bg-accent">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand-soft text-brand">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </div>
        {lines.map((l) => (
          <div key={l} className="text-sm font-medium text-ink">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink py-14 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,90,174,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-xl bg-white/95 px-2.5 py-1.5">
              <img
                src={logoAsset.url}
                alt="Alarmetrop"
                className="h-10 w-auto"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Segurança eletrônica com monitoramento 24 horas para empresas,
              condomínios e residências.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Empresa
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>Alarmetrop Ltda</li>
              <li>CNPJ 58.720.152/0001-49</li>
              <li>Rua Adelino Cardana, 293 — Sala 1708</li>
              <li>CEP 06401-147</li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Navegação
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-brand">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <div className="text-xs text-white/50">
            © {new Date().getFullYear()} Alarmetrop Ltda. Todos os direitos reservados.
          </div>
          <div className="text-xs text-white/50">
            CNPJ 58.720.152/0001-49
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- WHATSAPP FLOAT ---------- */
function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping-slow opacity-40" />
      <MessageCircle className="relative h-6 w-6" fill="currentColor" fillOpacity={0.15} />
    </a>
  );
}

/* ---------- HELPERS ---------- */
function SectionTag({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] ${
        dark
          ? "border-white/15 bg-white/5 text-white/80"
          : "border-brand/20 bg-gradient-brand-soft text-brand-dark"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-brand" : "bg-brand"}`} />
      {children}
    </span>
  );
}

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
