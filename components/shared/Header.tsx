"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Wrapper from "@/components/shared/Wrapper";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Logo from "@/components/Logo";
import { Menu, X } from "lucide-react"; // ან შეგიძლია react-icons

const SCROLL_TARGET_KEY = "scroll-target-section";

function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = useMemo(
    () => [
      { id: "home", label: "Home", path: "/" },
      { id: "stats", label: "Stats", path: "/" },
      { id: "work", label: "Work", path: "/" },
      { id: "skills", label: "Skills", path: "/" },
      { id: "contact", label: "Contact", path: "/" },
      { id: "resume", label: "Resume", path: "/resume" },
    ],
    [],
  );

  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isClickScrolling = useRef(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 100;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    isClickScrolling.current = true;
    setActiveSection(id);

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 700);
  };

  // scroll tracking მხოლოდ "/"-ზე
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;
      if (pathname !== "/") return;

      const scrollY = window.scrollY;
      const offset = 120;

      let found: string | null = null;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        const top = el.offsetTop - offset;
        const bottom = top + el.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          found = item.id;
          break;
        }
      }

      if (found && found !== activeSection) {
        setActiveSection(found);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems, activeSection, pathname]);

  // როცა home-ზე დავბრუნდებით, ვამოწმებთ sessionStorage-ს
  useEffect(() => {
    if (pathname !== "/") return;

    const target = window.sessionStorage.getItem(SCROLL_TARGET_KEY);

    if (target) {
      window.sessionStorage.removeItem(SCROLL_TARGET_KEY);
      setTimeout(() => {
        scrollToSection(target);
      }, 100);
    } else {
      setActiveSection("home");
    }
  }, [pathname]);

  const handleLogoClick = () => {
    if (pathname !== "/") {
      window.sessionStorage.setItem(SCROLL_TARGET_KEY, "home");
      setActiveSection("home");
      router.push("/");
    } else {
      scrollToSection("home");
    }
  };

  // მთავარი: ნავიგაციის click
  const handleNavClick = (item: { id: string; path: string }) => {
    setIsMobileMenuOpen(false); // მობილურ მენიუს დახურვა

    if (item.path === "/resume") {
      setActiveSection("resume");
      router.push("/resume");
      return;
    }

    // თუ უკვე "/"-ზე ვართ, უბრალოდ scroll
    if (pathname === "/") {
      scrollToSection(item.id);
      return;
    }

    // თუ სხვა გვერდზე ვართ (მაგ: /resume):
    // 1) ვინახავთ რომ უნდა წავიდეთ ამ სექციაზე
    // 2) გადავდივართ "/"-ზე
    setActiveSection(item.id);
    window.sessionStorage.setItem(SCROLL_TARGET_KEY, item.id);
    router.push("/");
  };

  const getActiveNavItem = () => {
    if (pathname === "/resume") return "resume";
    return activeSection;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black/90 fixed top-0 w-full z-50 py-4 md:py-6 backdrop-blur-md">
      <ScrollProgress />
      <Wrapper className="mx-auto px-5 sm:px-4 inset-0">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="text-white cursor-pointer shrink-0"
            onClick={handleLogoClick}
          >
            <Logo />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-12 select-none text-zinc-300">
            {navItems.map((item) => {
              const isActive = getActiveNavItem() === item.id;

              if (item.path === "/resume") {
                return (
                  <li key={item.id}>
                    <Link
                      href="/resume"
                      onClick={() => setActiveSection("resume")}
                      className={[
                        "inline-block px-2 pb-0.5 border-b-3 transition-colors cursor-pointer text-sm lg:text-base",
                        isActive
                          ? "text-cyan-400 border-cyan-400"
                          : "border-transparent hover:border-cyan-400 hover:text-white",
                      ].join(" ")}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item)}
                    className={[
                      "inline-block px-2 pb-0.5 border-b-3 transition-colors cursor-pointer text-sm lg:text-base",
                      isActive
                        ? "text-cyan-400 border-cyan-400"
                        : "border-transparent hover:border-cyan-400 hover:text-white",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -mr-1 rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center justify-center w-10 h-10"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "დახურვა" : "მენიუ"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 pt-2 border-t border-white/10 animate-in slide-in-from-top-4 duration-300">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = getActiveNavItem() === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(item)}
                      className={[
                        "w-full text-left py-3 px-4 rounded-md text-lg transition-all duration-200 flex items-center gap-3",
                        isActive
                          ? "bg-linear-to-r from-cyan-400/20 to-cyan-500/20 text-cyan-400 border-b-2 border-cyan-400 shadow-lg"
                          : "hover:bg-white/10 hover:text-white hover:translate-x-1",
                      ].join(" ")}
                    >
                      <div
                        className={`w-3 h-3 rounded-full transition-all ${isActive ? "bg-cyan-400 scale-125" : "bg-zinc-400/30 ring-2 ring-cyan-400"}`}
                      />
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </Wrapper>
    </header>
  );
}

export default Header;
