import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialSection = (): JSX.Element => {
  const testimonialData = {
    title: "What they say",
    testimonial: {
      author: "Floyd Miles",
      company: "eBay",
      content:
        "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
      avatar: "https://c.animaapp.com/mc18vva6MDhDAv/img/frame.png",
    },
  };

  return (
    <section className="flex flex-col items-start px-6 py-16 md:px-[100px] relative self-stretch w-full">
      <div className="flex flex-col max-w-[1240px] items-center justify-end gap-8 w-full mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 relative self-stretch w-full">
          <img
            className="relative w-[30px] h-8"
            alt="Star"
            src="https://c.animaapp.com/mc18vva6MDhDAv/img/star.svg"
          />
          <h3 className="font-heading-h3-bold font-[number:var(--heading-h3-bold-font-weight)] text-white text-[length:var(--heading-h3-bold-font-size)] tracking-[var(--heading-h3-bold-letter-spacing)] leading-[var(--heading-h3-bold-line-height)] [font-style:var(--heading-h3-bold-font-style)]">
            {testimonialData.title}
          </h3>
        </div>

        {/* Testimonial Content */}
        <Card className="bg-transparent border-0 w-full">
          <CardContent className="flex flex-col md:flex-row items-start md:items-center gap-8 p-0 py-4">
            {/* Author Info */}
            <div className="flex flex-col w-full md:w-[498px] items-start gap-1 py-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 rounded-full">
                  <AvatarImage
                    src={testimonialData.testimonial.avatar}
                    alt={testimonialData.testimonial.author}
                  />
                  <AvatarFallback>
                    {testimonialData.testimonial.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start gap-1">
                  <h5 className="font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-white text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                    {testimonialData.testimonial.author}
                  </h5>
                  <p className="font-body-lead font-[number:var(--body-lead-font-weight)] text-gray text-[length:var(--body-lead-font-size)] tracking-[var(--body-lead-letter-spacing)] leading-[var(--body-lead-line-height)] [font-style:var(--body-lead-font-style)]">
                    {testimonialData.testimonial.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="flex flex-wrap items-end gap-[8px] pt-8 pb-0 relative">
              <div className="relative w-[113px] h-24 -top-4 left-0">
                <img
                  className="absolute w-[102px] h-[85px] top-1.5 left-1.5"
                  alt="Quote decoration"
                  src="https://c.animaapp.com/mc18vva6MDhDAv/img/group-3.png"
                />
              </div>
              <div className="flex flex-col w-full md:w-[710px] items-start gap-4 relative rounded-3xl">
                <h4 className="font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-white text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
                  {testimonialData.testimonial.content}
                </h4>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Decorative Elements */}
        <div className="flex flex-col items-end justify-end">
          <div className="flex items-start gap-4">
            <img
              className="relative w-[88px] h-[88px] mt-[-8px] mb-[-40px] ml-[-20px]"
              alt="Decorative frame"
              src="https://c.animaapp.com/mc18vva6MDhDAv/img/frame-4.svg"
            />
            <img
              className="relative w-[104px] h-[104px] mt-[-16px] mb-[-48px] mr-[-36px]"
              alt="Decorative frame"
              src="https://c.animaapp.com/mc18vva6MDhDAv/img/frame-3.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
