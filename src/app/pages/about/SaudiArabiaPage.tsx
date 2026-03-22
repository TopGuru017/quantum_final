import React from "react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { RIYADH, LEADER_VASTA } from "../../assets/images";

export function SaudiArabiaPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-start px-6 md:px-10 lg:px-16 py-24 md:py-28"
      style={{ backgroundColor: "#f7f5e9" }}
    >
      {/* First div: heading — Industry Authority style */}
      <div className="w-full max-w-6xl mt-24 md:mt-28 mb-16 md:mb-20 px-6 md:px-10 lg:px-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#1c3249] leading-[1.1] tracking-tight">
          Welcome to <em className="font-serif italic">Riyadh</em>
        </h1>
      </div>

      {/* Second: image full-width, Third: people card under image */}
      <div className="w-full flex flex-col items-start gap-0 -ml-0">
        {/* Image section */}
        <div className="w-full shrink-0">
          <ImageWithFallback
            src={RIYADH}
            alt="Quantum Tech Hub in Saudi Arabia"
            className="w-full h-full min-h-[300px] object-cover"
          />
        </div>

        {/* People card under image */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 items-start pl-0 pr-0 pt-8 md:pt-10 pb-8 md:pb-12 min-w-0 max-w-xl">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden bg-white/60 shadow-md flex-shrink-0">
            <ImageWithFallback
              src={LEADER_VASTA}
              alt="Srivatsan (Vatsa) Kalyanasundaram"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-3 text-[#1c3249] text-sm md:text-base leading-relaxed w-full max-w-none">
            <div>
              <p className="font-semibold text-base md:text-lg">Srivatsan (Vatsa) Kalyanasundaram</p>
            </div>
            <p className="font-semibold">
              Growth-Focused Technology & Telecom Leader | CEO Advisor | Former BU CEO, Vodafone
            </p>
            <p>
              Srivatsan Kalyansundaram is a global technology and telecom executive known for scaling high-growth businesses across cloud, cybersecurity, fintech, and digital platforms. With leadership experience spanning Vodafone, McKinsey & Company, and a PIF-owned fintech, he blends strategic clarity with operational rigor—helping enterprises and scale-ups accelerate growth, modernize portfolios, and build market-leading capabilities.
            </p>
            <p className="font-semibold mt-2">Core Strengths</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Business Scaling & P&L Leadership: Former Business Unit CEO at Vodafone, driving cloud and cybersecurity growth across global markets.
              </li>
              <li>
                Strategy & Transformation: Ex-McKinsey leader orchestrating multi-country strategic initiatives for Telecom, Media & Technology (TMT) clients.
              </li>
              <li>
                Fintech & Digital Innovation: CEO Advisor & COO at a PIF-owned fintech, shaping product, GTM, and operational scale-up.
              </li>
              <li>
                Growth Advisory for Scale-ups: Senior advisor to technology startups on portfolio strategy, GTM acceleration, and customer experience.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
