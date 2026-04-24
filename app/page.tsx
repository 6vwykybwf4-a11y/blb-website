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

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-3xl font-black">BLB</div>
            <div className="text-xs tracking-[0.25em] text-slate-400">
              BROTHERS LEGACY BLUEPRINT, LLC
            </div>
          </div>

          <a
            href="#contact"
            className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:bg-slate-200"
          >
            Contact
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.25),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-blue-400">
            Brothers Legacy Blueprint, LLC
          </p>

          <h1 className="mt-6 text-5xl font-black md:text-6xl">
            Building Legacy.
            <br />
            Creating Impact.
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-slate-300">
            Auto body repair, hail damage restoration, claims management, and
            fleet-ready services designed for performance and government readiness.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#contact"
              className="rounded-2xl bg-blue-600 px-6 py-4 font-bold hover:bg-blue-700"
            >
              Request Opportunity
            </a>

            <a
              href="#services"
              className="rounded-2xl border border-white/20 px-6 py-4 font-bold hover:bg-white/10"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section className="border-y border-white/10 bg-slate-900 px-6 py-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {[
            ["Primary NAICS", "811121"],
            ["Service Area", "DFW & North Texas"],
            ["Experience", "Since 1999"],
            ["Positioning", "Gov/Fleet Ready"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-blue-300">
                {label}
              </div>
              <div className="mt-3 text-2xl font-black">{value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">Our Services</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-slate-900 p-8 transition hover:-translate-y-2 hover:bg-slate-800"
              >
                <div className="text-blue-400 text-2xl font-black">●</div>

                <h3 className="mt-6 text-xl font-black">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-300">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-900 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">Contact BLB</h2>

          <div className="mt-10 space-y-4">
            <div>📞 972.896.0126</div>
            <div>📧 Mikal.sanchez@brotherslegacyblueprint.com</div>
            <div>📍 Garland, TX</div>
          </div>
        </div>
      </section>

    </main>
  );
}
