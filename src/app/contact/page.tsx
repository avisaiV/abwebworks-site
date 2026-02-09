import Link from "next/link";
import Reveal from "@/components/Reveal";

const intakeLink = "https://YOUR-FORM-LINK-HERE"; // replace later

export default function Contact() {
  return (
    <div className="py-10 sm:py-14">
      <Reveal>
        <div className="pill inline-flex items-center gap-2">
          CONTACT <span className="text-white/45">•</span> Start a project
        </div>

        <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
          Let’s build something clean.
        </h1>

        <p className="mt-3 max-w-2xl text-base font-medium text-white/80">
          Quickest way: fill our setup form and upload your photos/logo. If you prefer, message us first.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {/* Form card */}
        <Reveal delay={80}>
          <div className="card rounded-3xl p-6 shadow-[0_30px_80px_-55px_rgba(0,0,0,.85)] sm:p-8">
            <h2 className="text-lg font-black text-white">Fast setup form</h2>
            <p className="mt-2 text-sm font-semibold text-white/75">
              Business name, services, location, plus easy image upload.
            </p>

            <a
              href={intakeLink}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-6 inline-flex w-full justify-center"
            >
              Open the setup form
            </a>

            <div className="mt-4 rounded-2xl border border-white/15 bg-black/25 px-4 py-3">
              <p className="text-xs font-semibold text-white/70">
                Replace the link above with your Jotform/Typeform URL when ready.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Direct contact card */}
        <Reveal delay={140}>
          <div className="card rounded-3xl p-6 shadow-[0_30px_80px_-55px_rgba(0,0,0,.85)] sm:p-8">
            <h2 className="text-lg font-black text-white">Direct contact</h2>
            <p className="mt-2 text-sm font-semibold text-white/75">
              If you just want to chat first, send a message.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-white/15 bg-black/25 px-4 py-4">
                <p className="text-xs font-extrabold tracking-wide text-white/55">EMAIL</p>
                <a className="mt-1 block text-sm font-black text-white hover:underline" href="mailto:hello@abwebworks.com.au">
                  hello@abwebworks.com.au
                </a>
              </div>

              <div className="rounded-2xl border border-white/15 bg-black/25 px-4 py-4">
                <p className="text-xs font-extrabold tracking-wide text-white/55">PHONE</p>
                <a className="mt-1 block text-sm font-black text-white hover:underline" href="tel:+61400000000">
                  04xx xxx xxx
                </a>
              </div>
            </div>

            <p className="mt-5 text-xs font-semibold text-white/55">
              (We’ll swap these to real details once you lock the brand + domain.)
            </p>

            <div className="mt-6">
              <Link href="/clients" className="btn-ghost inline-flex w-full justify-center">
                See examples first
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
