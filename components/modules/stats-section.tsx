import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Briefcase, Rocket, Star } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "2+",
    label: "Years Experience",
    iconColor: "text-orange-900/90",
    valueColor: "text-[#B794F4]",
  },
  {
    icon: Rocket,
    value: "20+",
    label: "Projects Completed",
    iconColor: "text-rose-500",
    valueColor: "text-[#B794F4]",
  },
  {
    icon: Star,
    value: "100%",
    label: "Client Satisfaction",
    iconColor: "text-yellow-400",
    valueColor: "text-[#B794F4]",
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
        <div className="text-center space-y-3 flex flex-col items-center mb-10 px-6 sm:px-5">
          <p className="text-base sm:text-lg md:text-xl font-medium text-zinc-400 tracking-[0.2em] capitalize">
            <span className="text-purple-400">{">"}</span> Technologies I work
            with
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white">
            <span className="text-purple-400">Stats & Tools</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 capitalize text-center max-w-lg">
            A collection of technologies and tools I use to build modern web
            applications
          </p>
        </div>
        <div className="px-6 sm:px-5 py-20">
          <div className="flex flex-wrap justify-center lg:justify-start items-stretch gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex-1">
                <Card className="group bg-transparent border border-white/10 hover:bg-white/10 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 h-full p-8 rounded-lg flex flex-col items-center justify-center">
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
