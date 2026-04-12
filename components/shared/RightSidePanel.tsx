"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { panelButtons } from "@/constants/panel";
import { PanelButton } from "@/types/types";

const SCROLL_TARGET_KEY = "scroll-target-section";


export default function RightSidePanel() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = useMemo(
    () =>
      panelButtons.map((b) => ({
        id: b.id,
        label: b.label,
        path: b.href,
      })),
    []
  );

  const [activeSection, setActiveSection] = useState<string>("home");
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

  const handlePanelClick = (button: PanelButton) => {
    if (button.id === "resume") {
      setActiveSection("resume");
      router.push("/resume");
      return;
    }

    if (pathname === "/") {
      scrollToSection(button.id);
      return;
    }

    setActiveSection(button.id);
    window.sessionStorage.setItem(SCROLL_TARGET_KEY, button.id);
    router.push("/");
  };

  const getActiveNavItem = () => {
    if (pathname === "/resume") return "resume";
    return activeSection;
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      <motion.div
        className="flex flex-col overflow-hidden rounded-l-sm bg-transparent"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.1 }}
      >
        {panelButtons.map((button, index) => {
          const isActive = getActiveNavItem() === button.id;

          return (
            <motion.div
              key={button.id}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.1 + index * 0.1 }}
              className={
                index < panelButtons.length - 1
                  ? "border-b border-zinc-700/30"
                  : ""
              }
            >
              <Tooltip>
                <TooltipTrigger
                  onClick={() => handlePanelClick(button)}
                  className="group relative block cursor-pointer focus:outline-none"
                  aria-label={button.label}
                >
                  <div className="relative w-12 h-12 md:w-14 md:h-14 bg-linear-to-br from-purple-900 to-purple-900 hover:from-purple-900 hover:to-purple-900 transition-all duration-100 flex items-center justify-center">
                    <div
                      className={[
                        "group-hover:scale-110 transition-transform duration-100",
                        isActive ? "text-black" : "text-zinc-200",
                      ].join(" ")}
                    >
                      {button.icon}
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="left"
                  sideOffset={14}
                  className="bg-purple-900 text-zinc-200 py-2.5 px-5"
                >
                  {button.label}
                </TooltipContent>
              </Tooltip>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}



