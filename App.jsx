import {
  ArrowRight, ShieldCheck, Users, Settings, KeyRound, Bot, CheckCircle2,
  Network, Sparkles, LockKeyhole, Menu, X
} from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    icon: Users,
    title: 'IAM Consulting',
    text: 'Strategy, architecture, implementation and optimization for enterprise identity programs.'
  },
  {
    icon: Settings,
    title: 'Managed Services',
    text: 'Operational support, monitoring, incident handling, enhancements and platform governance.'
  },
  {
    icon: ShieldCheck,
    title: 'Identity Governance',
    text: 'Lifecycle management, access certifications, policy controls, RBAC and compliance reporting.'
  },
  {
    icon: KeyRound,
    title: 'Privileged Access',
    text: 'Secure privileged identities, reduce standing access and strengthen administrative controls.'
  },
  {
    icon: Bot,
    title: 'Machine Identity',
    text: 'Discover, govern and secure service accounts, APIs, bots, workloads and non-human identities.'
  },
  {
    icon: Network,
    title: 'Cloud Identity',
    text: 'Modern identity integrations across Microsoft Entra ID, SaaS, cloud and hybrid environments.'
  }
]

const strengths = [
  'AI-assisted delivery and automation',
  'Human-led governance and accountability',
  'Enterprise-focused security architecture',
  'Flexible project squads and managed support'
]

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="logo-cube" aria-hidden="true"></div>
            <div>
              <div className="text-xl font-extrabold tracking-tight text-navy">NCube Identity</div>
              <div className="text-[10px] font-bold uppercase tracking-[.22em] text-royal">AI-Powered IAM</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
            <a href="#services" className="hover:text-royal">Services</a>
            <a href="#why" className="hover:text-royal">Why NCube</a>
            <a href="#about" className="hover:text-royal">About</a>
            <a href="#contact" className="rounded-full bg-royal px-5 py-2.5 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700">
              Talk to an Expert
            </a>
          </nav>

          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-200 bg-white px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4 font-semibold">
              <a href="#services" onClick={() => setOpen(false)}>Services</a>
              <a href="#why" onClick={() => setOpen(false)}>Why NCube</a>
              <a href="#about" onClick={() => setOpen(false)}>About</a>
              <a href="#contact" onClick={() => setOpen(false)} className="text-royal">Talk to an Expert</a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white pt-32">
          <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-cyanx glow-orb"></div>
          <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-royal glow-orb"></div>

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-12 lg:grid-cols-2 lg:px-8 lg:pb-32">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-royal shadow-sm">
                <Sparkles size={16} /> AI-Powered Identity & Access Management
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[1.03] tracking-tight text-navy sm:text-6xl">
                Secure every identity.
                <span className="block bg-gradient-to-r from-royal to-cyanx bg-clip-text text-transparent">
                  Empower every business.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                NCube Identity helps enterprises design, implement and operate modern IAM programs across
                workforce, privileged and machine identities.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-royal px-7 py-3.5 font-bold text-white shadow-xl shadow-blue-500/25 hover:bg-blue-700">
                  Book a Discovery Call <ArrowRight size={18} />
                </a>
                <a href="#services" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 font-bold text-navy hover:border-royal hover:text-royal">
                  Explore Services
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-slate-600">
                <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-royal"/> AI-assisted delivery</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-royal"/> Human-led governance</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-royal"/> Enterprise-ready security</span>
              </div>
            </div>

            <div className="relative mx-auto h-[420px] w-full max-w-xl">
              <div className="absolute inset-0 rounded-[2rem] border border-blue-100 bg-white/65 shadow-glow backdrop-blur-xl"></div>
              <div className="grid-bg absolute inset-0 rounded-[2rem] opacity-60"></div>

              <div className="hero-cube absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] bg-gradient-to-br from-royal to-cyanx">
                <div className="absolute inset-5 rounded-[1.4rem] border-4 border-white/80"></div>
                <div className="absolute inset-12 flex items-center justify-center rounded-2xl bg-navy/40">
                  <LockKeyhole className="h-16 w-16 text-white" />
                </div>
              </div>

              <div className="absolute left-6 top-7 rounded-2xl border border-blue-100 bg-white p-4 shadow-lg">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Identity Coverage</p>
                <p className="mt-1 text-2xl font-black text-navy">360°</p>
              </div>

              <div className="absolute bottom-7 right-6 rounded-2xl border border-blue-100 bg-white p-4 shadow-lg">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Operating Model</p>
                <p className="mt-1 font-black text-royal">AI + Human Experts</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <p className="font-bold uppercase tracking-[.2em] text-royal">What we do</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-navy sm:text-5xl">
                End-to-end identity security services
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                From strategy and implementation to ongoing operations, NCube Identity supports the complete IAM lifecycle.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({icon: Icon, title, text}) => (
                <article key={title} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                  <div className="mb-5 inline-flex rounded-2xl bg-blue-50 p-3 text-royal group-hover:bg-royal group-hover:text-white">
                    <Icon size={25}/>
                  </div>
                  <h3 className="text-xl font-extrabold text-navy">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="bg-navy py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="font-bold uppercase tracking-[.2em] text-cyanx">Why NCube Identity</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                AI-powered. Human-driven. Trust-delivered.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100/80">
                We combine automation, deep IAM experience and accountable delivery squads to help clients move faster without compromising governance.
              </p>
            </div>

            <div className="grid gap-4">
              {strengths.map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="rounded-full bg-cyanx/20 p-2 text-cyanx">
                    <CheckCircle2 size={21}/>
                  </div>
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 sm:p-12">
              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <p className="font-bold uppercase tracking-[.2em] text-royal">Our mission</p>
                  <h2 className="mt-3 text-4xl font-black tracking-tight text-navy">
                    Building trust through identity
                  </h2>
                </div>
                <div className="text-lg leading-8 text-slate-600">
                  <p>
                    NCube Identity is focused on helping organizations modernize identity governance, secure access and build resilient IAM operations.
                  </p>
                  <p className="mt-5">
                    Our vision is to protect both human and machine identities through intelligent automation, practical governance and trusted managed services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="pb-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-royal to-blue-700 px-7 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-100">Let's talk identity</p>
                <h2 className="mt-2 text-3xl font-black sm:text-4xl">Ready to strengthen your IAM program?</h2>
                <p className="mt-4 max-w-2xl text-blue-100">
                  Contact NCube Identity for consulting, implementation and managed service discussions.
                </p>
              </div>
              <a href="mailto:contact@ncubeidentity.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-royal shadow-lg lg:mt-0">
                contact@ncubeidentity.com <ArrowRight size={18}/>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} NCube Identity. All rights reserved.</p>
          <p className="font-semibold text-navy">Protect. Govern. Automate.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
