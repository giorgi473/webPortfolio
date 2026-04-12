import { Contact, Workflow, Home } from "lucide-react";
import { SiHyperskill } from "react-icons/si";
import { IoMdStats } from "react-icons/io";
import { PanelButton } from "@/types/types";

export const panelButtons: PanelButton[] = [
    {
        id: "home",
        icon: <Home className="w-5 h-5" />,
        href: "/",
        label: "Home",
    },
    {
        id: "stats",
        icon: <IoMdStats className="w-5 h-5" />,
        href: "/",
        label: "Stats",
    },
    {
        id: "work",
        icon: <Workflow className="w-5 h-5" />,
        href: "/",
        label: "Work",
    },
    {
        id: "skills",
        icon: <SiHyperskill className="w-5 h-5" />,
        href: "/",
        label: "Skills",
    },
    {
        id: "contact",
        icon: <Contact className="w-5 h-5" />,
        href: "/",
        label: "Contact",
    },
];