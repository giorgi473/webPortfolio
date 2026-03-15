import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiAngular,
} from "react-icons/si";
import Hero from "@/components/Hero";
import LogoLoop from "@/components/LogoLoop";
import { TerminalDemo } from "@/components/modules/TerminalDemo";
import Wrapper from "@/components/shared/Wrapper";
import { PartyPopperIcon } from "@/components/ui/party-popper";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import DottedDivider from "@/components/modules/DottedDivider";
import ScrollIndicator from "@/components/modules/ScrollIndicator";
import FeaturedProjects from "@/components/featured-projects/FeaturedProjects";
import { RiVuejsFill } from "react-icons/ri";
import { DiJsBadge } from "react-icons/di";

const techLogos = [
  { node: <DiJsBadge className="text-yellow-500" />, title: "Js", href: "https://developer.mozilla.org/en-US/" },
  { node: <SiReact className="text-blue-400" />, title: "React", href: "https://react.dev" },
  {
    node: <SiAngular className="text-red-500" />,
    title: "Angular",
    href: "https://angular.dev",
  },
  {
    node: <RiVuejsFill className="text-green-800" />,
    title: "VUE",
    href: "https://vuejs.org",
  },
  { node: <SiNextdotjs className="text-white" />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript className="text-blue-400" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss className="text-blue-400" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiNestjs className="text-red-500" />,
    title: "Tailwind CSS",
    href: "https://nestjs.com",
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
          <section className="mt-28">
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={130}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              ariaLabel="Technology partners"
            />
          </section>
          <section>
            <FeaturedProjects />
          </section>
        </article>
      </div>
    </Wrapper>
  );
}

export default PortfolioPage;
