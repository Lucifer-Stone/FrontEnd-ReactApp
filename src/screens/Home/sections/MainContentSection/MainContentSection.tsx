import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Define experience data for mapping
const experienceData = [
  {
    title: "Lead Product Designer",
    company: "Fortknox",
    period: "Mar 2022 - Oct 2023",
  },
  {
    title: "Intern Designer",
    company: "OmniSafe",
    period: "Mar 2022 - Oct 2023",
  },
  {
    title: "UI Designer",
    company: "Doradesign",
    period: "Mar 2022 - Oct 2023",
  },
  {
    title: "Frontend Developer",
    company: "OpacityAuthor",
    period: "Mar 2022 - Oct 2023",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start px-[100px] py-16 w-full">
      <div className="flex flex-col max-w-[1240px] items-center justify-end gap-8 w-full">
        <div className="flex items-center gap-2 self-stretch w-full">
          <img
            className="w-[30.43px] h-8"
            alt="Star"
            src="https://c.animaapp.com/mc18vva6MDhDAv/img/star.svg"
          />
          <h2 className="font-heading-h3-bold font-[number:var(--heading-h3-bold-font-weight)] text-white text-[length:var(--heading-h3-bold-font-size)] tracking-[var(--heading-h3-bold-letter-spacing)] leading-[var(--heading-h3-bold-line-height)] [font-style:var(--heading-h3-bold-font-style)]">
            Experience
          </h2>
        </div>

        <Card className="w-full bg-transparent border-none">
          <CardContent className="p-0">
            {experienceData.map((experience, index) => (
              <div key={index} className="w-full">
                <div className="flex items-center justify-between px-0 py-2 border-b-[1.5px] border-[#ffffff80]">
                  <div className="flex w-[604px] items-center gap-4">
                    <h3 className="font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-white text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] whitespace-nowrap [font-style:var(--heading-h4-font-style)]">
                      {experience.title}
                    </h3>
                  </div>
                  <div className="flex flex-col items-end justify-center gap-2 flex-1">
                    <h4 className="self-stretch font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-white text-[length:var(--heading-h5-font-size)] text-right tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                      {experience.company}
                    </h4>
                    <p className="self-stretch font-body-base-regular font-[number:var(--body-base-regular-font-weight)] text-white text-[length:var(--body-base-regular-font-size)] text-right tracking-[var(--body-base-regular-letter-spacing)] leading-[var(--body-base-regular-line-height)] [font-style:var(--body-base-regular-font-style)]">
                      {experience.period}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
