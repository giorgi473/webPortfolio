import Hero from "@/components/Hero";
import LogoLoop from "@/components/LogoLoop";
import { TerminalDemo } from "@/components/modules/TerminalDemo";
import Wrapper from "@/components/shared/Wrapper";
import { PartyPopperIcon } from "@/components/ui/party-popper";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import DottedDivider from "@/components/modules/DottedDivider";
import ScrollIndicator from "@/components/modules/ScrollIndicator";
import FeaturedProjects from "@/components/featured-projects/FeaturedProjects";
import { StatsSection } from "@/components/modules/stats-section";
import SkillsSection from "@/components/modules/SkillsSection";
import { FeatureGrid } from "@/components/modules/feature-grid";
import { techLogos } from "@/components/modules/techLogos";
import ContactSection from "@/components/ContactSection";

function PortfolioPage() {
  return (
    <Wrapper className="mx-auto">
      <div className="text-white">
        <article>
          <section id="home" className="scroll-mt-28">
            <Hero />
            <TerminalDemo />
            <div className="px-6 sm:px-5">
              <div className="flex justify-center select-none cursor-pointer pb-8 lg:pb-0">
                <ScrollIndicator />
              </div>
              <div className="space-y-14">
                <ShimmerButton className="shadow-2xl">
                  <span className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-lg dark:from-white dark:to-slate-900/10">
                    Available for projects
                  </span>
                </ShimmerButton>
                <div>
                  <div className="flex flex-wrap items-center text-xl space-y-4 text-zinc-400 transition-all duration-200 ease-in-out">
                    <span>
                      <PartyPopperIcon />
                    </span>
                    <span className="hover:bg-sky-500/20 px-3 ml-3 py-0.5">
                      React
                    </span>
                    <span className="hover:bg-sky-500/20 px-3 py-0.5">
                      Next.js
                    </span>
                    <span className="hover:bg-sky-500/20 px-3 mr-3 py-0.5">
                      TypeScript
                    </span>
                    <span className="hover:bg-sky-500/20">
                      Team Collaboration
                    </span>
                    <span className="hidden">s</span>
                  </div>
                </div>
                <DottedDivider />
              </div>
            </div>
          </section>
          <section id="stats" className="my-24">
            <StatsSection />
          </section>
          <DottedDivider />
          <section className="mt-40 mb-36">
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
          <DottedDivider />
          <section id="work" className="my-28 scroll-mt-28">
            <FeaturedProjects />
          </section>
          <DottedDivider />
          <section id="skills" className="my-20 scroll-mt-28">
            <SkillsSection />
          </section>
          <DottedDivider />
          <section className="my-16">
            <FeatureGrid />
          </section>
          <DottedDivider />
          <section id="contact" className="my-16 scroll-mt-28">
            <ContactSection />
          </section>
        </article>
      </div>
    </Wrapper>
  );
}

export default PortfolioPage;
