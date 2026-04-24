const services = [
  ["Vehicle Repair", "Auto body repair, collision support, hail restoration, and fleet vehicle service coordination."],
  ["Claims Management", "Insurance-aligned estimating, supplement handling, documentation, and repair process support."],
  ["Fleet Support", "Service solutions for municipal, commercial, utility, and agency vehicle fleets."],
  ["Storm Response", "Hail/CAT event support with scalable repair coordination and fast operational response."],
];

const naics = ["811121", "811122", "524291", "488490"];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-3xl font-black tracking-tight">BLB</div>
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
              Brothers Legacy Blueprint, LLC supports government, municipal, and
              commercial fleet operations with dependable auto body repair, hail
              response, claims management, and logistics coordination.
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
              <div className="flex items-start justify-between gap-6 border-b border-slate-200 pb-5">
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

              <div className="mt-6 grid gap-4">
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
