import { useEffect, useRef } from "react";
import {
  Code2,
  Zap,
  Component,
  Container,
  Database,
  Workflow,
  Bot,
  Brain,
  Network,
  BarChart3,
  Table,
  MessageSquareText,
  ScanEye,
  GitBranch,
  FolderGit2,
  Sigma,
  Grid3x3,
  Terminal,
  LineChart,
  TrendingUp,
  Cloud,
} from "lucide-react";
import PlaceholderTile from "../components/PlaceholderTile";

// Real tools & skills from the resume — split into two rows, each tripled
// for a seamless scroll loop.
const ROW_1 = [
  { label: "Python", Icon: Code2 },
  { label: "FastAPI", Icon: Zap },
  { label: "React", Icon: Component },
  { label: "Docker", Icon: Container },
  { label: "PostgreSQL", Icon: Database },
  { label: "n8n", Icon: Workflow },
  { label: "Claude API", Icon: Bot },
  { label: "Scikit-learn", Icon: Brain },
  { label: "Random Forest", Icon: Network },
  { label: "Tableau", Icon: BarChart3 },
  { label: "Excel", Icon: Table },
];

const ROW_2 = [
  { label: "spaCy", Icon: MessageSquareText },
  { label: "Clarifai", Icon: ScanEye },
  { label: "Git", Icon: GitBranch },
  { label: "GitHub", Icon: FolderGit2 },
  { label: "NumPy", Icon: Sigma },
  { label: "Pandas", Icon: Grid3x3 },
  { label: "SQL", Icon: Terminal },
  { label: "R", Icon: LineChart },
  { label: "Gradient Boosting", Icon: TrendingUp },
  { label: "Hugging Face", Icon: Cloud },
];

const ROW_1_TRIPLED = [...ROW_1, ...ROW_1, ...ROW_1];
const ROW_2_TRIPLED = [...ROW_2, ...ROW_2, ...ROW_2];

function Tile({ index, label, Icon }: { index: number; label: string; Icon: typeof Code2 }) {
  return (
    <PlaceholderTile
      variant={index}
      Icon={Icon}
      label={label}
      iconSize={36}
      className="rounded-2xl flex-shrink-0"
      style={{ width: 220, height: 150 }}
    />
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const section = sectionRef.current;
      const row1 = row1Ref.current;
      const row2 = row2Ref.current;
      if (!section || !row1 || !row2) return;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      row1.style.transform = `translateX(${offset - 200}px)`;
      row2.style.transform = `translateX(${-(offset - 200)}px)`;
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: "#0C0C0C" }}
    >
      <div ref={row1Ref} className="flex gap-3 mb-3" style={{ willChange: "transform" }}>
        {ROW_1_TRIPLED.map((item, idx) => (
          <Tile key={`r1-${idx}`} index={idx} label={item.label} Icon={item.Icon} />
        ))}
      </div>
      <div ref={row2Ref} className="flex gap-3" style={{ willChange: "transform" }}>
        {ROW_2_TRIPLED.map((item, idx) => (
          <Tile key={`r2-${idx}`} index={idx + 4} label={item.label} Icon={item.Icon} />
        ))}
      </div>
    </section>
  );
}
