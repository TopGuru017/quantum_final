import React from "react";
import { Linkedin } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { MELBOURNE, LEADER_SANJAY } from "../../assets/images";

export function AustraliaPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-start px-6 md:px-10 lg:px-16 py-24 md:py-28"
      style={{ backgroundColor: "#b6d1bf" }}
    >
      {/* First div: heading — Industry Authority style */}
      <div className="w-full max-w-6xl mt-24 md:mt-28 mb-16 md:mb-20 px-6 md:px-10 lg:px-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#1c3249] leading-[1.1] tracking-tight">
          Welcome to <em className="font-serif italic">Melbourne</em>
        </h1>
      </div>

      {/* Second: image full-width, Third: people card under image */}
      <div className="w-full flex flex-col items-start gap-0 -ml-0">
        {/* Image section */}
        <div className="w-full shrink-0">
          <ImageWithFallback
            src={MELBOURNE}
            alt="Quantum Tech Hub in Australia"
            className="w-full h-full min-h-[300px] object-cover"
          />
        </div>

        {/* People card under image */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 items-start pl-0 pr-0 pt-8 md:pt-10 pb-8 md:pb-12 min-w-0 max-w-xl">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden bg-white/60 shadow-md flex-shrink-0">
            <ImageWithFallback
              src={LEADER_SANJAY}
              alt="Sanjay Krishnaa"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-3 text-[#1c3249] text-sm md:text-base leading-relaxed w-full max-w-none">
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-base md:text-lg">Sanjay Krishnaa</p>
                <a
                  href="https://www.linkedin.com/in/sanjay-krishnaa-893ab63"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#1c3249]/80 hover:text-[#1c3249]"
                  aria-label="Sanjay Krishnaa on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs md:text-sm text-[#1c3249]/80">+61 405 525 048</p>
              <a
                href="mailto:sanjay.krishnaa@quantumtech-hub.com"
                className="text-sm md:text-base text-[#1c3249]/80 hover:underline block"
              >
                sanjay.krishnaa@quantumtech-hub.com
              </a>
            </div>
            <p className="font-semibold">
              Global Business Leader | Transformation Architect | GCC Builder | M&A & Strategic Investments
            </p>
            <p>
              Sanjay Krishnaa is a global executive with over two decades at the intersection of strategy, technology, and execution, known for building high-performance organizations, scaling global businesses, and leading complex transformations across telecom, engineering, digital, and cross-border operations. His career spans the U.S., Europe, and Asia, partnering with boards, investors, and CXOs to unlock capability, accelerate growth, and deliver sustained enterprise value.
            </p>
            <p className="font-semibold mt-2">Core Strengths</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Global Capability Centres (GCCs) & Cross-Border Execution: Built and scaled GCCs across AI, cloud, cybersecurity, and product engineering, enabling global delivery at speed and scale.
              </li>
              <li>
                Business Turnaround & Transformation: Led multi-year transformation programs aligning people, process, and technology across telecom, energy, utilities, and digital engineering.
              </li>
              <li>
                M&A, Strategic Transactions & Integration: Deep experience in deal strategy, capability expansion, post-merger integration, and institutional capital partnerships.
              </li>
              <li>
                Technology & Industry Leadership: Strengthened solution portfolios in AI, SDN, cloud transformation, IoT, and enterprise engineering across global markets.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

