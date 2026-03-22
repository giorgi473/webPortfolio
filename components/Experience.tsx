"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { IconType } from "react-icons";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "@/app/styles";
import { experiences } from "@/constants/index";

type Experience = {
  title: string;
  company_name: string;
  icon: IconType;
  iconBg: string;
  date: string;
  points: string[];
};

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const Icon = experience.icon;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(107, 29, 208, 0.2)",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #020618" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Icon size="60%" />
        </div>
      }
    >
      <div>
        <h3 className="text-purple-400 text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-zinc-400 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-purple-400`}>
          Work Experience.
        </h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
