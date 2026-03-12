import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import Hero from "@/components/Hero";
import LogoLoop from "@/components/LogoLoop";
import { TerminalDemo } from "@/components/modules/TerminalDemo";
import Wrapper from "@/components/shared/Wrapper";
import { PartyPopperIcon } from "@/components/ui/party-popper";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import DottedDivider from "@/components/modules/DottedDivider";
import ScrollIndicator from "@/components/modules/ScrollIndicator";

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
            <TerminalDemo />
            <div className="space-y-20">
              <ShimmerButton className="shadow-2xl">
                <span className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-lg dark:from-white dark:to-slate-900/10">
                  Available for projects
                </span>
              </ShimmerButton>
              <div>
                <div className="flex items-center gap-1 text-xl text-zinc-400 transition-all duration-200 ease-in-out">
                  <span>
                    <PartyPopperIcon />
                  </span>
                  <span className="hover:bg-sky-500/20 px-3 py-0.5">React</span>
                  <span className="hover:bg-sky-500/20 px-3 py-0.5">
                    Next.js
                  </span>
                  <span className="hover:bg-sky-500/20 px-3 py-0.5">
                    TypeScript
                  </span>
                  <span className="hover:bg-sky-500/20 px-3 py-0.5">
                    Team Collaboration
                  </span>
                </div>
              </div>
              <div className="-mt-40 mb-24 flex justify-center select-none">
                 <ScrollIndicator />
              </div>
              <DottedDivider />
            </div>
          </section>
          <section className="mt-80">
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
          </section>
        </article>
      </div>
    </Wrapper>
  );
}

export default PortfolioPage;
