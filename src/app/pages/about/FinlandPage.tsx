import React from "react";
import { Linkedin } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { HELSINKI, LEADER_MIKKO } from "../../assets/images";

export function FinlandPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-start px-6 md:px-10 lg:px-16 py-24 md:py-28"
      style={{ backgroundColor: "#bbc6c2" }}
    >
      {/* First div: heading — Industry Authority style */}
      <div className="w-full max-w-6xl mt-24 md:mt-28 mb-16 md:mb-20 px-6 md:px-10 lg:px-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#15423f] leading-[1.1] tracking-tight">
          Welcome to <em className="font-serif italic">Helsinki</em>
        </h1>
      </div>

      {/* Second: image full-width, Third: people card under image */}
      <div className="w-full flex flex-col items-start gap-0 -ml-0">
        {/* Image section */}
        <div className="w-full shrink-0">
          <ImageWithFallback
            src={HELSINKI}
            alt="Quantum Tech Hub in Finland"
            className="w-full h-full min-h-[300px] object-cover"
          />
        </div>

        {/* People card under image */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 items-start pl-0 pr-0 pt-8 md:pt-10 pb-8 md:pb-12 min-w-0 max-w-xl">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden bg-white/60 shadow-md flex-shrink-0">
            <ImageWithFallback
              src={LEADER_MIKKO}
              alt="Mikko Mattheiszen"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-3 text-[#15423f] text-sm md:text-base leading-relaxed w-full max-w-none">
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-base md:text-lg">Mikko Mattheiszen</p>
                <a
                  href="https://www.linkedin.com/in/mikko-mattheiszen-21b3982"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#15423f]/80 hover:text-[#15423f]"
                  aria-label="Mikko Mattheiszen on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs md:text-sm text-[#15423f]/80">+358 50 3651767</p>
              <a
                href="mailto:Mikko.Mattheiszen@quantumtech-hub.com"
                className="text-sm md:text-base text-[#15423f]/80 hover:underline block"
              >
                Mikko.Mattheiszen@quantumtech-hub.com
              </a>
            </div>
            <p className="font-semibold">
              Global Technology & Operations Leader | Digital Transformation Strategist | Enterprise Modernization | Cloud & Infrastructure Expert
            </p>
            <p>
            Mikko Mattheiszen is a seasoned global technology and operations executive with deep expertise in cloud transformation, enterprise modernization, cybersecurity, and large-scale IT operations. With leadership experience having led businesses at Nokia, ABB and others, across Europe, APAC, and North America, he is known for driving operational excellence, simplifying complex technology estates, and aligning digital strategy with business outcomes
            </p>
            <p className="font-semibold mt-2">Core Strengths</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Cloud & Infrastructure Transformation: Leads modernization across hybrid cloud, multi-cloud, data centers, networks, and security, enabling scalable, resilient enterprise platforms.
              </li>
              <li>
                Operational Excellence & Service Reliability: Proven ability to run mission-critical global operations with strong governance, automation, and continuous improvement.
              </li>
              <li>
                Cybersecurity & Risk Management: Deep experience strengthening enterprise security posture, compliance, and resilience across regulated industries.
              </li>
              <li>
                Leadership & Cross-Functional Alignment: Known for pragmatic leadership, clear communication, and the ability to bridge business, engineering, and operations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
