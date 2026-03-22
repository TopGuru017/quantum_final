import React from "react";
import { DigitalFusionPageTemplate, FusionSection } from "../../components/DigitalFusionPageTemplate";
import { CLOUD_STRATEGY_VIDEO } from "../../assets/images";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-1.5 shrink-0 text-black/50">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const cloudStrategyFirstSectionRightContent = (
  <>
    <p className="font-semibold mb-3">
    Strategic Advisory: Establishing Verifiable Truth
    </p>
    {/* <ul className="list-disc pl-5 space-y-1.5 opacity-90">
      <li>Data strategy and architecture aligned with regulatory and industry needs.</li>
      <li>Data quality, lineage, and governance frameworks.</li>
      <li>Controls for sensitive, regulated, and safety-critical data across cloud and on-prem.</li>
    </ul> */}
    <p>
    Data integrity begins with governance, not just code. Our advisory services focus on creating a framework where data remains accurate, consistent, and protected throughout its entire lifecycle.
    </p>
  </>
);

const sections: FusionSection[] = [
  {
    title: "Integrity Assessments",
    content: (
      <div>
        <p>Identifying architectural vulnerabilities where data could be compromised or degraded.</p>
      </div>
    ),
  },
  {
    title: "Governance Frameworks",
    content: (
      <div>
        <p>Establishing clear ownership and lineage to meet strict compliance standards (such as ISA/IEC 62443).</p>
      </div>
    ),
  },
  {
    title: "Validation Strategy",
    content: (
      <div>
        <p>Designing the "Source of Truth" models required for high-stakes, real-time decision-making.</p>
      </div>
    ),
  },
  {
    title: "Automated Validation",
    content: (
      <div>
        <p>Deploying real-time checks to detect anomalies and prevent "silent" data corruption.</p>
           </div>
    ),
  },
  {
    title: "Secure Data Pipelines",
    content: (
      <div>
        <p>Ensuring that data moving between OT, IoT, and Cloud environments maintains its original state.</p>
       </div>
    ),
  },
  {
    title: "Platform-Driven Monitoring",
    content: (
      <div>
        <p>Leveraging automation platforms to provide a single, immutable record of data changes and system health.</p>
      </div>
    ),
  },

];

export function CloudStrategyPage() {
  return (
    <DigitalFusionPageTemplate
      titleMain="The Foundation of"
      firstSectionBgColor="#1f2a3a"
      titleItalic="Digital Trust"
      firstSectionRightContent={cloudStrategyFirstSectionRightContent}
      sections={sections}
      secondSectionVideo={CLOUD_STRATEGY_VIDEO}
      secondSectionImageAlt="Cloud Strategy"
    />
  );
}
