import React from "react";
import { Button } from "../../../../components/ui/button";

export const NavigationSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", active: true },
    { label: "About", active: false },
    { label: "Projects", active: false },
    { label: "Contact", active: false },
  ];

  return (
    <header className="w-full bg-dark py-8 px-[100px]">
      <nav className="flex items-center justify-between max-w-[1240px] mx-auto">
        {/* Logo */}
        <div className="h-8 w-[46px] relative">
          <div className="absolute w-[9px] h-8 top-0 left-0 bg-white" />
          <div className="absolute w-[9px] h-8 top-0 left-6 bg-white" />
          <div className="absolute w-3 h-3 top-px left-[11px] bg-white rounded-[5.93px]" />
          <div className="absolute w-3 h-3 top-[19px] left-[34px] bg-white rounded-[5.93px]" />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "default" : "ghost"}
              className={`px-6 py-2 rounded-3xl ${
                item.active
                  ? "bg-white text-dark hover:bg-white/90"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <span className="font-['Syne',Helvetica] font-normal text-base leading-5">
                {item.label}
              </span>
            </Button>
          ))}
        </div>

        {/* Hire Me Button */}
        <Button
          variant="outline"
          className="rounded-[100px] border border-white text-white hover:bg-white/10"
        >
          <span className="font-['Syne',Helvetica] font-medium text-sm leading-6">
            HIRE ME
          </span>
        </Button>
      </nav>
    </header>
  );
};
