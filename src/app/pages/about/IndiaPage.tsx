import React from "react";
import { Linkedin } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { DELHI, LEADER_PIYUSH, LEADER_ALOKNATH } from "../../assets/images";

export function IndiaPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-start px-6 md:px-10 lg:px-16 py-24 md:py-28"
      style={{ backgroundColor: "#b5aa69" }}
    >
      {/* First div: heading — Industry Authority style */}
      <div className="w-full max-w-6xl mt-24 md:mt-28 mb-16 md:mb-20 px-6 md:px-10 lg:px-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#1c3249] leading-[1.1] tracking-tight">
          Welcome to <em className="font-serif italic">Delhi</em>
        </h1>
      </div>

      {/* Second + Third: image on top, leader cards in same row */}
      <div className="w-full flex flex-col items-start gap-0 -ml-0">
        {/* Image section */}
        <div className="w-full shrink-0">
          <ImageWithFallback
            src={DELHI}
            alt="Quantum Tech Hub in India"
            className="w-full h-full min-h-[300px] object-cover"
          />
        </div>

        {/* Third div: leader cards — Piyush and Dr. De side by side */}
        <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-10 items-start pl-0 md:pl-10 lg:pl-16 pr-0 pt-8 md:pt-10 pb-8 md:pb-12 min-w-0">
          {/* Piyush card */}
          <div className="flex flex-col gap-6 md:gap-8 items-start w-full md:w-1/2 max-w-xl">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden bg-white/60 shadow-md flex-shrink-0">
              <ImageWithFallback
                src={LEADER_PIYUSH}
                alt="Piyush Tandon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3 text-[#1c3249] text-sm md:text-base leading-relaxed w-full max-w-none">
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-base md:text-lg">Piyush Tandon</p>
                  <a
                    href="https://www.linkedin.com/in/piyush-tandon"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#1c3249]/80 hover:text-[#1c3249]"
                    aria-label="Piyush Tandon on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs md:text-sm text-[#1c3249]/80">+91 89782 66886</p>
                <a
                  href="mailto:piyush.tandon@quantumtech-hub.com"
                  className="text-sm md:text-base text-[#1c3249]/80 hover:underline block"
                >
                  piyush.tandon@quantumtech-hub.com
                </a>
              </div>
              <p className="font-semibold">
                Strategy Practitioner | Technology Evangelist | Innovation Catalyst | Product Leadership Expert
              </p>
              <p>
                Piyush Tandon is a seasoned strategy and product leader with 30+ years of experience shaping product direction, driving digital transformation, and accelerating growth across APAC, EMEA, and North America. His work spans communications, utilities, transportation, automotive, FMCG, and healthcare, partnering with customers in 25+ countries to build scalable products, strong roadmaps, and resilient growth engines.
              </p>
              <p className="font-semibold mt-2">Core Strengths</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Product Strategy & Lifecycle Leadership: Expert in roadmaps, pricing, positioning, competitive intelligence, and lifecycle decisions for early-stage and scaled products.
                </li>
                <li>
                  Digital & Technology Innovation: Hands-on leadership across IoT, AI, 5G, cloud platforms, and enterprise software, with a track record of turning early ideas into market-ready offerings.
                </li>
                <li>
                  Business Growth & Market Expansion: Helped shape the strategy that built a USD 100M business unit in three years, driving sustained growth across multiple cycles.
                </li>
                <li>
                  Incubation & Practice Building: Established global product management practices and technology incubators for IoT and digital product teams.
                </li>
              </ul>
            </div>
          </div>

          {/* Dr. Aloknath De card */}
          <div className="flex flex-col gap-6 md:gap-8 items-start w-full md:w-1/2 max-w-xl">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden bg-white/60 shadow-md flex-shrink-0">
              <ImageWithFallback
                src={LEADER_ALOKNATH}
                alt="Dr. Aloknath De"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3 text-[#1c3249] text-sm md:text-base leading-relaxed w-full max-w-none">
              <div>
                <p className="font-semibold text-base md:text-lg">Dr. Aloknath De</p>
              </div>
              <p className="font-semibold">
                Visionary Technology Leader | Pioneer in Cyber-Physical Systems | Former CTO, Samsung R&D India.
              </p>
              <p>
                Dr. Aloknath De is one of India’s most respected deep-tech leaders, known for shaping next-generation innovation across AI, IoT, Cyber-Physical Systems, B5G, and device-to-cloud engineering. With 30+ years of global R&D leadership across Samsung, STMicroelectronics, and multiple international labs, he blends scientific depth with strategic execution, driving large-scale transformation and industry-defining platforms.
              </p>
              <p className="font-semibold mt-2">Core Expertise</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Cyber-Physical Systems & Connected Intelligence: Architecting AI-driven, device-to-cloud ecosystems across IoT, telecom, and embedded
                  systems.
                </li>
                <li>
                  Advanced R&D Leadership: Built and scaled Samsung’s IoT Data Platform; led multi-country engineering teams delivering breakthrough
                  products.
                </li>
                <li>
                  Innovation Strategy & Tech Acceleration: Advisor to enterprises and startups; creator of the BITE framework
                  (Business–Innovation–Technology–Engineering).
                </li>
                <li>
                  Deep Systems Engineering Expertise: Embedded systems, SoC, multimedia, radar, and next-generation communication systems.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

