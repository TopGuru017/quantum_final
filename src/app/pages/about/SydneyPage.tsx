import React from "react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { SYDNEY, LEADER_ROD } from "../../assets/images";

export function SydneyPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-start px-6 md:px-10 lg:px-16 py-24 md:py-28"
      style={{ backgroundColor: "#e6dfd4" }}
    >
      {/* First div: heading — Industry Authority style */}
      <div className="w-full max-w-6xl mt-24 md:mt-28 mb-16 md:mb-20 px-6 md:px-10 lg:px-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#1c3249] leading-[1.1] tracking-tight">
          Welcome to <em className="font-serif italic">Sydney</em>
        </h1>
      </div>

      {/* Second: image full-width, Third: people card under image */}
      <div className="w-full flex flex-col items-start gap-0 -ml-0">
        {/* Image section */}
        <div className="w-full shrink-0">
          <ImageWithFallback
            src={SYDNEY}
            alt="Quantum Tech Hub in Sydney"
            className="w-full h-full min-h-[300px] object-cover"
          />
        </div>

        {/* People card under image */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 items-start pl-0 pr-0 pt-8 md:pt-10 pb-8 md:pb-12 min-w-0 max-w-xl">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden bg-white/60 shadow-md flex-shrink-0">
            <ImageWithFallback
              src={LEADER_ROD}
              alt="Rod Howard"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-3 text-[#1c3249] text-sm md:text-base leading-relaxed w-full max-w-none">
            <div>
              <p className="font-semibold text-base md:text-lg">Rod Howard</p>
              <p className="text-xs md:text-sm text-[#1c3249]/80">Strategic Advisor</p>
            </div>
            <p className="font-semibold">
              Energy Sector Leader | Former Deputy CEO, Endeavour Energy | Strategic Advisor | Infrastructure & Operations Expert
            </p>
            <p>
              Rod Howard is a highly respected Australian energy-sector executive with 47+ years of leadership experience across electricity
              networks, operations, and large-scale infrastructure transformation. As Deputy CEO and COO of Endeavour Energy, he played a pivotal
              role in modernizing one of Australia’s major electricity distribution networks, strengthening operational resilience, and guiding
              the organization through industry-wide transformation. He now serves as a Strategic Advisor, supporting utilities, government
              bodies, and global energy programs.
            </p>
            <p className="font-semibold mt-2">Core Strengths</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Utility Operations & Network Management: Deep expertise in electricity distribution, network reliability, asset management, and
                large-scale infrastructure planning.
              </li>
              <li>
                Executive Leadership & Transformation: Held multiple C-suite roles including Deputy CEO, COO, and Acting CEO, leading
                modernization, operational uplift, and organizational change.
              </li>
              <li>
                Industry Strategy & Regulatory Engagement: Trusted advisor across the energy ecosystem; contributed to national and international
                energy programs, including work with the World Bank and Malaysian Government.
              </li>
              <li>
                Stakeholder & Community Leadership: Former Chairman, Electricity & Water Ombudsman Network (NSW); known for building
                trust-based relationships across government, regulators, and industry bodies.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

