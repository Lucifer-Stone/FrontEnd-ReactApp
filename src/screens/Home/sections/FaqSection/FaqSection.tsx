import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const FaqSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "What is your design process?",
      answer:
        "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
    },
    {
      question: "What tools and software do you use for UX design?",
      answer: "",
    },
    {
      question: "How do you measure the success of your UX designs?",
      answer: "",
    },
  ];

  return (
    <section className="flex flex-col items-start px-6 py-16 md:px-[100px]">
      <div className="flex flex-col items-center justify-end gap-8 w-full max-w-[1240px]">
        <div className="flex items-center gap-2 w-full">
          <img
            className="w-[30.43px] h-8"
            alt="Star"
            src="https://c.animaapp.com/mc18vva6MDhDAv/img/star.svg"
          />
          <h2 className="font-heading-h3-bold text-white text-[length:var(--heading-h3-bold-font-size)] tracking-[var(--heading-h3-bold-letter-spacing)] leading-[var(--heading-h3-bold-line-height)] [font-style:var(--heading-h3-bold-font-style)]">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray/20"
            >
              <AccordionTrigger className="font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-white text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)] py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-body-lead font-[number:var(--body-lead-font-weight)] text-gray text-[length:var(--body-lead-font-size)] tracking-[var(--body-lead-letter-spacing)] leading-[var(--body-lead-line-height)] [font-style:var(--body-lead-font-style)] pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
