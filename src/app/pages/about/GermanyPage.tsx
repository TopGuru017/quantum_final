import React from "react";
import { Linkedin } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { FRANKFURT, LEADER_BIKRAMJIT } from "../../assets/images";

export function GermanyPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-start px-6 md:px-10 lg:px-16 py-24 md:py-28"
      style={{ backgroundColor: "#6c7f7d" }}
    >
      {/* First div: heading — Industry Authority style */}
      <div className="w-full max-w-6xl mt-24 md:mt-28 mb-16 md:mb-20 px-6 md:px-10 lg:px-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#ffffff] leading-[1.1] tracking-tight">
          Welcome to <em className="font-serif italic">Frankfurt</em>
        </h1>
      </div>

      {/* Second: image full-width, Third: people card under image */}
      <div className="w-full flex flex-col items-start gap-0 -ml-0">
        {/* Image section */}
        <div className="w-full shrink-0">
          <ImageWithFallback
            src={FRANKFURT}
            alt="Quantum Tech Hub in Germany"
            className="w-full h-full min-h-[300px] object-cover"
          />
        </div>

        {/* People card under image */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 items-start pl-0 pr-0 pt-8 md:pt-10 pb-8 md:pb-12 min-w-0 max-w-xl">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden bg-white/60 shadow-md flex-shrink-0">
            <ImageWithFallback
              src={LEADER_BIKRAMJIT}
              alt="Bikramjit Paul Choudhury"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-3 text-[#ffffff] text-sm md:text-base leading-relaxed w-full max-w-none">
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-base md:text-lg">Bikramjit Paul Choudhury</p>
                <a
                  href="https://www.linkedin.com/in/bikramjit-paul-choudhury-2bab532"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#ffffff]/80 hover:text-[#ffffff]"
                  aria-label="Bikramjit Paul Choudhury on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs md:text-sm text-[#ffffff]/80">+49 173 5239318</p>
              <a
                href="mailto:bikramjitpaul.choudhury@quantumtech-hub.com"
                className="text-sm md:text-base text-[#ffffff]/80 hover:underline block"
              >
                bikramjitpaul.choudhury@quantumtech-hub.com
              </a>
            </div>
            <p className="font-semibold text-[#ffffff]">
            Engineering Leader | Delivery Excellence | Digital Operations | Healthcare & Enterprise Systems
            </p>
            <p>
              Bikramjit (Bikram) Paul Choudhury is a seasoned engineering and operations leader with deep experience across telecom, digital infrastructure, and enterprise IT systems. Known for his disciplined execution, systems thinking, and ability to bring order to complexity, he has led large-scale programs, modernized legacy environments, and built high-trust delivery teams across India and APAC.
            </p>
            <p className="font-semibold mt-2 text-[#ffffff]">Core Strengths</p>
            <ul className="list-disc list-inside space-y-1 text-[#ffffff]">
              <li>
                Large-Scale Program Delivery: Proven ability to lead multi-year, multi-vendor programs with predictable outcomes and strong governance.
              </li>
              <li>
                Telecom & Network Engineering: Hands-on expertise across OSS/BSS, network operations, infrastructure modernization, and enterprise-grade system reliability.
              </li>
              <li>
                Operational Excellence: Builds frameworks that improve quality, uptime, cost efficiency, and cross-functional alignment.
              </li>
              <li>
                Team Leadership & Stakeholder Management: Known for calm, structured leadership and the ability to drive clarity in ambiguous, high-pressure environments.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

