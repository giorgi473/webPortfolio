import Wrapper from "@/components/shared/Wrapper";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Logo from "../Logo";

function Header() {
  return (
    <header className="bg-black fixed top-0 w-full z-50 py-5">
      <ScrollProgress />
      <Wrapper className="mx-auto">
        <div className="text-white">
          <Logo />
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
