"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

interface CardProps {
  number: string;
  title: string;
  description: string;
  colorTheme?: "orange" | "blue" | "purple";
  rotate?: string;
  colors?: { bg: string; text: string; border: string };
}

const Pin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

const Card = ({ number, title, description, colorTheme = "blue", rotate, colors: customColors }: CardProps) => {
  const defaultBgColors = { orange: "bg-orange-50 dark:bg-orange-500/10", blue: "bg-blue-50 dark:bg-blue-500/10", purple: "bg-purple-50 dark:bg-purple-500/10" };
  const defaultTextColors = { orange: "text-orange-500 dark:text-orange-400", blue: "text-blue-600 dark:text-blue-400", purple: "text-purple-600 dark:text-purple-400" };
  const defaultBorderColors = { orange: "border-orange-100 dark:border-orange-500/20", blue: "border-blue-100 dark:border-blue-500/20", purple: "border-purple-100 dark:border-purple-500/20" };

  const bgColor = customColors?.bg || defaultBgColors[colorTheme];
  const textColor = customColors?.text || defaultTextColors[colorTheme];
  const borderColor = customColors?.border || defaultBorderColors[colorTheme];

  return (
    <div className={`relative w-full transition-transform duration-300 hover:z-30 hover:scale-105 ${rotate}`}>
      <div className="bg-white dark:bg-neutral-900 p-1.5 rounded-[18px] shadow-[0px_6px_14px_0px_#D3D3D3] dark:shadow-none border border-neutral-100 dark:border-neutral-800">
        <Pin className={`w-5 h-5 ${textColor} z-20 mb-2 mx-auto`} />
        <div className={`${bgColor} border ${borderColor} rounded-[12px] p-3 h-full flex flex-col relative overflow-hidden`}>
          <span className={`${textColor} text-2xl font-bold mb-1.5`}>{number}</span>
          <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-100 leading-tight mb-1">{title}</h3>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs tracking-tight leading-snug">{description}</p>
        </div>
      </div>
    </div>
  );
};

export interface Step {
  title: string;
  description: string;
  colorTheme?: "orange" | "blue" | "purple";
  colors?: { bg: string; text: string; border: string };
}

export interface HowItWorksProps {
  features?: Step[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const ROTATES = ["rotate-2", "-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

export default function HowItWorks({
  features,
  title = "How it works",
  subtitle = "Five simple steps to get started.",
  className
}: HowItWorksProps) {
  const defaultFeatures: Step[] = [
    { title: "Submit Application", description: "Fill in student details online or visit our admissions desk.", colorTheme: "orange" },
    { title: "Campus Interaction", description: "Friendly interaction and tour with teachers and school leaders.", colorTheme: "blue" },
    { title: "Document Review", description: "Submit birth certificate, TC, mark sheets, and Aadhaar copy.", colorTheme: "purple" },
    { title: "Enrollment Confirmation", description: "Receive official seat allocation and confirmation kit.", colorTheme: "orange" },
    { title: "Begin School Journey", description: "Attend student orientation, collect uniform & books, and start learning!", colorTheme: "blue" },
  ];

  const data = features && features.length > 0 ? features : defaultFeatures;

  return (
    <LazyMotion features={domAnimation}>
      <section className={`bg-white dark:bg-black py-10 px-6 relative ${className || ""}`}>
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-[0.15]"
          style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px)", backgroundSize: "100% 32px" }}
        />
        <div className="max-w-2xl mx-auto text-center mb-6 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">{title}</h2>
          <p className="text-neutral-500 dark:text-neutral-400 mt-1.5 text-sm">{subtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {data.map((step, index) => (
              <m.div
                key={step.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <Card
                  number={`0${index + 1}`}
                  title={step.title}
                  description={step.description}
                  colorTheme={step.colorTheme || "blue"}
                  colors={step.colors}
                  rotate={ROTATES[index % ROTATES.length]}
                />
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
