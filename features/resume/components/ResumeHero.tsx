import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IoIosMailUnread } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FcElectricity } from "react-icons/fc";
import Experience from "@/features/resume/components/Experience";
import Skills from "@/features/resume/components/Skills";
import Languages from "@/features/resume/components/Languages";
import Connect from "@/features/resume/components/Connect";

export default function ResumeHero() {
  return (
    <div className="w-full text-slate-100 flex items-center justify-center px-6 sm:px-5 pt-32">
      <div className="w-full max-w-5xl space-y-20">
        <div className="mb-6 text-sm text-slate-400 text-center">
          <p className="text-zinc-400 font-mono text-lg mb-2 flex items-center justify-center gap-3 capitalize">
            <span className="text-cyan-400">{">"}</span>
            {"resume"}
          </p>
        </div>
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.15em] text-cyan-300 uppercase">
            GIORGI KAVTARADZE
          </h1>
          <p className="mt-4 text-lg sm:text-2xl font-bold text-cyan-300">
            Developer (Next.js &amp; API Integration)
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300 select-none">
            <span className="flex items-center gap-1">
              <span className="text-cyan-400">
                <FcElectricity size={"18"} />
              </span>
              Tbilisi
            </span>
            <span className="flex items-center gap-1">
              <span className="text-cyan-400">
                <FaPhoneSquareAlt size={18} />
              </span>
              +995 599 71 57 01
            </span>
            <Link
              href="https://e.mail.ru/compose/?to=giorgi.kavtaradze2000@mail.ru"
              target="_blank"
              className="flex items-center gap-1 hover:text-cyan-300 transition-colors"
            >
              <span className="text-cyan-400">
                <IoIosMailUnread size={21} />
              </span>
              giorgi.kavtaradze2000@mail.ru
            </Link>
          </div>
        </header>
        <Card className="border bg-zinc-950 rounded-md">
          <CardHeader className="px-7">
            <CardTitle className="text-2xl font-bold text-cyan-400">
              About
            </CardTitle>
          </CardHeader>
          <CardContent className="py-2 space-y-4 text-xl leading-relaxed text-slate-200 px-7">
            <p>
              Hi, I'm Giorgi 👋. I'm a developer who mainly works with Next.js,
              React, and TypeScript. I enjoy building clean, fast, and modern
              web apps, and I'm always trying to improve the way I write code
              and structure projects 💻.
            </p>
            <p>
              For the past 6–7 months, I've been working on a large-scale social
              app with a team that includes a backend developer, a designer, and
              testers. I collaborate closely with the team every day, building
              real features 🚀, solving problems 🛠️, and learning how to work
              efficiently in a team environment 🤝.
            </p>
            <p>
              Right now, I&apos;m focused on getting even better with Next.js,
              improving my TypeScript skills, and building projects that feel
              smooth, clean, and enjoyable to use ✨. I like staying curious,
              learning new things 📚, and pushing myself with every project I
              take on.
            </p>
            <p>
              With nearly four years of hands-on experience, I specialize in
              building dynamic, responsive, and scalable web applications. I'm
              skilled in full-stack development using Next.js, including backend
              logic, authentication (Clerk, NextAuth), and database integration
              (MongoDB, Firebase). I deliver high-quality solutions through
              clean code, performance optimization, and continuous learning.
            </p>
          </CardContent>
        </Card>
        <Experience />
        <Skills />
        <Languages />
        <Connect />
      </div>
    </div>
  );
}
