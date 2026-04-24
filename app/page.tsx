export default function BLBHomepage() {
  const services = [
    {
      title: "Auto Body Repair",
      description:
        "Full-service auto body and collision repair with professional craftsmanship and dependable turnaround.",
      icon: "🚗",
    },
    {
      title: "Hail Damage Repair",
      description:
        "High-volume hail repair solutions built for storm response, CAT events, and fast recovery.",
      icon: "🌧️",
    },
    {
      title: "Claims Management",
      description:
        "Insurance claims handling, supplementing, and estimate management to reduce client friction.",
      icon: "📋",
    },
    {
      title: "Fleet Services",
      description:
        "Maintenance and repair support for government, municipal, and commercial fleets.",
      icon: "🚓",
    },
    {
      title: "Mobile Service",
      description:
        "Pickup and delivery valet service designed to minimize downtime and keep operations moving.",
      icon: "🚚",
    },
    {
      title: "Government Contracting",
      description:
        "Professional support for federal, state, and local agency vehicle service needs.",
      icon: "🛡️",
    },
  ];

  const differentiators = [
    "Integrated repair, claims, and logistics model",
    "Storm-response ready for hail and CAT volume",
    "Fleet-focused, government-ready presentation",
    "Family-owned with industry experience since 1999",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-[#0B1F3A] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-3xl font-extrabold tracking-tight">BLB</div>
            <div className="text-sm tracking-[0.2em] text-slate-300">BROTHERS LEGACY BLUEPRINT, LLC</div>
          </div>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#about" className="hover:text-slate-300">About</a>
            <a href="#services" className="hover:text-slate-300">Services</a>
            <a href="#contracting" className="hover:text-slate-300">Contracting</a>
            <a href="#contact" className="hover:text-slate-300">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-2xl border border-slate-400 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-[#0B1F3A]"
          >
            Request Quote
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1F3A] via-[#102b50] to-slate-900 text-white">
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div className="relative z-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
              DBA: Car Dents
            </p>
            <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
              Building Legacy.
              <span className="block text-slate-300">Creating Impact.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Brothers Legacy Blueprint, LLC delivers dependable auto body repair,
              hail damage restoration, claims management, fleet services, and
              government-ready support across North Texas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-[#0B1F3A] shadow-lg transition hover:-translate-y-0.5"
              >
                Our Services
              </a>
              <a
                href="#contracting"
                className="rounded-2xl border border-slate-400 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#0B1F3A]"
              >
                Government Contracting
              </a>
            </div>
          </div>

          <div className="relative z-10">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-white p-8 text-slate-900 shadow-xl">
                <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-5">
                  <div>
                    <div className="text-2xl font-black tracking-tight text-[#0B1F3A]">BLB</div>
                    <div className="text-xs font-semibold tracking-[0.25em] text-slate-500">
                      BROTHERS LEGACY BLUEPRINT, LLC
                    </div>
                  </div>
                  <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    Govt Ready
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                      Core Focus
                    </div>
                    <div className="mt-2 text-sm leading-6 text-slate-700">
                      Auto body repair, hail damage, claims management, fleet support.
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                      NAICS
                    </div>
                    <div className="mt-2 text-sm leading-6 text-slate-700">
                      811121 · 524291 · 488490 · 811122
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 sm:col-span-2">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                      Differentiators
                    </div>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                      {differentiators.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">About BLB</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B1F3A]">
              Service-driven. Structured. Contract-ready.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Brothers Legacy Blueprint, LLC is built on integrity, responsiveness,
              and dependable execution. Operating under Car Dents, the company
              combines repair expertise, insurance-aligned processes, and logistics
              support to serve commercial, municipal, and government clients.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">Capabilities Snapshot</div>
            <div className="mt-6 space-y-4 text-sm text-slate-700">
              <div className="flex items-start justify-between gap-6 border-b border-slate-200 pb-4">
                <span>Primary NAICS</span>
                <span className="font-semibold text-[#0B1F3A]">811121</span>
              </div>
              <div className="flex items-start justify-between gap-6 border-b border-slate-200 pb-4">
                <span>Business Structure</span>
                <span className="font-semibold text-[#0B1F3A]">LLC</span>
              </div>
              <div className="flex items-start justify-between gap-6 border-b border-slate-200 pb-4">
                <span>Service Area</span>
                <span className="font-semibold text-[#0B1F3A]">DFW & North Texas</span>
              </div>
              <div className="flex items-start justify-between gap-6">
                <span>Positioning</span>
                <span className="font-semibold text-[#0B1F3A]">Fleet + Govt Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">Our Services</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B1F3A]">
                Comprehensive support for vehicles, fleets, and claims.
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B1F3A] text-2xl text-white shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-[#0B1F3A]">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contracting" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] bg-[#0B1F3A] p-10 text-white shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-300">Government Contracting</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Built to present like a serious contractor.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              BLB is positioned to support local, state, and federal contracting
              opportunities through disciplined branding, responsive service, and a
              clear operational lane.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">Target Clients</div>
                <div className="mt-3 text-sm leading-6 text-white">
                  Municipal fleets, utility fleets, law enforcement, school districts, and state agencies.
                </div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">Supporting Codes</div>
                <div className="mt-3 text-sm leading-6 text-white">
                  811121 · 524291 · 488490 · 811122
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">Why BLB</p>
            <ul className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
              <li>• One vendor relationship for repair, claims, and logistics support.</li>
              <li>• Strong fit for hail response, catastrophe volume, and fleet uptime needs.</li>
              <li>• Professional brand presentation aligned with government expectations.</li>
              <li>• Local credibility in DFW with scalable positioning for broader work.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-300">Contact</p>
                <h2 className="mt-3 text-4xl font-black tracking-tight">Ready to work with BLB?</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  Reach out for fleet repair, hail damage support, claims assistance,
                  or government contracting conversations.
                </p>
              </div>
              <a
                href="mailto:Mikal.sanchez@brotherslegacyblueprint.com"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-bold text-[#0B1F3A] shadow-lg transition hover:-translate-y-0.5"
              >
                Email BLB
              </a>
            </div>

            <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-4">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Phone</div>
                <div className="mt-2 text-lg">972.896.0126</div>
              </div>
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Email</div>
                <div className="mt-2 text-lg">
                  <span className="block">Mikal.sanchez</span>
                  <span className="block">@brotherslegacyblueprint.com</span>
                </div>
              </div>
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Address</div>
                <div className="mt-2 text-lg">2045 Forest Lane, Ste 160<br />Garland, TX 75042</div>
              </div>
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Brand</div>
                <div className="mt-2 text-lg">Brothers Legacy Blueprint, LLC<br />DBA: Car Dents</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
