import React from "react";
import { Linkedin } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { PHOENIX, LEADER_KURT } from "../../assets/images";

export function USAPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-start px-6 md:px-10 lg:px-16 py-24 md:py-28"
      style={{ backgroundColor: "#93704b" }}
    >
      {/* First div: heading — Industry Authority style */}
      <div className="w-full max-w-6xl mt-24 md:mt-28 mb-16 md:mb-20 px-6 md:px-10 lg:px-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#ffffff] leading-[1.1] tracking-tight">
          Welcome to <em className="font-serif italic">Phoenix</em>
        </h1>
      </div>

      {/* Second: image full-width, Third: people card under image */}
      <div className="w-full flex flex-col items-start gap-0 -ml-0">
        {/* Image section */}
        <div className="w-full shrink-0">
          <ImageWithFallback
            src={PHOENIX}
            alt="Quantum Tech Hub in USA"
            className="w-full h-full min-h-[300px] object-cover"
          />
        </div>

        {/* People card under image */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 items-start pl-0 pr-0 pt-8 md:pt-10 pb-8 md:pb-12 min-w-0 max-w-xl">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden bg-white/60 shadow-md flex-shrink-0">
            <ImageWithFallback
              src={LEADER_KURT}
              alt="Kurt Simmons"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-3 text-[#ffffff] text-sm md:text-base leading-relaxed w-full max-w-none">
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-base md:text-lg">Kurt Simmons</p>
                <a
                  href="https://www.linkedin.com/in/kurt-simmons1"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#ffffff]/80 hover:text-[#ffffff]"
                  aria-label="Kurt Simmons on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs md:text-sm text-[#ffffff]/80">+1 (480) 544-3613</p>
              <a
                href="mailto:kurt.simmons@quantumtech-hub.com"
                className="text-sm md:text-base text-[#ffffff]/80 hover:underline block"
              >
                kurt.simmons@quantumtech-hub.com
              </a>
            </div>
            <p className="font-semibold text-[#ffffff]">
              Global Technology Executive | Digital Transformation Leader | Enterprise Modernization | Cloud & Infrastructure Strategist
            </p>
            <p>
            Kurt Simmons is a seasoned global technology leader with deep expertise in enterprise modernization, cloud transformation, infrastructure strategy, and large-scale IT operations. With a career spanning Fortune 500 enterprises such as United Technologies, Ericsson, Xerox and others, and high-growth environments, he is known for driving technology simplification, operational excellence, and business-aligned digital transformation.
            </p>
            <p className="font-semibold mt-2 text-[#ffffff]">Core Strengths</p>
            <ul className="list-disc list-inside space-y-1 text-[#ffffff]">
              <li>
                Enterprise Architecture & Modernization: Leads end-to-end modernization across cloud, data centers, networks, and security, enabling scalable, resilient digital foundations.
              </li>
              <li>
                Cloud & Infrastructure Strategy: Expertise in hybrid cloud, multi-cloud, virtualization, automation, and platform engineering, with a focus on cost, performance, and reliability.
              </li>
              <li>
                Large-Scale IT Operations: Proven ability to run complex global operations with strong governance, predictable delivery, and continuous improvement.
              </li>
              <li>
                Leadership & Stakeholder Alignment: Known for clear communication, cross-functional collaboration, and building trust with business, engineering, and executive teams.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

