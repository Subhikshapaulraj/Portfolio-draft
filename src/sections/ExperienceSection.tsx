import FadeIn from "../components/FadeIn";

const EXPERIENCE = [
  {
    date: "Aug 2026 – Present",
    role: "AI Agent Engineer Extern",
    org: "Wayfair X Extern",
    status: "Active",
    blurb:
      "Building multi-agent AI workflows in n8n for trend discovery, competitor monitoring, and content insight generation.",
  },
  {
    date: "Apr 2026 – Aug 2026",
    role: "AI/ML Developer Intern",
    org: "Cloudaspirers, LLC",
    status: "Complete",
    blurb:
      "Shipped 2 full-stack AI apps with FastAPI, React, and Docker for nutrition research and educational outreach.",
  },
  {
    date: "May 2025 – Jul 2025",
    role: "Data Analyst Intern",
    org: "Flyersoft",
    status: "Complete",
    blurb:
      "Built ML models with Python and Scikit-learn, improving predictive accuracy by 90%.",
  },
  {
    date: "Aug 2024 – Jan 2025",
    role: "Resident Assistant",
    org: "Vandergriff Hall, UTA",
    status: "Leadership",
    blurb:
      "Mentored 40+ residents individually and led a 5-person peer team through weekly planning and crisis response.",
  },
  {
    date: "UTA",
    role: "Right Back",
    org: "Women's Soccer Club",
    status: "Leadership",
    blurb:
      "Anchored backline communication across 15+ matches, helping cut goals conceded by 78% season-over-season.",
  },
  {
    date: "Oct 2023 – Mar 2024",
    role: "Research Assistant",
    org: "PHY Dept, UTA",
    status: "Research",
    blurb:
      "Structured 10,000+ experimental data points for accelerator research, improving accuracy by 30%.",
  },
];

const STATUS_COLORS: Record<string, string> = {
  Active: "#33e07a",
  Complete: "#3ec6ff",
  Leadership: "#B600A8",
  Research: "#BE4C00",
};

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
      style={{ background: "#0C0C0C" }}
    >
      <FadeIn delay={0}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto">
        {EXPERIENCE.map((item, i) => (
          <FadeIn key={item.role + item.org} delay={i * 0.08}>
            <div
              className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 py-7 sm:py-9"
              style={{
                borderBottom:
                  i < EXPERIENCE.length - 1 ? "1px solid rgba(215, 226, 234, 0.15)" : "none",
                borderTop: i === 0 ? "1px solid rgba(215, 226, 234, 0.15)" : "none",
              }}
            >
              <div className="sm:w-56 flex-shrink-0 flex sm:flex-col items-center sm:items-start gap-2 sm:gap-2">
                <span
                  className="uppercase tracking-widest text-[11px] font-medium px-3 py-1 rounded-full"
                  style={{
                    color: STATUS_COLORS[item.status],
                    border: `1px solid ${STATUS_COLORS[item.status]}55`,
                    background: `${STATUS_COLORS[item.status]}14`,
                  }}
                >
                  {item.status}
                </span>
                <span className="text-[#D7E2EA]/50 text-xs sm:text-sm font-light uppercase tracking-wide">
                  {item.date}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-2xl md:text-3xl leading-tight">
                  {item.role}
                </h3>
                <span className="text-[#D7E2EA]/60 text-sm sm:text-base font-light uppercase tracking-wide">
                  {item.org}
                </span>
                <p className="text-[#D7E2EA]/70 font-light leading-relaxed max-w-xl text-sm sm:text-base mt-1">
                  {item.blurb}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
