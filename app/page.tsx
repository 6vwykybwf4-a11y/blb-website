const services = [
  {
    title: "Auto Body Repair",
    description:
      "Full-service auto body and collision repair with professional craftsmanship and dependable turnaround.",
  },
  {
    title: "Hail Damage Repair",
    description:
      "High-volume hail repair solutions built for storm response and CAT events.",
  },
  {
    title: "Claims Management",
    description:
      "Insurance claims handling, supplementing, and estimate management to reduce client friction.",
  },
  {
    title: "Fleet Services",
    description:
      "Maintenance and repair support for government, municipal, and commercial fleets.",
  },
];

const differentiators = [
  "Integrated repair, claims, and logistics model",
  "Storm-response ready for hail and CAT volume",
  "Fleet-focused, government-ready presentation",
  "Family-owned with industry experience since 1999",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HEADER */}
      <header className="border-b bg-[#0B1F3A] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-3xl font-extrabold">BLB</div>
            <div className="text-sm tracking-[0.2em] text-slate-300">
              BROTHERS LEGACY BLUEPRINT, LLC
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contracting">Contracting</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="border px-4 py-2 rounded-xl">
            Request Quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0B1F3A] to-slate-900 text-white px-6 py-20">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12">
          <div>
            <p className="uppercase text-sm tracking-widest text-slate-300">
              DBA: Car Dents
            </p>

            <h1 className="text-5xl font-black mt-4">
              Building Legacy. Creating Impact.
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              Brothers Legacy Blueprint delivers auto body repair, hail damage
              restoration, claims management, fleet services, and
              government-ready support.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#services" className="bg-white text-black px-6 py-3 rounded-xl">
                Our Services
              </a>
              <a href="#contracting" className="border px-6 py-3 rounded-xl">
                Government Contracting
              </a>
            </div>
          </div>

          <div className="bg-white text-black p-6 rounded-xl shadow-xl">
            <h3 className="font-bold">BLB Snapshot</h3>
            <p className="mt-2 text-sm">
              Auto body repair, hail damage, claims management, fleet support.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">About BLB</h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl">
            Brothers Legacy Blueprint is built on integrity, responsiveness,
            and dependable execution. Operating under Car Dents, the company
            combines repair expertise, insurance-aligned processes, and
            logistics support.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">Our Services</h2>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold">{s.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTRACTING */}
      <section id="contracting" className="px-6 py-20">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-8">
          <div className="bg-[#0B1F3A] text-white p-8 rounded-xl">
            <h2 className="text-3xl font-black">Government Contracting</h2>
            <p className="mt-4">
              Built to present like a serious contractor for local, state,
              and federal opportunities.
            </p>
          </div>

          <div className="bg-slate-100 p-8 rounded-xl">
            <h2 className="font-bold">Why BLB</h2>
            <ul className="mt-4 space-y-2">
              {differentiators.map((d) => (
                <li key={d}>• {d}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-900 text-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">Contact BLB</h2>

          <div className="mt-6 space-y-3">
            <div>📞 972.896.0126</div>
            <div>📧 Mikal.sanchez@brotherslegacyblueprint.com</div>
            <div>📍 Garland, TX</div>
          </div>
        </div>
      </section>

    </main>
  );
}
