"use client";

import Hero from "@/components/Hero";
import LogoLoop from "@/components/LogoLoop";
import Wrapper from "@/components/shared/Wrapper";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

const imageLogos = [
  {
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];
function PortfolioPage() {
  return (
    <Wrapper className="mx-auto">
      <div className="text-white">
        <article>
          <section>
            <Hero />
          </section>
          <div className="mt-80">
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={60}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              ariaLabel="Technology partners"
            />
          </div>
        </article>
      </div>
    </Wrapper>
  );
}

export default PortfolioPage;
