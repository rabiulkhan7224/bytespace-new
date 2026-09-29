export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[720px] overflow-hidden bg-[#1239d8]"
    >
      {/* Decorative shapes */}
      <div className="absolute left-[-40px] top-32 h-28 w-28 rotate-12 rounded-[30px] bg-lime-300 opacity-90" />

      <div className="absolute right-[-30px] top-28 h-32 w-32 rotate-45 rounded-[35px] bg-lime-300 opacity-90" />

      <div className="absolute bottom-20 left-[8%] h-20 w-20 rotate-12 rounded-full border-[18px] border-white/90" />

      <div className="absolute right-[10%] top-[45%] h-24 w-24 rounded-[25px] bg-pink-500/90 rotate-12" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 pt-28 lg:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-semibold text-lime-300">
                Learn. Build. Grow.
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Get Access to <span className="text-lime-300">Hundreds</span> of
              Courses Available
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-blue-100 sm:text-lg">
              Discover practical courses, learn from experienced creators, build
              valuable skills, and take the next step in your professional
              journey.
            </p>

            {/* Search */}
            <div className="mt-8 flex max-w-xl flex-col gap-3 rounded-2xl bg-white p-2 shadow-2xl sm:flex-row">
              <input
                type="text"
                placeholder="What do you want to learn?"
                className="min-w-0 flex-1 rounded-xl px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />

              <button className="rounded-xl bg-lime-300 px-7 py-3 text-sm font-bold text-slate-950 transition hover:bg-lime-200">
                Find Course
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="text-2xl font-black text-white">12K+</p>
                <p className="text-sm text-blue-100">Students</p>
              </div>

              <div>
                <p className="text-2xl font-black text-white">70+</p>
                <p className="text-sm text-blue-100">Courses</p>
              </div>

              <div>
                <p className="text-2xl font-black text-white">55%</p>
                <p className="text-sm text-blue-100">Growth</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden h-[520px] lg:block">
            {/* Main image placeholder */}
            <div className="absolute right-5 top-10 h-[430px] w-[340px] rotate-2 overflow-hidden rounded-[35px] bg-gradient-to-br from-white to-blue-100 shadow-2xl">
              <div className="flex h-full items-end justify-center">
                <div className="mb-10 h-[330px] w-[230px] rounded-t-[120px] bg-gradient-to-b from-orange-200 to-orange-400" />
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute left-0 top-24 rotate-[-6deg] rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-xs font-medium text-slate-500">
                Popular Course
              </p>
              <p className="mt-1 text-sm font-bold text-slate-900">
                Web Development
              </p>
              <span className="mt-2 inline-block rounded-full bg-lime-200 px-3 py-1 text-xs font-bold">
                4.9 ★
              </span>
            </div>

            <div className="absolute bottom-16 right-0 rotate-[-4deg] rounded-2xl bg-white p-5 shadow-xl">
              <p className="text-xs text-slate-500">Students enrolled</p>
              <p className="mt-1 text-2xl font-black text-slate-900">12,000+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
