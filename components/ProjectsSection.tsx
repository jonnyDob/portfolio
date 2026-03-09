import ProjectFeatured from "./ProjectFeatured";

export default function ProjectsSection() {
  return (
    <div className="projects" id="work">
      <ProjectFeatured
        number="1"
        kicker="Cross-Platform"
        title={
          <>
            Common: <em>Local &amp; Live</em>
          </>
        }
        body="A cross-platform event discovery app for iOS and Android. Users explore nearby events on a live map, follow local creators, and filter by day, price, and distance."
        tags={[
          { label: "Cross-Platform", accent: true },
          { label: "React Native" },
          { label: "Maps" },
          { label: "Automations" },
          { label: "SQL", },
        ]}
        link={{ href: "#", text: "View Project" }}
        phoneMockup={{
          large: {
            src: "/images/common/Common-map.png",
            alt: "Common app map view showing events in Toronto",
          },
          small: {
            src: "/images/common/Common-poster.png",
            alt: "Common app event detail with poster",
          },
          caption: "Common — iOS & Android",
        }}
      />

      <ProjectFeatured
        number="2"
        kicker="AWS · Enterprise · SaaS"
        title={
          <>
            Energy Intelligence: <em>Monitoring Platform </em>
          </>
        }
        body="A platform that monitors real-time energy demand levels for industrial operators across Ontario. Tracks IESO grid data against configurable thresholds, triggers automated email alerts when demand spikes, and surfaces trends through a monitoring dashboard. Multi-tenant serverless architecture on AWS with API Gateway, Lambda, DynamoDB, Cognito, and infrastructure defined entirely in CDK."
        tags={[
          { label: "AWS", accent: true },
          { label: "Serverless", accent: true },
          { label: "Lambda" },
          { label: "DynamoDB" },
          { label: "Cognito" },
          { label: "CDK" },
        ]}
        imageSrc="/images/ieso/ieso_peak_data_chart.png"
        imageAlt="IESO energy threshold monitoring dashboard"
      />

      <ProjectFeatured
        number="3"
        kicker="Web App"
        title={
          <>
            Fleet: <em>Commute Benefits</em>
          </>
        }
        body="A working demo for a commute benefits platform. Employees pick their commute mode and see real-time CO₂ savings and tax benefits. Team rewards unlock perks like Pizza Friday. Includes a separate HR admin view with payroll analytics and employee management."
        tags={[
          { label: "React", accent: true },
          { label: "Python" },
          { label: "Django" },
          { label: "Full-Stack" },
        ]}
        link={{ href: "#", text: "View Project" }}
        imageSrc="/images/fleet/HRReportsPage.png"
        imageAlt="Fleet commute benefits platform"
      />

      <ProjectFeatured
        number="4"
        kicker="Artificial Intelligence · Research"
        title={
          <>
            Gesture <em>Speech Synthesis</em>
          </>
        }
        body="A gesture-based speech synthesis system using LSTM and CNN architectures. Built a custom dataset of 700+ labeled videos and trained models to 96% classification accuracy. Collaborated with a team of four and presented findings to faculty."
        tags={[
          { label: "AI", accent: true },
          { label: "Neural Networks", accent: true },
          { label: "LSTM" },
          { label: "CNN" },
          { label: "Python" },
        ]}
        stat={{ value: "96%", label: "classification accuracy" }}
      />
    </div>
  );
}
