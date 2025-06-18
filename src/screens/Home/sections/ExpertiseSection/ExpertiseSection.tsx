import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ExpertiseSection = (): JSX.Element => {
  // Data for expertise cards to enable mapping
  const expertiseItems = [
    {
      id: 1,
      title: "Branding",
      icon: "https://c.animaapp.com/mc18vva6MDhDAv/img/frame-5.svg",
      iconSize: { width: 2, height: 7 },
      description:
        "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
      id: 2,
      title: "UI Design",
      icon: "https://c.animaapp.com/mc18vva6MDhDAv/img/frame-5.svg",
      iconSize: { width: 2, height: 7 },
      description:
        "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
      id: 3,
      title: "UX Design",
      icon: "https://c.animaapp.com/mc18vva6MDhDAv/img/frame-1.svg",
      iconSize: { width: 4, height: 4 },
      description:
        "I comprehend and resolve digital product issues using a user-focused methodology. Investigation. compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements",
    },
    {
      id: 4,
      title: "Development",
      icon: "https://c.animaapp.com/mc18vva6MDhDAv/img/frame-5.svg",
      iconSize: { width: 2, height: 7 },
      description:
        "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome. complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites.",
    },
  ];

  return (
    <section className="flex flex-col items-start px-6 py-16 md:px-[100px]">
      <div className="flex flex-col items-center justify-end gap-8 w-full max-w-[1240px] mx-auto">
        <header className="flex items-center gap-2 w-full">
          <img
            className="w-8 h-8"
            alt="Star"
            src="https://c.animaapp.com/mc18vva6MDhDAv/img/star-8.svg"
          />
          <h2 className="font-heading-h3-bold font-[number:var(--heading-h3-bold-font-weight)] text-white text-[length:var(--heading-h3-bold-font-size)] tracking-[var(--heading-h3-bold-letter-spacing)] leading-[var(--heading-h3-bold-line-height)] [font-style:var(--heading-h3-bold-font-style)]">
            Expertise
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full">
          {expertiseItems.map((item) => (
            <Card key={item.id} className="bg-transparent border-0">
              <CardContent className="flex flex-col items-start gap-4 p-0">
                <div className="flex items-center gap-2">
                  <img
                    className={`w-${item.iconSize.width} h-${item.iconSize.height === 7 ? "[7px]" : item.iconSize.height}`}
                    alt="Icon"
                    src={item.icon}
                  />
                  <h3 className="font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-white text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                    {item.title}
                  </h3>
                </div>
                <p className="font-body-base-regular font-[number:var(--body-base-regular-font-weight)] text-gray text-[length:var(--body-base-regular-font-size)] tracking-[var(--body-base-regular-letter-spacing)] leading-[var(--body-base-regular-line-height)] [font-style:var(--body-base-regular-font-style)]">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
