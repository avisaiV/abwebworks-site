import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="py-10 sm:py-14">
      {/* HERO (Chromatix-ish: content first, visual second) */}
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        {/* TEXT */}
        <Reveal>
          <div>
            <div className="pill inline-flex items-center gap-2">
              MODERN WEBSITE + CONVERSION = BETTER ROI
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
            </div>

            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl">
              Be seen as
              <span className="block">
                the{" "}
                <span
                  className="italic font-semibold"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  obvious 1st choice
                </span>
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base font-medium text-white/70">
              A modern website is your credibility check. We build premium, fast sites
              that make people trust you — and actually hit “call” or “enquire”.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/clients" className="btn-primary">
                Our work
              </Link>
              <Link href="/contact" className="btn-dark">
                Get a quote
              </Link>
              <Link href="/contact" className="btn-ghost">
                Ask a question
              </Link>
            </div>
          </div>
        </Reveal>

        {/* VISUAL */}
        <Reveal delay={120}>
          <div className="relative mx-auto w-[min(520px,92vw)] lg:w-[520px]">
            <div className="relative aspect-square overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-[0_30px_70px_-40px_rgba(0,0,0,.85)]">
              <Image
                src="/hero.jpg"
                alt="AB WebWorks hero"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 92vw, 520px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>

            {/* play button */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-black/60 ring-1 ring-white/20 shadow-lg">
                <div className="ml-1 h-0 w-0 border-y-[12px] border-y-transparent border-l-[18px] border-l-white" />
              </div>
            </div>

            {/* rating card */}
            <div className="absolute -bottom-5 left-0 hidden sm:block">
              <div className="card rounded-2xl px-4 py-3 shadow-sm">
                <div className="text-xs font-extrabold text-white/70">Google Rating</div>
                <div className="mt-1 flex items-center gap-2">
                  <div className="text-xl font-black">5.0</div>
                  <div className="text-sm font-black">★★★★★</div>
                </div>
                <div className="text-xs text-white/60">Based on 100+ reviews</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* METRICS (force a row sooner so it doesn’t stack on medium screens) */}
      <div className="mt-14 grid gap-8 border-t border-white/15 pt-10 md:grid-cols-3">
        <Reveal>
          <div className="metric">
            <div className="big">+30%</div>
            <div className="small">Increase in new leads after launch (placeholder)</div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="metric">
            <div className="big">408%</div>
            <div className="small">Conversion uplift after redesign (placeholder)</div>
          </div>
        </Reveal>
        <Reveal delay={240}>
          <div className="metric">
            <div className="big">4×</div>
            <div className="small">More engagement on mobile (placeholder)</div>
          </div>
        </Reveal>
      </div>

      {/* PORTFOLIO PREVIEW */}
      <div className="mt-14 border-t border-white/15 pt-10">
        <Reveal>
          <p className="text-xs font-extrabold tracking-[.18em] text-white/65">
            PORTFOLIO PREVIEW
          </p>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">Recent builds</h2>
          <p className="mt-2 text-white/65">
            4 examples for now. Replace with real client sites as you close them.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { title: "Outlined Carpentry", tag: "Tradie • Lead-gen", img: "/work/outlined.jpg" },
            { title: "Studio Barber Co.", tag: "Local • Bookings", img: "/work/barber.jpg" },
            { title: "Pulse Physio", tag: "Health • Trust", img: "/work/physio.jpg" },
            { title: "Spark Electrical", tag: "Tradie • Local SEO", img: "/work/electrical.jpg" },
          ].map((w, i) => (
            <Reveal key={w.title} delay={80 + i * 90}>
              <div className="card overflow-hidden rounded-3xl shadow-sm">
                <div className="relative aspect-[16/10]">
                  <Image src={w.img} alt={w.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
                  <div className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-extrabold text-white ring-1 ring-white/15">
                    {w.tag}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-lg font-black">{w.title}</p>
                  <p className="mt-1 text-sm font-medium text-white/65">
                    Premium layout • clear CTA • fast mobile
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/clients" className="btn-ghost">
            View all work
          </Link>
        </div>
      </div>

      {/* CTA STRIP */}
      <div className="mt-14 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-extrabold tracking-[.16em] text-white/65">
              READY TO LOOK MODERN & PROFESSIONAL?
            </p>
            <p className="mt-2 text-2xl font-black">Let’s build your site properly.</p>
            <p className="mt-1 text-sm font-medium text-white/65">
              You send details once — we handle the build, launch, and upkeep.
            </p>
          </div>
          <Link href="/contact" className="btn-primary">
            Start here
          </Link>
        </div>
      </div>
    </div>
  );
}
