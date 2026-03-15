import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Briefcase, Rocket, Star } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "2+",
    label: "Years Experience",
    iconColor: "text-orange-900/90",
    valueColor: "text-[#4FD1C5]",
  },
  {
    icon: Rocket,
    value: "20+",
    label: "Projects Completed",
    iconColor: "text-rose-500",
    valueColor: "text-[#63B3ED]",
  },
  {
    icon: Star,
    value: "100%",
    label: "Client Satisfaction",
    iconColor: "text-yellow-400",
    valueColor: "text-[#48BB78]",
  },
  {
    icon: BookOpen,
    value: "24/7",
    label: "Always Learning",
    iconColor: "text-blue-500",
    valueColor: "text-[#B794F4]",
  },
];

export function StatsSection() {
  return (
    <>
      <div className="w-full select-none">
        <div className="px-6 lg:px-0 py-20">
          <div className="flex flex-wrap justify-center lg:justify-start items-stretch gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex-1">
                <Card className="group bg-[#0f1115]/50 border border-white/10 hover:bg-white/10 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 h-full p-8 rounded-lg flex flex-col items-center justify-center">
                  <CardContent className="flex flex-col items-center p-0 text-center flex-1 justify-center">
                    <div className="mb-6 lg:mb-8 group-hover:scale-110 transition-all duration-500">
                      <stat.icon
                        className={`w-14 h-14 lg:w-14 lg:h-14 ${stat.iconColor} stroke-[1.5]`}
                      />
                    </div>

                    <h2
                      className={`text-4xl lg:text-6xl font-black mb-4 lg:mb-6 tracking-tighter ${stat.valueColor} drop-shadow-2xl leading-none`}
                    >
                      {stat.value}
                    </h2>

                    <p className="text-gray-300 text-sm lg:text-base font-semibold tracking-widest uppercase opacity-90">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
