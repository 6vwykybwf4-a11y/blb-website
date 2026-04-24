import Image from "next/image";
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
        <div className="flex items-center gap-4">
  <Image
    src="/logo.png"
    alt="Brothers Legacy Blueprint Logo"
    width={56}
    height={56}
    className="h-14 w-14 object-contain"
    priority
  />
  <div>
    <div className="text-xl font-black">BLB</div>
    <div className="text-xs font-semibold tracking-[0.25em] text-slate-400">
      BROTHERS LEGACY BLUEPRINT, LLC
    </div>
  </div>
</div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-300">
  <a href="#capabilities" className="hover:text-white transition">
    Capabilities
  </a>
  <a href="#contracting" className="hover:text-white transition">
    Contracting
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

      <section className="relative overflow-hidden bg-slate-950 px-6 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.25),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-blue-400">
            Brothers Legacy Blueprint, LLC
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Building Legacy.
            <br />
            Creating Impact.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Auto body repair, hail damage restoration, claims management, and
            fleet-ready services designed for performance, scalability, and
            government contracting readiness.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-2xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg hover:bg-blue-700"
            >
              Request Opportunity
            </a>

            <a
              href="#services"
              className="rounded-2xl border border-white/20 px-6 py-4 font-bold text-white hover:bg-white/10"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

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
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg"
            >
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
                {label}
              </div>
              <div className="mt-3 text-2xl font-black text-white">
                {value}
              </div>
            </div>
          ))}
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

      <section className="bg-white px-6 py-24 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500">
            Contractor Strengths
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            Built for reliability, documentation, and operational response.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              "Industry experience since 1999",
              "DFW-based fleet support",
              "Claims + repair coordination",
              "Storm-response capability",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <div className="text-3xl font-black text-[#0B1F3A]">✓</div>
                <p className="mt-4 font-bold text-slate-800">{item}</p>
              </div>
            ))}
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
                <div className="mt-1 text-2xl font-bold text-white">972.896.0126</div>
              </div>

              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                  Email
                </div>
                <div className="mt-1 text-xl font-bold text-white">
                  Mikal.sanchez@brotherslegacyblueprint.com
                </div>
              </div>

              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                  Location
                </div>
                <div className="mt-1 text-xl font-bold text-white">
                  Garland, TX • Serving DFW & North Texas
                </div>
              </div>
            </div>
          </div>

          <form
            action="mailto:Mikal.sanchez@brotherslegacyblueprint.com"
            method="post"
            encType="text/plain"
            className="rounded-[2rem] border border-white/10 bg-white p-8 text-slate-950 shadow-2xl"
          >
            <h3 className="text-2xl font-black text-[#0B1F3A]">
              Opportunity Inquiry
            </h3>

            <div className="mt-6 grid gap-4">
              <input
                name="Name"
                placeholder="Name"
                className="rounded-xl border border-slate-300 px-4 py-3"
              />

              <input
                name="Organization"
                placeholder="Organization / Agency"
                className="rounded-xl border border-slate-300 px-4 py-3"
              />

              <input
                name="Phone"
                placeholder="Phone"
                className="rounded-xl border border-slate-300 px-4 py-3"
              />

              <input
                name="Email"
                placeholder="Email"
                className="rounded-xl border border-slate-300 px-4 py-3"
              />

              <select
                name="Opportunity Type"
                className="rounded-xl border border-slate-300 px-4 py-3"
              >
                <option>Fleet Vehicle Repair</option>
                <option>Hail / Storm Response</option>
                <option>Claims Management</option>
                <option>Government Contracting</option>
                <option>Other</option>
              </select>

              <textarea
                name="Message"
                placeholder="Tell us about the opportunity..."
                rows={5}
                className="rounded-xl border border-slate-300 px-4 py-3"
              />

              <button
                type="submit"
                className="rounded-2xl bg-[#0B1F3A] px-6 py-4 font-black text-white hover:bg-slate-800"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
