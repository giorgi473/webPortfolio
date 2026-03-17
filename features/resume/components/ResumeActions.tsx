"use client";

import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ResumeActions() {
  const router = useRouter();

  const handleBackToHome = () => {
    sessionStorage.setItem("scrollToBottom", "true");
    router.push("/");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-32">
      <Button
        onClick={handleBackToHome}
        className={[
          "bg-linear-to-r from-sky-400 to-blue-500",
          "hover:from-sky-300 hover:to-blue-400",
          "text-white font-semibold text-sm tracking-wide",
          "py-6 px-8 rounded-sm capitalize cursor-pointer",
          "border-0 shadow-none",
          "transition-all duration-300",
          "flex items-center gap-2",
        ].join(" ")}
      >
        <FiArrowLeft size={18} />
        Back to Home
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          window.open(
            "https://cloud.mail.ru/attaches/17736050341925636880%3B0%3B1?folder-id=500000&x-email=giorgi.kavtaradze2010%40mail.ru&cvg=f",
            "_blank",
          )
        }
        className={[
          "bg-transparent",
          "hover:bg-cyan-400/10",
          "text-cyan-300 hover:text-cyan-200 font-semibold text-sm tracking-wide",
          "py-6 px-8 rounded-sm capitalize cursor-pointer",
          "border border-cyan-500/60 hover:border-cyan-400",
          "shadow-none",
          "transition-all duration-300",
          "flex items-center gap-2",
        ].join(" ")}
      >
        <FiExternalLink size={18} />
        View External Resume
      </Button>
    </div>
  );
}
