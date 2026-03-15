import Link from "next/link";
import Wrapper from "@/components/shared/Wrapper";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Logo from "@/components/Logo";

function Header() {
  return (
    <header className="bg-black/90 fixed top-0 w-full z-50 py-6">
      <ScrollProgress />
      <Wrapper className="mx-auto">
        <nav className="flex items-center justify-between">
          <div className="text-white">
            <Logo />
          </div>
          <ul className="flex items-center gap-12 select-none text-zinc-300">
            <li>
              <Link href={""}>Home</Link>
            </li>
            <li>
              <Link href={""}>Work</Link>
            </li>
            <li>
              <Link href={""}>Skills</Link>
            </li>
            <li>
              <Link href={""}>Contact</Link>
            </li>
            <li>
              <Link href={"/resume"}>Resume</Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </header>
  );
}

export default Header;
