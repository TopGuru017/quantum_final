import React from "react";
import { COLLABORATION_VIDEO } from "../assets/images";

export function WhatWeDoPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── 1. First section: title + right content + video (Digital Fusion style) ── */}
      <section
        className="pt-20 md:pt-28 pb-0"
        style={{ backgroundColor: "#f2f5e4" }}
      >
        <div className="pr-3 md:pr-6 lg:pr-10">
          <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-6 md:gap-10 items-start w-full">
            <div className="pt-16 md:pt-20 lg:pt-24 pl-6 md:pl-10 lg:pl-14">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#000000] leading-[1.1] tracking-tight">
              Helping organizations evolve accelerate and outperform
              </h1>
            </div>
            <div className="mt-8 md:mt-40 lg:mt-52 xl:mt-64 space-y-4 text-[#000000] text-sm md:text-base leading-relaxed mr-6 md:mr-16 lg:mr-24 xl:mr-32">
              <p>
                Quantum Tech Hub helps organisations build and run high-performance digital businesses – from rethinking strategy to implementing secure, scalable technology and operating models that deliver measurable outcomes.
              </p>
              <p>
                We combine board-level advisory with execution depth across cloud, data, cyber, AI, and global delivery so transformation is not just designed, but delivered and sustained.
              </p>
            </div>
          </div>
        </div>
        {/* Collaboration video banner */}
        <div className="w-full md:w-[85%] mx-auto overflow-hidden mt-10 md:mt-12">
          <video
            src={COLLABORATION_VIDEO}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover object-center"
          />
        </div>
      </section>

      {/* ── 2. Value Streams — clean section (no background image) ── */}
      <section
        className="min-h-screen flex flex-col py-16 md:py-24 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: "#fdfbe8" }}
      >
        <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-start">
          <div className="md:col-span-1 flex flex-col justify-center -ml-0 md:-ml-6 lg:-ml-12">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-black leading-[1.15] tracking-tight">
              Value Streams
            </h2>
          </div>
          <div className="md:col-span-1 w-full mt-10 md:mt-24 lg:mt-32 border-t border-black/30 pt-6">
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-black leading-tight mb-6">
              Difficult by nature.
              <br />
              Inevitable by design.
            </h3>
            <div className="space-y-4 text-black/90 text-sm md:text-base leading-relaxed">
              <p>
                For over 25 years, we’ve been inside our clients’ hardest work – the complex, political, high-stakes problems most organisations quietly avoid.
              </p>
              <p>
                We’ve learned there is no blueprint for success. Context decides. Experience and pattern recognition tilt the odds. So yes, we start with a sharp plan – and then we earn the outcome by rewriting it, improvising, and breaking the script when reality demands a better move.
              </p>
              <p>
                Our job is to find the few decisive insights that actually shift the system, then stay close enough to listen, adapt, and keep tuning until the impact is real – not just a promise on a slide.
              </p>
              <p>
                And there is always a human dimension. The transformations that stick are co-created. When the people driving change are genuinely engaged and grow their capabilities along the way, success rates jump – and the organisation is left stronger, more confident, and unmistakably better than we found it.
              </p>
            
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
