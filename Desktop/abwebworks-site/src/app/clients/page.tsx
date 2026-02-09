import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const work = [
  {
    title: "Outlined Carpentry",
    tag: "Tradie • Lead-gen",
    img: "/work/outlined.jpg",
    bullets: ["Mobile-first landing page", "Projects gallery + reviews", "CTA focused: call/text/quote"],
  },
  {
    title: "Studio Barber Co.",
    tag: "Barber • Bookings",
    img: "/work/barber.jpg",
    bullets: ["Modern vibe, fast load", "Services + pricing layout", "Booking CTA ready"],
  },
  {
    title: "Pulse Physio",
    tag: "Health • Trust",
    img: "/work/physio.jpg",
    bullets: ["Clean credibility design", "FAQ + testimonials sections", "Location + map embed"],
  },
  {
    title: "Spark Electrical",
    tag: "Tradie • Local SEO",
    img: "/work/electrical.jpg",
    bullets: ["Service areas + contact focus", "Speed + SEO foundations", "Simple ongoing updates"],
  },
];

export default function Clients() {
  return (
    <div className="py-10 sm:py-14">
      <Reveal>
        <div className="pill inline-flex items-center gap-2">
          CLIENTS <span className="text-white/45">•</span> Portfolio (placeholders)
        </div>

        <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
          Work we’ve built
        </h1>

        <p className="mt-3 max-w-2xl text-base font-medium text-white/80">
          Four example builds for now. Swap the names/images with real client sites as you go.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {work.map((w, i) => (
          <Reveal key={w.title} delay={90 + i * 90}>
            <div className="card overflow-hidden rounded-3xl shadow-[0_30px_80px_-55px_rgba(0,0,0,.85)]">
              <div className="relative aspect-[16/10]">
                <Image src={w.img} alt={w.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                <div className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-extrabold text-white ring-1 ring-white/15">
                  {w.tag}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-black text-white">{w.title}</p>
                    <p className="mt-1 text-sm font-semibold text-white/75">
                      Premium layout • clear CTA • fast mobile
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-extrabold text-white/85 hover:bg-white/10"
                  >
                    Case study
                  </Link>
                </div>

                <ul className="mt-5 space-y-2 text-sm font-semibold text-white/80">
                  {w.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs font-semibold text-white/55">
                  Placeholder — add live links once deployed.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">
                    Get one like this
                  </Link>
                  <Link href="/contact" className="btn-ghost">
                    Ask a question
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
