import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Mock onboarding steps JSON
const steps = [
  { id: 1, label: "Contract Signed", status: "complete" },
  { id: 2, label: "Hardware Shipped", status: "in-progress" },
  { id: 3, label: "Account Provisioned", status: "pending" },
  { id: 4, label: "Orientation Scheduled", status: "pending" },
];

const features = [
  {
    title: "Automated Workflows",
    text: "Trigger smart sequences for contracts, IT access, and HR tasks automatically.",
    icon: "⚡",
  },
  {
    title: "Talent Dashboard",
    text: "Track progress in real time with a single source of truth for every hire.",
    icon: "📊",
  },
  {
    title: "Smart Notifications",
    text: "Never miss deadlines — alerts route to the right owner instantly.",
    icon: "🔔",
  },
];

// Navbar with glassmorphism + floating pill on scroll
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 px-6 py-3 rounded-full border border-white/10 backdrop-blur-lg bg-white/5 transition-all ${
        scrolled ? "shadow-xl shadow-black/40" : ""
      }`}
    >
      <div className="flex items-center gap-6 text-sm text-white/80">
        <span className="font-semibold tracking-tight">Hire Me</span>
        <div className="flex gap-4">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#stories" className="hover:text-white">Stories</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="pt-32 pb-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-5xl sm:text-6xl font-bold tracking-tight"
      >
        <span className="bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
          Recruiting that feels automatic.
        </span>
      </motion.h1>

      <p className="mt-6 text-white/70 max-w-2xl mx-auto">
        Hire Me is the automated onboarding platform for scaling teams — faster, simpler, and human.
      </p>

      {/* Floating dashboard preview */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 80 }}
        className="mt-14 mx-auto w-full max-w-4xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl shadow-black/50 p-6"
      >
        <div className="h-64 w-full rounded-xl bg-linear-to-br from-slate-900 to-slate-800 grid place-content-center text-white/60">
          <span className="text-sm">Placeholder dashboard preview (SVG / image here)</span>
        </div>
      </motion.div>
    </section>
  );
}

// Feature Cards
function Features() {
  return (
    <section id="features" className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl p-6 bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/40"
          >
            <div className="text-3xl mb-4 drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
              {f.icon}
            </div>
            <h3 className="font-semibold tracking-tight mb-2">{f.title}</h3>
            <p className="text-white/70 text-sm">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Success Stories Marquee
function SuccessStories() {
  return (
    <section id="stories" className="py-20 overflow-hidden">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="flex gap-10 text-white/80 whitespace-nowrap"
      >
        {["Onboarded 120 hires in 2 weeks", "Reduced time-to-hire by 45%", "Zero IT delays", "Candidates rated experience 4.9/5"].map(
          (s) => (
            <span key={s} className="text-sm">
              {s}
            </span>
          )
        )}
      </motion.div>
    </section>
  );
}

// Onboarding Steps Preview
function Steps() {
  return (
    <section className="py-16">
      <h2 className="text-xl font-semibold tracking-tight mb-6">Onboarding Status</h2>
      <div className="space-y-3">
        {steps.map((s) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 py-3 px-4"
          >
            <span>{s.label}</span>
            <span className="text-xs uppercase text-white/60">{s.status}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-16 text-white/60 text-sm" id="contact">
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© 2026 Hire Me — Automated Onboarding Platform</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white font-inter px-6">
      <Navbar />
      <Hero />
      <Features />
      <SuccessStories />
      <Steps />
      <Footer />
    </div>
  );
}

