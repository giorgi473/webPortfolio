import React from "react";

interface StatEntry {
  label: string;
  value: string;
  gradientClass: string;
}

interface HighlightStatsProps {
  data: StatEntry[];
}

const HighlightStats: React.FC<HighlightStatsProps> = ({ data }) => {
  return (
    <section className="w-full pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <span
                className={`text-3xl font-extrabold mb-3 transition-transform duration-300 group-hover:scale-105 ${item.gradientClass}`}
              >
                {item.value}
              </span>
              <span className="text-gray-500 uppercase tracking-[0.2em] text-xs font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightStats;
