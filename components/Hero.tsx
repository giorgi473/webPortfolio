import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="mt-7 px-6 sm:px-5">
      <div className="relative z-10 flex min-h-screen flex-col justify-evenly">
        <p className="text-sm font-mono text-sky-300">
          {"<"} Hi, my name is {"/>"}
        </p>
        <h1 className="leading-none">
          <span className="block text-[50px] sm:text-[52px] font-extrabold text-sky-300 md:text-[66px] lg:text-[86px] 2xl:text-[112px]">
            GIORGI
          </span>
          <span className="block text-[50px] sm:text-[52px] font-extrabold text-sky-300 md:text-[66px] lg:text-[86px] 2xl:text-[112px]">
            KAVTARADZE
          </span>
        </h1>
        <p className="text-4xl font-semibold text-sky-300 md:text-5xl">
          Developer
        </p>
        <p className="max-w-2xl text-lg text-slate-200">
          Developer specializing in Next.js, React, and TypeScript. I build
          clean, fast, and modern web apps with a focus on smooth user
          experiences. Currently working on large-scale projects with a team,
          solving real problems and learning every day. Exploring backend
          development to become a well-rounded developer.
        </p>
        <div className="flex gap-6">
          <Button
            variant="secondary2"
            size="lg"
            className="px-10 bg-sky-500 hover:bg-sky-400 text-white"
          >
            View Work
          </Button>
          <Button
            variant="primary"
            size="lg"
            className="px-10 border border-sky-400/60 bg-transparent text-sky-300 hover:bg-sky-500/10"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
