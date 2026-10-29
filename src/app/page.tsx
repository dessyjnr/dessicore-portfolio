
const projects = [
  {
    number: "01",
    name: "DESSI HUB",
    type: "Student platform · Next.js",
    description:
      "A student-first platform concept designed around everyday campus services, beginning with a laundry booking experience.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    status: "IN DEVELOPMENT",
    color: "from-teal-100 via-cyan-50 to-white",
    mark: "DH",
  },
  {
    number: "02",
    name: "Della's Closet",
    type: "E-commerce · Client project",
    description:
      "A fashion storefront project for showcasing clothing, footwear, fragrances, and accessories.",
    tags: ["Web Design", "E-commerce", "UI/UX"],
    status: "PROJECT SHOWCASE",
    color: "from-amber-50 via-orange-50 to-white",
    mark: "DC",
  },
];

const services = [
  {
    number: "01",
    title: "Web Development",
    text: "Responsive websites and web applications built with modern frontend tools.",
  },
  {
    number: "02",
    title: "UI/UX Implementation",
    text: "Clean interfaces, thoughtful layouts, and intuitive user experiences.",
  },
  {
    number: "03",
    title: "AI-Powered Solutions",
    text: "Practical experiments and integrations that bring useful AI capabilities into digital products.",
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={diagonal ? "transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" : ""}
    >
      {diagonal ? (
        <path
          d="M7 17 17 7M7 7h10v10"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M4 12h15m-6-6 6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fcfcfd] text-[#17151e] selection:bg-violet-200 selection:text-violet-950">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/85 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
        >
          <a href="#home" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#17151e] text-sm font-bold tracking-tight text-white transition-transform duration-300 group-hover:rotate-[-5deg]">
              D.
            </span>
            <span>
              <span className="block text-sm font-bold tracking-[0.12em]">
                DESSICORE
              </span>
              <span className="mt-0.5 block text-[9px] font-medium tracking-[0.22em] text-gray-500">
                TECHNOLOGIES
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-[13px] font-medium text-gray-600 md:flex">
            <a className="transition-colors hover:text-violet-700" href="#work">
              Work
            </a>
            <a className="transition-colors hover:text-violet-700" href="#services">
              Services
            </a>
            <a className="transition-colors hover:text-violet-700" href="#about">
              About
            </a>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#17151e] px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-200 sm:px-5 sm:text-sm"
          >
            Let&apos;s talk <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto grid min-h-[690px] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-12 lg:py-28"
      >
        <div className="pointer-events-none absolute -left-48 top-16 h-96 w-96 rounded-full bg-violet-100/60 blur-[100px]" />
        <div className="pointer-events-none absolute right-0 top-40 h-64 w-64 rounded-full bg-blue-100/50 blur-[100px]" />

        <div className="relative z-10">
          <div className="hero-enter inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white px-3.5 py-2 shadow-sm shadow-violet-100/50">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[10px] font-semibold tracking-[0.14em] text-gray-600 sm:text-[11px]">
              INDEPENDENT DEVELOPER · NIGERIA
            </span>
          </div>

          <h1 className="hero-enter mt-8 max-w-3xl text-[clamp(3.25rem,7vw,6.25rem)] font-semibold leading-[0.99] tracking-[-0.075em]">
            Ideas into
            <br />
            <span className="bg-gradient-to-r from-violet-700 via-violet-600 to-blue-600 bg-clip-text text-transparent">
              digital reality.
            </span>
          </h1>

          <p className="hero-enter mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            I&apos;m Desmond, a self-taught web developer exploring the intersection
            of thoughtful design, modern web technology, and AI-powered tools.
            I build digital experiences with purpose.
          </p>

          <div className="hero-enter mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-violet-700 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-800 hover:shadow-xl"
            >
              Explore my work
              <ArrowIcon />
            </a>
            <a
              href="#about"
              className="rounded-full border border-gray-200 bg-white px-6 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:text-violet-700"
            >
              More about me
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-gray-200/80 pt-6 text-xs font-medium text-gray-500 sm:text-sm">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              React & Next.js
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              UI-focused development
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              AI enthusiast
            </span>
          </div>
        </div>

        {/* Abstract developer workspace */}
        <div className="hero-enter relative mx-auto w-full max-w-[510px] lg:ml-auto">
          <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-violet-200/60 via-blue-100/40 to-transparent blur-2xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-3 shadow-2xl shadow-violet-200/40 sm:p-4">
            <div className="overflow-hidden rounded-[20px] bg-[#11101a]">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff6d6d]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffcc70]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#65d6a6]" />
                </div>
                <span className="font-mono text-[10px] text-gray-500">
                  dessicore / build.tsx
                </span>
              </div>

              <div className="relative min-h-[350px] overflow-hidden p-6 sm:min-h-[385px] sm:p-8">
                <div className="pointer-events-none absolute -right-16 -top-10 h-64 w-64 rounded-full border border-violet-400/10" />
                <div className="pointer-events-none absolute -right-4 top-6 h-48 w-48 rounded-full border border-violet-400/15" />
                <div className="pointer-events-none absolute right-10 top-16 h-28 w-28 rounded-full bg-violet-600/20 blur-3xl" />

                <div className="relative">
                  <p className="font-mono text-xs text-gray-500">
                    <span className="text-violet-400">const</span>{" "}
                    <span className="text-sky-300">mission</span> = {"{"}
                  </p>

                  <div className="mt-4 space-y-3 pl-5 font-mono text-xs sm:text-sm">
                    <p className="text-gray-400">
                      purpose:{" "}
                      <span className="text-emerald-300">
                        &quot;Build with purpose&quot;
                      </span>
                      ,
                    </p>
                    <p className="text-gray-400">
                      design:{" "}
                      <span className="text-emerald-300">
                        &quot;Simple. Clear. Useful.&quot;
                      </span>
                      ,
                    </p>
                    <p className="text-gray-400">
                      technology:{" "}
                      <span className="text-emerald-300">
                        &quot;Web + AI&quot;
                      </span>
                      ,
                    </p>
                    <p className="text-gray-400">
                      mindset:{" "}
                      <span className="text-emerald-300">
                        &quot;Always learning&quot;
                      </span>
                    </p>
                  </div>

                  <p className="mt-3 font-mono text-xs text-gray-500">{"};"}</p>
                </div>

                <div className="relative mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-gray-500">
                        Current focus
                      </p>
                      <p className="mt-2 text-lg font-semibold tracking-tight text-white">
                        Building DESSI HUB
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-cyan-600 text-sm font-bold text-white shadow-lg shadow-teal-950/40">
                      DH
                    </div>
                  </div>
                  <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" />
                  </div>
                  <p className="mt-2 text-[10px] text-gray-500">
                    An evolving student-first product · In development
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between font-mono text-[10px] text-gray-500">
                  <span>DESIGNED TO SOLVE REAL PROBLEMS</span>
                  <span className="text-violet-300">v.01</span>
                </div>
              </div>
            </div>
          </div>

          <div className="float-card absolute -right-2 top-16 rounded-2xl border border-white bg-white px-4 py-3 shadow-xl shadow-gray-200/70 sm:-right-7">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                  <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold">Design meets code</p>
                <p className="mt-0.5 text-[10px] text-gray-500">
                  Every detail matters
                </p>
              </div>
            </div>
          </div>

          <div className="float-card absolute -bottom-5 left-3 rounded-2xl border border-white bg-white px-4 py-3 shadow-xl shadow-gray-200/70 sm:-left-7">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                  <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold">Built to be useful</p>
                <p className="mt-0.5 text-[10px] text-gray-500">
                  Purpose before complexity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small intro strip */}
      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
            The approach
          </p>
          <p className="max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
            Understand the problem. Design the experience. Build the solution.
            Keep learning, keep improving.
          </p>
          <a
            href="#work"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-violet-700"
          >
            See selected work <ArrowIcon diagonal />
          </a>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
              Selected work
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
              Ideas in progress.
              <br />
              <span className="text-gray-400">Built with intention.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-gray-500">
            A look at projects and experiments that reflect my approach to
            solving problems through technology.
          </p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-[28px] border border-gray-200/80 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-violet-200 hover:shadow-2xl hover:shadow-violet-100/60"
            >
              <div className={`relative overflow-hidden bg-gradient-to-br ${project.color} p-5 sm:p-8`}>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-black/[0.07] bg-white/80 px-3 py-1.5 text-[9px] font-bold tracking-[0.15em] text-gray-600">
                    {project.status}
                  </span>
                  <span className="font-mono text-xs text-gray-500">
                    / {project.number}
                  </span>
                </div>

                <div className="relative mt-7 flex min-h-[225px] items-center justify-center overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur-sm sm:min-h-[255px]">
                  <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full border border-violet-200/70" />
                  <div className="absolute -bottom-16 -right-8 h-48 w-48 rounded-full border border-violet-200/70" />

                  {project.number === "01" ? (
                    <div className="relative w-full max-w-[350px] -rotate-2 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl transition-transform duration-500 group-hover:rotate-0 sm:p-5">
                      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                        <div className="flex items-center gap-2">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 text-[10px] font-bold text-white">
                            DH
                          </span>
                          <div>
                            <p className="text-xs font-bold">DESSI HUB</p>
                            <p className="text-[9px] text-gray-400">Campus services</p>
                          </div>
                        </div>
                        <span className="rounded-full bg-teal-50 px-2 py-1 text-[9px] font-medium text-teal-700">
                          Student-first
                        </span>
                      </div>
                      <div className="mt-5">
                        <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-gray-400">
                          Everyday campus life
                        </p>
                        <p className="mt-2 text-xl font-semibold tracking-tight">
                          Campus services,
                          <br /> made simpler.
                        </p>
                      </div>
                      <div className="mt-5 grid grid-cols-3 gap-2">
                        {["Laundry", "Services", "Support"].map((item, i) => (
                          <div key={item} className="rounded-xl border border-gray-100 bg-gray-50 p-2.5">
                            <div className={`mb-3 h-6 w-6 rounded-lg ${i === 0 ? "bg-teal-100" : i === 1 ? "bg-blue-100" : "bg-violet-100"}`} />
                            <p className="text-[9px] font-semibold">{item}</p>
                          </div>
                        ))}
                      </div>
                      <p className="mt-3 text-[9px] text-gray-400">
                        Concept preview · Product in development
                      </p>
                    </div>
                  ) : (
                    <div className="relative w-full max-w-[350px] -rotate-2 overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-xl transition-transform duration-500 group-hover:rotate-0">
                      <div className="border-b border-amber-100 px-5 py-4 text-center">
                        <p className="font-serif text-xl tracking-wide text-[#7b603c]">
                          DELLA&apos;S CLOSET
                        </p>
                        <p className="mt-1 text-[8px] tracking-[0.24em] text-gray-400">
                          STYLE YOUR STORY
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 bg-[#fbf6ee] p-3">
                        <div className="flex h-32 flex-col justify-end rounded-xl bg-gradient-to-b from-amber-100 to-orange-200 p-3 sm:h-36">
                          <span className="text-[9px] font-medium text-amber-950/70">NEW COLLECTION</span>
                          <span className="mt-1 font-serif text-lg text-amber-950">Everyday style</span>
                        </div>
                        <div className="flex h-32 flex-col justify-end rounded-xl bg-gradient-to-b from-stone-100 to-stone-300 p-3 sm:h-36">
                          <span className="text-[9px] font-medium text-stone-700">CURATED PICKS</span>
                          <span className="mt-1 font-serif text-lg text-stone-800">The details</span>
                        </div>
                      </div>
                      <p className="px-4 py-3 text-[9px] text-gray-400">
                        Storefront project preview
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-xs font-medium text-gray-400">{project.type}</p>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <span className="mt-1 text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-700">
                    <ArrowIcon diagonal />
                  </span>
                </div>
                <p className="mt-3 max-w-lg text-sm leading-7 text-gray-600">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 px-3 py-1.5 text-[10px] font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs leading-6 text-gray-400">
          Project previews are illustrative portfolio mockups, not screenshots
          of live products. Project status is stated individually.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 border-y border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
              What I can help with
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
              Thoughtful work.
              <br />
              <span className="text-gray-400">Practical outcomes.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              I focus on building useful digital experiences and growing my
              skills with every project.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-2xl border border-gray-200 bg-[#fcfcfd] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:shadow-xl hover:shadow-violet-100/40 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gray-400">
                    {service.number}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <ArrowIcon diagonal />
                  </span>
                </div>
                <h3 className="mt-9 text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-7xl scroll-mt-24 gap-12 px-5 py-24 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:items-center lg:gap-24 lg:px-12 lg:py-32">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[30px] bg-gradient-to-br from-violet-200 via-blue-100 to-teal-100 blur-xl opacity-70" />
          <div className="relative overflow-hidden rounded-[26px] bg-[#17151e] p-8 text-white sm:p-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-2xl font-semibold">
              D.
            </div>
            <p className="mt-12 text-xs font-medium uppercase tracking-[0.2em] text-violet-300">
              The person behind the code
            </p>
            <p className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
              Learn.
              <br />
              Build.
              <br />
              Improve.
            </p>
            <div className="mt-8 h-px bg-white/15" />
            <p className="mt-4 text-xs leading-6 text-gray-400">
              Self-taught developer · Problem solver · AI enthusiast
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
            A little about me
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-5xl">
            Curiosity drives
            <br />
            <span className="text-gray-400">the work.</span>
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-sm leading-8 text-gray-600 sm:text-base">
            <p>
              I&apos;m Desmond Oluwapelumi, a self-taught developer based in Nigeria.
              I enjoy turning ideas into working digital experiences and
              learning how technology can solve everyday problems.
            </p>
            <p>
              My work spans frontend development, product experiments, and
              exploring AI. I&apos;m especially interested in the details that make
              a product feel clear, useful, and easy to navigate.
            </p>
            <p>
              I&apos;m still growing, and I believe in showing my work honestly,
              learning from feedback, and making each iteration better than
              the last.
            </p>
          </div>
          <a
            href="https://github.com/dessyjnr"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-violet-700"
          >
            Explore my GitHub <ArrowIcon diagonal />
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#17151e] px-6 py-14 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -right-20 -top-36 h-96 w-96 rounded-full border border-white/[0.08]" />
          <div className="pointer-events-none absolute -right-5 -top-20 h-72 w-72 rounded-full border border-white/[0.08]" />
          <div className="pointer-events-none absolute bottom-0 right-20 h-48 w-48 rounded-full bg-violet-600/20 blur-[80px]" />

          <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
                Have a project in mind?
              </p>
              <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-6xl">
                Let&apos;s build something
                <br />
                <span className="text-gray-400">worth using.</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
                Have an idea, need a website, or want to discuss a project?
                I&apos;d be glad to hear what you&apos;re working on.
              </p>
            </div>

            <a
              href="https://github.com/dessyjnr"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#17151e] transition-all duration-300 hover:-translate-y-1 hover:bg-violet-100"
            >
              Connect with me <ArrowIcon diagonal />
            </a>
          </div>

          <div className="relative mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs text-gray-400">
            <a className="transition-colors hover:text-white" href="https://github.com/dessyjnr" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>

            <a className="transition-colors hover:text-white" href="https://wa.me/2348182831741?text=${Hello Desmond, I have Project i would want you to have a look at if you don't mind}" target="_blank" rel="noopener noreferrer">
              Whatsapp me ↗
            </a>

            <a className="transition-colors hover:text-white" href="https://desmond-portfolio-v3.vercel.app/" target="_blank" rel="noopener noreferrer">
              Previous portfolio ↗
            </a>
            <span>Available for suitable projects</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>
            © 2026 DESSICORE TECHNOLOGIES
          </p>
          <p>Secure technology. Intelligent systems. Built for what&apos;s next.</p>
          <a href="#home" className="font-medium transition-colors hover:text-violet-700">
            Back to top ↑
          </a>
        </div>
      </footer>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        .hero-enter {
          animation: heroReveal 800ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
        }

        .hero-enter:nth-child(2) {
          animation-delay: 100ms;
        }

        .hero-enter:nth-child(3) {
          animation-delay: 200ms;
        }

        .float-card {
          animation: floatCard 5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
