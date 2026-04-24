const services = [
  {
    title: "Fleet Vehicle Repair",
    text: "Auto body repair, collision support, hail restoration, and service coordination for government and commercial fleets.",
  },
  {
    title: "Claims Management",
    text: "Insurance-aligned estimating, supplement handling, documentation, and repair process support.",
  },
  {
    title: "Storm Response",
    text: "Scalable hail and CAT event support for high-volume vehicle repair needs.",
  },
  {
    title: "Logistics Support",
    text: "Pickup, delivery, coordination, and repair workflow support to reduce fleet downtime.",
  },
];

const naics = ["811121", "811122", "524291", "488490"];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-3xl font-black">BLB</div>
            <div className="text-xs tracking-[0.25em] text-slate-400">
              BROTHERS LEGACY BLUEPRINT, LLC
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-bold text-slate-300">
            <a href="#capabilities" className="hover:text-white">Capabilities</a>
            <a href="#contracting" className="hover:text-white">Contracting</a>
            <a href="#strengths" className="hover:text-white">Strengths</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <a href="#contact" className="bg-white text-slate-950 px-5 py-3 rounded-xl font-bold">
            Request Info
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.35),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-blue-300 uppercase text-sm tracking-[0.3em] mb-5">
              Government & Fleet Support
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Contract-ready vehicle repair, claims, and fleet support.
            </h1>

            <p className="mt-6 text-slate-300 max-w-2xl">
              BLB supports government, municipal, and commercial fleets with repair,
              hail response, claims management, and logistics coordination.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#capabilities" className="bg-white text-black px-6 py-4 rounded-xl font-bold">
                View Capabilities
              </a>
              <a href="#contact" className="border px-6 py-4 rounded-xl font-bold">
                Contact
              </a>
            </div>
          </div>

          {/* PROFILE CARD */}
          <div className="bg-white text-black p-6 rounded-2xl shadow-xl">
            <h3 className="font-black text-xl mb-4">Contractor Profile</h3>
            <p className="text-sm mb-4">Fleet repair, hail response, claims support.</p>

            <div className="flex gap-2 flex-wrap">
              {naics.map((code) => (
                <span key={code} className="bg-slate-900 text-white px-3 py-1 rounded-full text-sm">
                  {code}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="bg-white text-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">Core Capabilities</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="p-6 bg-slate-100 rounded-xl">
                <h3 className="font-black">{s.title}</h3>
                <p className="mt-2 text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTRACTING */}
      <section id="contracting" className="px-6 py-24">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-8">
          <div className="bg-blue-900 p-8 rounded-xl">
            <h2 className="text-3xl font-black">Government Ready</h2>
            <p className="mt-4 text-slate-200">
              BLB is structured for fleet, municipal, and agency contracts with scalable service.
            </p>
          </div>

          <div className="bg-white text-black p-8 rounded-xl">
            <h2 className="font-black text-xl">Why BLB</h2>
            <ul className="mt-4 space-y-2">
              <li>• Claims + repair in one vendor</li>
              <li>• Fleet uptime focus</li>
              <li>• Storm response capable</li>
              <li>• DFW-based operations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* STRENGTHS */}
      <section id="strengths" className="bg-white text-black px-6 py-24">
        <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-6">
          {[
            "Since 1999 Experience",
            "DFW Based",
            "Fleet Focused",
            "Storm Ready",
          ].map((item) => (
            <div key={item} className="bg-slate-100 p-6 rounded-xl font-bold">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">Contact BLB</h2>

          <div className="mt-6">
            <p>📞 972.896.0126</p>
            <p>📧 Mikal.sanchez@brotherslegacyblueprint.com</p>
            <p>📍 Garland, TX</p>
          </div>
        </div>
      </section>

    </main>
  );
}
