import FadeIn from "../components/FadeIn";

const SKILLS = [
  {
    number: "01",
    name: "Machine Learning",
    description:
      "Building and evaluating models — Random Forest, Gradient Boosting, classification, regression — with a focus on feature engineering and measurable accuracy gains.",
  },
  {
    number: "02",
    name: "AI & Agent Engineering",
    description:
      "Designing multi-agent LLM workflows with n8n and the Claude API, and multimodal pipelines that turn unstructured inputs into structured, automated outputs.",
  },
  {
    number: "03",
    name: "Full-Stack Development",
    description:
      "Shipping production apps end-to-end with FastAPI, React, Docker, and PostgreSQL — from backend pipeline to deployed interface.",
  },
  {
    number: "04",
    name: "Data Analytics",
    description:
      "Turning raw datasets into decisions with EDA, Tableau, and statistical analysis — cleaning, validating, and visualizing data that holds up to scrutiny.",
  },
  {
    number: "05",
    name: "Physics & Research",
    description:
      "A research foundation in astrophysics and accelerator data — bringing scientific rigor to every dataset, model, and experiment.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: "#FFFFFF" }}
    >
      <FadeIn delay={0}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SKILLS.map((skill, i) => (
          <FadeIn key={skill.number} delay={i * 0.1}>
            <div
              className="flex items-center gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom:
                  i < SKILLS.length - 1 ? "1px solid rgba(12, 12, 12, 0.15)" : "none",
                borderTop: i === 0 ? "1px solid rgba(12, 12, 12, 0.15)" : "none",
              }}
            >
              <span
                className="font-black flex-shrink-0"
                style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {skill.number}
              </span>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3
                  className="font-medium uppercase"
                  style={{ color: "#0C0C0C", fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {skill.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    color: "#0C0C0C",
                    opacity: 0.6,
                    fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                  }}
                >
                  {skill.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
