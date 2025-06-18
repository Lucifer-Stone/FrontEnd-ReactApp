import React from "react";

export const HeroSection = (): JSX.Element => {
  // Data for the hero section
  const headlineWords = [
    {
      text: "I AM A",
      hasImage: true,
      imageUrl: "https://c.animaapp.com/mc18vva6MDhDAv/img/rectangle.svg",
    },
    { text: "FREELANCE", hasImage: false },
    {
      text: "DESIGNER",
      hasImage: true,
      imageUrl: "https://c.animaapp.com/mc18vva6MDhDAv/img/rectangle-1.svg",
    },
    { text: "FROM", hasImage: false },
    { text: "SAN FRANCISCO", hasImage: false },
  ];

  const clientLogos = [
    {
      id: 1,
      alt: "Group",
      src: "https://c.animaapp.com/mc18vva6MDhDAv/img/group.png",
      width: "115.44px",
    },
    {
      id: 2,
      alt: "Group",
      src: "https://c.animaapp.com/mc18vva6MDhDAv/img/group-1.png",
      width: "136.36px",
    },
    {
      id: 3,
      alt: "Group",
      src: "https://c.animaapp.com/mc18vva6MDhDAv/img/group-2.png",
      width: "98.91px",
    },
    {
      id: 4,
      alt: "Frame",
      src: "https://c.animaapp.com/mc18vva6MDhDAv/img/frame-2.svg",
      width: "98px",
    },
    {
      id: 5,
      alt: "Convertkit",
      src: "https://c.animaapp.com/mc18vva6MDhDAv/img/convertkit.svg",
      width: "140.46px",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start px-6 md:px-16 lg:px-[100px] py-20 md:py-32 lg:py-44">
      <div className="flex flex-col w-full max-w-[1240px] items-end justify-end gap-16 md:gap-28">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-wrap items-center justify-center gap-[17px] w-full">
            {headlineWords.map((word, index) =>
              word.hasImage ? (
                <div key={index} className="inline-flex items-center gap-2">
                  <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] whitespace-nowrap [font-style:var(--heading-h1-font-style)]">
                    {word.text}
                  </h1>
                  <img
                    className="w-32 h-16"
                    alt="Rectangle"
                    src={word.imageUrl}
                  />
                </div>
              ) : (
                <h1
                  key={index}
                  className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] whitespace-nowrap [font-style:var(--heading-h1-font-style)]"
                >
                  {word.text}
                </h1>
              ),
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end gap-8 w-full">
          <div className="flex w-full md:w-[716px] items-center justify-center gap-2.5 px-8 py-4 overflow-hidden">
            <div className="flex items-start gap-8 md:gap-[136px] overflow-x-auto">
              {clientLogos.map((logo) => (
                <div
                  key={logo.id}
                  className="relative"
                  style={{ width: logo.width, height: "32px" }}
                >
                  <img
                    className="h-full object-contain"
                    alt={logo.alt}
                    src={logo.src}
                  />
                </div>
              ))}
            </div>
          </div>

          <p className="w-full md:w-[492px] font-body-base-regular font-[number:var(--body-base-regular-font-weight)] text-gray text-[length:var(--body-base-regular-font-size)] tracking-[var(--body-base-regular-letter-spacing)] leading-[var(--body-base-regular-line-height)] [font-style:var(--body-base-regular-font-style)]">
            Welcome to my portfolio. Here, artistry meets functionality. Dive
            into a curated showcase of distinctive branding and web designs,
            each crafted to captivate and inspire.
          </p>
        </div>
      </div>
    </section>
  );
};
