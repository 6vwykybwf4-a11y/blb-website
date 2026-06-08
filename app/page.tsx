import Image from "next/image";
import ContactForm from "./components/ContactForm";

const services = [
  {
    title: "Paintless Dent Repair",
    text: "Fast, efficient dent removal for qualifying damage with minimal downtime and clean finishes.",
  },
  {
    title: "Hail Damage Repair",
    text: "Scalable CAT and high-volume hail repair support for individual vehicles, fleets, and storm-response surges.",
  },
  {
    title: "Claims Management",
    text: "Insurance-aligned estimating, supplement handling, documentation, and repair process support.",
  },
  {
    title: "Fleet Services",
    text: "Vehicle repair, maintenance coordination, and pickup/delivery support for commercial and government fleets.",
  },
];

const differentiators = [
  "Integrated repair + claims + logistics model",
  "Storm response ready for hail CAT demand",
  "Insurance-aligned operations and supplementing",
  "Mobile and fleet-focused service delivery",
];

const targetClients = [
  "Federal, State & Local Government Agencies",
  "Municipal Fleet Departments",
  "Law Enforcement & Emergency Services",
  "School Districts",
  "Utility & Commercial Fleets",
];

const naicsDelayClasses = [
  "delay-0",
  "delay-100",
  "delay-200",
  "delay-300",
  "delay-500",
  "delay-700",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-2 shadow-lg shadow-slate-950/40 backdrop-blur-sm">
              <Image
                src="/logo.png"
                alt="Brothers Legacy Blueprint Logo"
                width={220}
                height={220}
                className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                priority
              />
            </div>

            <div>
              <div className="text-3xl font-black leading-none tracking-tight text-white sm:text-4xl">
                BLB
              </div>
              <div className="mt-1 text-[10px] font-semibold tracking-[0.22em] text-slate-300 sm:text-[11px] sm:tracking-[0.28em]">
                BROTHERS LEGACY BLUEPRINT, LLC
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                DBA Car Dents
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-300">
            <a href="#capabilities" className="hover:text-white transition">
              Capabilities
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#strengths" className="hover:text-white transition">
              Strengths
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="ml-6 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:bg-slate-200 transition"
          >
            Request Capability Review
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-950 px-6 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.25),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#60a5fa_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="blueprint-drift absolute right-0 top-0 h-full w-1/2 opacity-[0.16]">
          <div className="absolute inset-0 [background-image:linear-gradient(135deg,transparent_0%,transparent_48%,#60a5fa_49%,transparent_50%,transparent_100%),linear-gradient(45deg,transparent_0%,transparent_48%,#60a5fa_49%,transparent_50%,transparent_100%)] [background-size:160px_160px]" />
          <div className="absolute right-20 top-20 h-64 w-64 rounded-full border border-blue-300/30" />
          <div className="absolute right-44 top-44 h-40 w-40 rounded-full border border-blue-300/20" />
          <div className="absolute right-10 bottom-20 h-px w-96 rotate-[-18deg] bg-blue-300/30" />
          <div className="absolute right-32 bottom-40 h-px w-80 rotate-[24deg] bg-blue-300/20" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-blue-400">
              Brothers Legacy Blueprint, LLC
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
              Building Legacy.
              <br />
              Creating Impact.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Auto body repair, hail damage restoration, claims management, fleet
              services, and government contracting support designed for
              performance, scalability, and fast response across DFW and North
              Texas.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Request Opportunity
              </a>

              <a
                href="/brothers-legacy-blueprint-capability-statement.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/20 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Download Capability Statement
              </a>
            </div>
          </div>

          <div className="glow-pulse absolute -right-20 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="absolute right-10 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-blue-400/10 blur-2xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-300">
              NAICS Codes
            </p>

            <div className="mt-5 h-px bg-white/20" />

            <div className="mt-6 space-y-5">
              {[
                ["811121", "Automotive Body, Paint, and Interior Repair"],
                ["811122", "Automotive Glass Replacement & Repair"],
                ["524291", "Claims Adjusting"],
                ["488490", "Other Support Activities for Road Transportation"],
              ].map(([code, label], i) => (
                <div
                  key={code}
                  className={[
                    "group flex gap-5 rounded-2xl border border-white/10 bg-slate-950/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40",
                    "opacity-0 translate-y-5 animate-fade-up",
                    naicsDelayClasses[i] ?? "delay-0",
                  ].join(" ")}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-blue-400/50 bg-blue-500/10 text-2xl transition duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-400/30">
                    {code === "811121" && "🚗"}
                    {code === "811122" && "🛠️"}
                    {code === "524291" && "📋"}
                    {code === "488490" && "🛣️"}
                  </div>

                  <div>
                    <div className="text-2xl font-black text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                      {code}
                    </div>
                    <div className="mt-1 text-sm leading-6 text-slate-300">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900 px-6 py-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {[
            ["Primary NAICS", "811121"],
            ["Service Area", "DFW & North Texas"],
            ["Experience", "Since 1999"],
            ["Positioning", "Govt/Fleet Ready"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg"
            >
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
                {label}
              </div>
              <div className="mt-3 text-2xl font-black text-white">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="capabilities"
        className="relative overflow-hidden bg-slate-900 px-6 py-24 text-white"
      >
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#60a5fa_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -left-20 top-1/3 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
            Core Capabilities
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            Structured support for agencies, fleets, and contracting partners.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.07]"
              >
                <h3 className="text-xl font-black text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.18),transparent_55%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 shadow-2xl backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
              About BLB
            </p>
            <h2 className="mt-4 text-4xl font-black">
              A name built on family, craftsmanship, and trust.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Brothers Legacy Blueprint, LLC, DBA Car Dents, was founded on the
              belief that quality vehicle repair and operational reliability go
              hand in hand. Rooted in decades of hands-on industry experience,
              BLB brings a disciplined, blueprint-driven approach to every job,
              from single-vehicle restorations to large-scale fleet and
              storm-response operations.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Our work is positioned for the standards of public-sector and
              commercial contracting: clear documentation, accountable
              communication, and dependable turnaround.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 shadow-2xl backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
              Government Ready
            </p>
            <h2 className="mt-4 text-4xl font-black">
              Built for serious contracting conversations.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              BLB is positioned to support public-sector and fleet-focused
              opportunities through clear capabilities, disciplined
              presentation, and responsive operational support.
            </p>
            <ul className="mt-6 space-y-3 text-base leading-7 text-slate-300">
              <li>• Family-owned business established in 2010</li>
              <li>• Industry experience since 1999</li>
              <li>• Mobile service with pickup and delivery support</li>
              <li>• Insurance-aligned estimating and supplementing</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="strengths"
        className="relative overflow-hidden bg-slate-900 px-6 py-24 text-white"
      >
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#60a5fa_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
            Differentiators
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            Built for reliability, documentation, and operational response.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {differentiators.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-blue-400/40"
              >
                <div className="text-3xl font-black text-blue-400">✓</div>
                <p className="mt-4 font-bold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 shadow-2xl backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
              Target Clients
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Positioned for fleet, agency, and public-sector opportunities.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {targetClients.map((client) => (
                <div
                  key={client}
                  className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-sm font-semibold text-slate-200"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 shadow-2xl backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
              Company Snapshot
            </p>
            <div className="mt-8 space-y-5 text-slate-300">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Business Structure
                </div>
                <div className="mt-1 text-lg font-bold text-white">LLC</div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  DBA
                </div>
                <div className="mt-1 text-lg font-bold text-white">Car Dents</div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Small Business Status
                </div>
                <div className="mt-1 text-lg font-bold text-white">Yes</div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  UEI / CAGE
                </div>
                <div className="mt-1 text-lg font-bold text-white">
                  To Be Assigned
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
              Request Information
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Submit a fleet, agency, or contracting opportunity.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Contact Brothers Legacy Blueprint, LLC for vehicle repair support,
              hail response, claims management, fleet service coordination, or
              government contracting conversations.
            </p>

            <div className="mt-10 space-y-5 text-slate-300">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                  Phone
                </div>
                <a
                  href="tel:+19728960126"
                  className="mt-1 inline-block text-2xl font-bold text-white hover:text-blue-300 transition"
                >
                  972.896.0126
                </a>
              </div>

              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                  Email
                </div>
                <a
                  href="mailto:Mikal.sanchez@brotherslegacyblueprint.com"
                  className="mt-1 inline-block text-xl font-bold text-white hover:text-blue-300 transition break-all"
                >
                  Mikal.sanchez@brotherslegacyblueprint.com
                </a>
              </div>

              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                  Location
                </div>
                <div className="mt-1 text-xl font-bold text-white">
                  2045 Forest Lane, Ste 160 • Garland, TX 75042
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 px-6 py-12 text-slate-400">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="BLB Logo"
                width={48}
                height={48}
                className="h-10 w-auto object-contain"
              />
              <div>
                <div className="text-base font-black text-white">BLB</div>
                <div className="text-[10px] font-semibold tracking-[0.25em] text-slate-500">
                  BROTHERS LEGACY BLUEPRINT, LLC
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6">
              Fleet vehicle repair, hail restoration, claims management, and
              government contracting support across DFW and North Texas.
            </p>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
              Navigate
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#capabilities" className="hover:text-white transition">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#strengths" className="hover:text-white transition">
                  Differentiators
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
              Contact
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="tel:+19728960126" className="hover:text-white transition">
                  972.896.0126
                </a>
              </li>
              <li>
                <a
                  href="mailto:Mikal.sanchez@brotherslegacyblueprint.com"
                  className="hover:text-white transition break-all"
                >
                  Mikal.sanchez@brotherslegacyblueprint.com
                </a>
              </li>
              <li>2045 Forest Lane, Ste 160, Garland, TX 75042</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              © {new Date().getFullYear()} Brothers Legacy Blueprint, LLC. All
              rights reserved.
            </div>
            <div className="text-slate-500">
              NAICS 811121 • 811122 • 524291 • 488490
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
