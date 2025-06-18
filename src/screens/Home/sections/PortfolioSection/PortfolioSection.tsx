import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Portfolio project data for mapping
const portfolioProjects = [
  {
    id: 1,
    title: "Analysis Application",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    image: "https://c.animaapp.com/mc18vva6MDhDAv/img/image-21-2.png",
    tags: ["FIGMA", "UX"],
  },
  {
    id: 2,
    title: "Fortknox Application",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    image: "https://c.animaapp.com/mc18vva6MDhDAv/img/image-21-3.png",
    tags: ["MOBILE", "WEB"],
  },
  {
    id: 3,
    title: "Zenocide Application",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    image: "https://c.animaapp.com/mc18vva6MDhDAv/img/image-21-4.png",
    tags: ["APP", "WEB"],
  },
];

export const PortfolioSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-start px-[100px] py-16 relative">
      <div className="flex flex-col w-full items-center justify-end gap-8">
        <div className="flex items-center justify-between relative w-full">
          <div className="inline-flex items-center gap-2">
            <img
              className="w-[30.43px] h-8"
              alt="Star"
              src="https://c.animaapp.com/mc18vva6MDhDAv/img/star.svg"
            />
            <h2 className="font-heading-h3-bold font-[number:var(--heading-h3-bold-font-weight)] text-white text-[length:var(--heading-h3-bold-font-size)] tracking-[var(--heading-h3-bold-letter-spacing)] leading-[var(--heading-h3-bold-line-height)] [font-style:var(--heading-h3-bold-font-style)]">
              Works
            </h2>
          </div>

          <Button
            variant="link"
            className="font-medium text-white text-lg underline p-0 h-auto [font-family:'Syne',Helvetica]"
          >
            view all
          </Button>
        </div>

        <div className="flex flex-col w-full gap-8">
          {portfolioProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-[#cbcbcb7a] rounded-[40px] overflow-hidden border-none"
            >
              <CardContent className="flex items-end justify-center gap-8 p-8">
                <div className="flex items-start gap-8 w-full relative">
                  <div className="absolute w-[209px] h-[165px] top-[291px] left-[515px] bg-app-accent rounded-[104.5px/82.5px] blur-[150px]" />

                  <img
                    className="w-[572px] h-[429px] object-cover"
                    alt={project.title}
                    src={project.image}
                  />

                  <div className="flex flex-col items-start justify-between flex-1 self-stretch h-full">
                    <div className="flex flex-col items-start gap-4 w-full">
                      <h3 className="font-heading-h3-semibold font-[number:var(--heading-h3-semibold-font-weight)] text-white text-[length:var(--heading-h3-semibold-font-size)] tracking-[var(--heading-h3-semibold-letter-spacing)] leading-[var(--heading-h3-semibold-line-height)] [font-style:var(--heading-h3-semibold-font-style)]">
                        {project.title}
                      </h3>

                      <p className="font-body-lead font-[number:var(--body-lead-font-weight)] text-white text-[length:var(--body-lead-font-size)] tracking-[var(--body-lead-letter-spacing)] leading-[var(--body-lead-line-height)] [font-style:var(--body-lead-font-style)]">
                        {project.description}
                      </p>

                      <div className="flex items-start gap-2">
                        {project.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="px-6 py-2 rounded-[100px] border border-solid border-white bg-transparent"
                          >
                            <span className="font-semibold text-white text-xs leading-normal [font-family:'Syne',Helvetica] tracking-[0]">
                              {tag}
                            </span>
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="px-8 py-4 bg-white text-dark rounded-[100px] border border-solid border-white h-auto">
                      <span className="font-semibold text-sm leading-6 [font-family:'Syne',Helvetica] tracking-[0]">
                        View Case Study
                      </span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
