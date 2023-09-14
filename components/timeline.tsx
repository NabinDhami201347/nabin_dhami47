import React from "react";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
}

const educationData: TimelineItemProps[] = [
  {
    date: "2068 - 2077",
    title: "School and College",
    description: "Tilingatar Higher Secondary School.",
  },
  {
    date: "2078 - Present",
    title: "Bachelor in Computer Engineering",
    description: "Nepal College of Information Technology.",
  },
];
const internshipData: TimelineItemProps[] = [
  {
    date: "2075-2077",
    title: "TSLC Computer Engineering CTEVT",
    description: "Tilingatar Higher Secondary School.",
  },
  {
    date: "2076-2077",
    title: "Internship",
    description: "Tilingatar Higher Secondary School.",
  },
];

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, description }) => (
  <li className="ml-4">
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">{date}</time>
    <h3 className="font-semibold">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </li>
);

export const Timeline: React.FC = () => (
  <ul>
    <ol className="relative border-l space-y-4">
      {educationData.map((item, index) => (
        <TimelineItem key={index} date={item.date} title={item.title} description={item.description} />
      ))}
    </ol>
  </ul>
);
export const Internship: React.FC = () => (
  <ul>
    <ol className="relative border-l space-y-4">
      {internshipData.map((item, index) => (
        <TimelineItem key={index} date={item.date} title={item.title} description={item.description} />
      ))}
    </ol>
  </ul>
);
