import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ResumeActions from "./ResumeActions";

const contactLinks = [
  {
    label: "Email",
    value: "giorgi.kavtaradze2000@mail.ru",
    href: "https://e.mail.ru/compose/?to=giorgi.kavtaradze2000@mail.ru",
    color: "cyan",
    icon: <MdEmail size={18} />,
  },
  {
    label: "GitHub",
    value: "github.com/giorgi473",
    href: "https://github.com/giorgi473",
    color: "purple",
    icon: <FaGithub size={18} />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/giorgi-kavtaradze",
    href: "https://www.linkedin.com/in/giorgi-kavtaradze-52b095370/",
    color: "sky",
    icon: <FaLinkedin size={18} />,
  },
  {
    label: "Twitter / X",
    value: "@giorgi",
    href: "https://twitter.com/username",
    color: "cyan",
    icon: <FaXTwitter size={18} />,
  },
];

const colorMap: Record<
  string,
  {
    icon: string;
    label: string;
    value: string;
    bg: string;
    border: string;
    hover: string;
  }
> = {
  cyan: {
    icon: "text-cyan-400",
    label: "text-slate-400",
    value: "text-zinc-100",
    bg: "bg-cyan-950/30",
    border: "border-cyan-500/20",
    hover: "hover:border-cyan-500/50",
  },
  purple: {
    icon: "text-violet-400",
    label: "text-slate-400",
    value: "text-zinc-100",
    bg: "bg-violet-950/20",
    border: "border-violet-500/20",
    hover: "hover:border-violet-500/50",
  },
  sky: {
    icon: "text-sky-400",
    label: "text-slate-400",
    value: "text-zinc-100",
    bg: "bg-sky-950/20",
    border: "border-sky-500/20",
    hover: "hover:border-sky-500/50",
  },
};

function ContactItem({
  label,
  value,
  href,
  color,
  icon,
}: (typeof contactLinks)[0]) {
  const c = colorMap[color] ?? colorMap.cyan;
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 rounded-md border px-4 py-3 transition-colors duration-200 ${c.bg} ${c.border} ${c.hover}`}
    >
      <span className={`${c.icon} shrink-0`}>{icon}</span>
      <div className="flex flex-col min-w-0">
        <span
          className={`text-[11px] uppercase tracking-widest font-mono ${c.label}`}
        >
          {label}
        </span>
        <span className={`text-sm font-semibold truncate ${c.value}`}>
          {value}
        </span>
      </div>
    </Link>
  );
}

function Connect() {
  return (
    <>
      <Card className="border border-slate-800 bg-zinc-950 rounded-md">
        <CardHeader className="px-7">
          <CardTitle className="text-2xl font-bold text-cyan-400">
            Contact
          </CardTitle>
        </CardHeader>
        <CardContent className="px-7 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactLinks.map((item) => (
              <ContactItem key={item.label} {...item} />
            ))}
          </div>
        </CardContent>
      </Card>
      <ResumeActions />
    </>
  );
}

export default Connect;
