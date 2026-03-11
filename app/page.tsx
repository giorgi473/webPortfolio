import Hero from "@/components/Hero";
import Wrapper from "@/components/shared/Wrapper";

function PortfolioPage() {
  return (
    <div className="text-white">
      <article>
        <Wrapper  className="mx-auto">
          <section>
            <Hero />
          </section>
        </Wrapper>
      </article>
    </div>
  );
}

export default PortfolioPage;
