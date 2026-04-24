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
      <header className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-3xl font-black">BLB</div>
            <div className="text-xs font-semibold tracking-[0.25em] text-slate-400">
              BROTHERS LEGACY BLUEPRINT, LLC
            </div>
          </div>

          <a
            href="mailto:Mikal.sanchez@brotherslegacyblueprint.com"
            className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:bg-slate-200"
          >
            Contact BLB
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1e3a8a,transparent_35%),radial-gradient(circle_at_bottom_left,#334155,transparent_30%)] opacity-70" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
              Government & Fleet Vehicle Support
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Contract-ready vehicle repair, claims, and fleet support.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Brothers Legacy Blueprint, LLC supports government, municipal,
              and commercial fleet operations with dependable auto body repair,
              hail response, claims management, and logistics coordination.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#capabilities"
                className="rounded-2xl bg-white px-7 py-4 font-bold text-slate-950 shadow-xl hover:bg-slate-200"
              >
                View Capabilities
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white/20 px-7 py-4 font-bold text-white hover:bg-white hover:text-slate-950"
              >
                Request Information
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-7 text-slate-950">
              <div className="flex items-start justify-between border-b border-slate-200 pb-5">
                <div>
                  <div className="text-2xl font-black text-[#0B1F3A]">BLB</div>
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                    Contractor Profile
                  </div>
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                  Govt Ready
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                    Primary Focus
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Fleet repair, hail/CAT response, claims support, and service logistics.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                    NAICS Codes
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {naics.map((code) => (
                      <span
                        key={code}
                        className="rounded-full bg-[#0B1F3A] px-3 py-1 text-sm font-bold text-white"
                      >
                        {code}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                    Service Area
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    DFW, North Texas, and storm-response markets as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="bg-white px-6 py-24 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500">
            Core Capabilities
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            Structured support for agencies, fleets, and contracting partners.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm"
              >
                <h3 className="text-xl font-black text-[#0B1F3A]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#0B1F3A] p-10 text-white shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-200">
              Government Ready
            </p>
            <h2 className="mt-4 text-4xl font-black">
              Built for serious contracting conversations.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              BLB is positioned to support public-sector and fleet-focused
              opportunities through clear capabilities, disciplined presentation,
              and responsive operational support.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500">
              Why BLB
            </p>
            <ul className="mt-6 space-y-4 text-lg leading-8 text-slate-700">
              <li>• One vendor relationship for repair, claims, and logistics.</li>
              <li>• Strong fit for fleet uptime and storm-response needs.</li>
              <li>• Professional positioning aligned with procurement expectations.</li>
              <li>• North Texas base with scalable response capability.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Ready to discuss a fleet or government opportunity?
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Contact Brothers Legacy Blueprint, LLC for vehicle repair support,
            hail response, claims management, and contracting conversations.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                Phone
              </div>
              <div className="mt-2 text-xl">972.896.0126</div>
            </div>

            <div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                Email
              </div>
              <div className="mt-2 text-xl">
                Mikal.sanchez@brotherslegacyblueprint.com
              </div>
            </div>

            <div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                Location
              </div>
              <div className="mt-2 text-xl">
                Garland, TX
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
