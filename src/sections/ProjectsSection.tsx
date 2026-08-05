import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ScanEye,
  MessageSquareText,
  Salad,
  GraduationCap,
  BookOpen,
  Globe2,
  Bug,
  TrendingUp,
  CheckCircle2,
  Telescope,
  Atom,
  Sparkles,
} from "lucide-react";
import FadeIn from "../components/FadeIn";
import LiveProjectButton from "../components/LiveProjectButton";
import PlaceholderTile from "../components/PlaceholderTile";

interface Project {
  number: string;
  category: string;
  name: string;
  description: string;
  icons: [typeof ScanEye, typeof ScanEye, typeof ScanEye];
  variants: [number, number, number];
  liveUrl?: string;
}

const PROJECTS: Project[] = [
  {
    number: "01",
    category: "Research",
    name: "GrubLens",
    description:
      "AI-powered multimodal nutrition analysis — Clarifai CV, spaCy NLP, and the USDA database estimate 20+ compounds automatically.",
    icons: [ScanEye, MessageSquareText, Salad],
    variants: [0, 2, 4],
  },
  {
    number: "02",
    category: "Personal",
    name: "Im4imagine!",
    description:
      "Solo-architected nutrition-education platform, shipped from local dev to production and refined through stakeholder feedback.",
    icons: [GraduationCap, BookOpen, Globe2],
    variants: [1, 5, 7],
    liveUrl: "https://im4imagine.com",
  },
  {
    number: "03",
    category: "Academic",
    name: "Defect Classification",
    description:
      "End-to-end Scikit-learn pipeline predicting software defects — accuracy lifted from 72% to 89% via feature engineering.",
    icons: [Bug, TrendingUp, CheckCircle2],
    variants: [3, 6, 2],
  },
  {
    number: "04",
    category: "Academic",
    name: "Particle Classification",
    description:
      "Class-balanced Random Forest classifier separating gamma-ray signals from noise — 91% ROC-AUC on the MAGIC Telescope dataset.",
    icons: [Telescope, Atom, Sparkles],
    variants: [5, 1, 3],
  },
];

const TOTAL_CARDS = PROJECTS.length;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const [IconA, IconB, IconC] = project.icons;

  return (
    <div ref={containerRef} className="h-[85vh] flex items-start justify-center">
      <motion.div
        style={{ scale, top: `${96 + index * 28}px` }}
        className="sticky w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8"
      >
        <div
          className="rounded-[32px] sm:rounded-[42px] md:rounded-[52px] border-2 p-4 sm:p-6 md:p-8 w-full"
          style={{ borderColor: "#D7E2EA", background: "#0C0C0C" }}
        >
          {/* Top row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-4">
            <span
              className="font-black text-white"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 mr-auto">
              <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <span className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-3xl md:text-4xl">
                {project.name}
              </span>
            </div>
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <LiveProjectButton />
              </a>
            ) : null}
          </div>

          <p className="text-[#D7E2EA]/70 font-light leading-relaxed max-w-2xl text-sm sm:text-base mb-6 sm:mb-8">
            {project.description}
          </p>

          {/* Image grid */}
          <div className="flex gap-3 sm:gap-4">
            <div className="flex flex-col gap-3 sm:gap-4" style={{ width: "40%" }}>
              <PlaceholderTile
                variant={project.variants[0]}
                Icon={IconA}
                iconSize={30}
                className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: "clamp(130px, 16vw, 230px)" }}
              />
              <PlaceholderTile
                variant={project.variants[1]}
                Icon={IconB}
                iconSize={30}
                className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: "clamp(160px, 22vw, 340px)" }}
              />
            </div>
            <PlaceholderTile
              variant={project.variants[2]}
              Icon={IconC}
              iconSize={44}
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ width: "60%" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 pb-32"
      style={{ background: "#0C0C0C" }}
    >
      <FadeIn delay={0}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
