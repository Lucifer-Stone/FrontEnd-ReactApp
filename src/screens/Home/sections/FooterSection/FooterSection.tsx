import { ExternalLinkIcon } from "lucide-react";
import React from "react";

// Define data for the marquee items
const marqueeItems = [
  {
    text: "WEBFLOW",
    hasStarAfter: true,
    starSrc: "https://c.animaapp.com/mc18vva6MDhDAv/img/star.svg",
  },
  {
    text: "FIGMA",
    hasStarAfter: true,
    starSrc: "https://c.animaapp.com/mc18vva6MDhDAv/img/star-8.svg",
  },
  {
    text: "DESIGNER",
    hasStarAfter: true,
    starSrc: "https://c.animaapp.com/mc18vva6MDhDAv/img/star.svg",
  },
  { text: "DEVELOPER", hasStarAfter: false, starSrc: "" },
];

// Define social links
const socialLinks = ["Dribbble", "Behance", "Twitter", "Instagram"];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-start px-[100px] py-0 bg-dark w-full">
      <div className="flex flex-col w-full items-center justify-end pt-16 pb-0">
        {/* Marquee text banner */}
        <div className="flex items-center justify-center gap-10 overflow-x-auto w-full">
          {marqueeItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="[-webkit-text-stroke:2px_#cacaca] font-heading-h1 font-bold text-transparent text-[56px] tracking-[0] leading-[88px] whitespace-nowrap">
                {item.text}
              </div>

              {item.hasStarAfter && (
                <div className="relative w-16 h-16">
                  <img
                    className="absolute w-[53px] h-14 top-1 left-[5px]"
                    alt="Star"
                    src={item.starSrc}
                  />
                </div>
              )}
            </React.Fragment>
          ))}

          <div className="relative w-10 h-10 overflow-hidden">
            <img
              className="absolute w-[35px] h-[35px]"
              alt="Star"
              src="https://c.animaapp.com/mc18vva6MDhDAv/img/star.svg"
            />
          </div>
        </div>

        {/* Contact section */}
        <div className="flex w-full max-w-[1240px] items-end justify-center pt-28 pb-8">
          <div className="flex flex-col items-center justify-center gap-8 w-full">
            <div className="flex flex-col items-center gap-8 max-w-[656px]">
              <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] whitespace-nowrap">
                LET&apos;S TALK!
              </h1>

              <div className="flex items-center justify-center gap-2">
                <p className="font-body-lead font-[number:var(--body-lead-font-weight)] text-white text-[length:var(--body-lead-font-size)] tracking-[var(--body-lead-letter-spacing)] leading-[var(--body-lead-line-height)]">
                  rehanurraihan@gmail.com
                </p>
                <ExternalLinkIcon className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Footer bottom section */}
            <div className="flex w-full max-w-[1240px] items-end justify-between">
              <div className="flex items-center gap-2">
                <p className="font-body-syne font-[number:var(--body-syne-font-weight)] text-white text-[length:var(--body-syne-font-size)] tracking-[var(--body-syne-letter-spacing)] leading-[var(--body-syne-line-height)] whitespace-nowrap">
                  © Rehan Raihan - 2023
                </p>
              </div>

              <div className="flex items-start gap-8">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-body-syne font-[number:var(--body-syne-font-weight)] text-white text-[length:var(--body-syne-font-size)] tracking-[var(--body-syne-letter-spacing)] leading-[var(--body-syne-line-height)] whitespace-nowrap hover:text-gray transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
