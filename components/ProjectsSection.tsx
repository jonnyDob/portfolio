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
        storeLinks={[
          { href: "https://apps.apple.com/ca/app/common-local-and-live/id6743640498", text: "Common on iOS →" },
          { href: "https://play.google.com/store/apps/details?id=com.elegora.common&pcampaignid=web_share", text: "Common on Android →" },
        ]}
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
            IESO Platform: <em>Energy Intelligence</em>
          </>
        }
        body="A platform for industrial facilities that monitors Ontario’s IESO grid energy demand. Automated alerts trigger during peak demand, while dashboards show energy trends. Built at the request of an engineering firm. "
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
        browserUrl="ieso-monitor.app/dashboard"
      />

      <ProjectFeatured
        number="3"
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
