"use client";

import React from "react";
import { Briefcase, MessageSquare, Calendar, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface PanelButton {
  id: string;
  icon: React.ReactNode;
  href: string;
  label: string;
}

const panelButtons: PanelButton[] = [
  {
    id: "ai-chat",
    icon: <Sparkles className="w-5 h-5" />,
    href: "/ai-chat",
    label: "AI ჩათი",
  },
  {
    id: "services",
    icon: <Briefcase className="w-5 h-5" />,
    href: "/service",
    label: "სერვისები",
  },
  {
    id: "message",
    icon: <MessageSquare className="w-5 h-5" />,
    href: "/contacts",
    label: "კონტაქტები",
  },
  {
    id: "calendar",
    icon: <Calendar className="w-5 h-5" />,
    href: "#",
    label: "მალე დაემატება",
  },
];

export default function RightSidePanel() {
  return (
    <>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <motion.div
          className="flex flex-col overflow-hidden rounded-l-sm bg-zinc-900/80 shadow-2xl shadow-black/30"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          {panelButtons.map((button, index) => (
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
                <TooltipTrigger>
                  <Link
                    href={button.href}
                    className="group relative block cursor-pointer"
                    aria-label={button.label}
                  >
                    <div className="relative w-14 h-14 bg-linear-to-br from-purple-900 to-purple-900 hover:from-purple-900 hover:to-purple-900 transition-all duration-200 flex items-center justify-center">
                      <div className="text-black group-hover:scale-110 transition-transform duration-200">
                        {button.icon}
                      </div>
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="left"
                  sideOffset={12}
                  className="bg-zinc-800 text-white"
                >
                  {button.label}
                </TooltipContent>
              </Tooltip>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Link
        href="/ai-chat"
        aria-label="AI ჩეთის გახსნა"
        className="fixed bottom-24 right-5 z-50 md:hidden"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 to-cyan-400 text-black shadow-lg shadow-black/40">
          <Sparkles className="h-6 w-6" />
        </div>
      </Link>
    </>
  );
}
