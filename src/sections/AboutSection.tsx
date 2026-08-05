import { Atom, Rocket, BrainCircuit, Trophy } from "lucide-react";
import FadeIn from "../components/FadeIn";
import AnimatedText from "../components/AnimatedText";
import ContactButton from "../components/ContactButton";
import PlaceholderTile from "../components/PlaceholderTile";

const ABOUT_TEXT =
  "I grew up in Tamil Nadu, India, endlessly curious about black holes, antimatter, and everything else physics hadn't fully answered yet. That curiosity turned into a fight — one I won — to leave home and pursue a B.S. in Physics with a minor in Astrophysics in the United States. Somewhere in the middle of that journey, I realized the future wasn't just written in physics, it was written in data, so I doubled down and added a second major in Data Science. Since then I've worked with 4+ clients, built AI systems end-to-end, and I'm still on a soccer field every chance I get. Let's build something incredible together!";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
      style={{ background: "#0C0C0C" }}
    >
      {/* Corner decorations */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <PlaceholderTile variant={1} Icon={Atom} iconSize={36} className="aspect-square rounded-3xl" />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]"
      >
        <PlaceholderTile variant={4} Icon={Rocket} iconSize={30} className="aspect-square rounded-3xl" />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <PlaceholderTile variant={2} Icon={BrainCircuit} iconSize={36} className="aspect-square rounded-3xl" />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]"
      >
        <PlaceholderTile variant={5} Icon={Trophy} iconSize={38} className="aspect-square rounded-3xl" />
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 relative z-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[640px] text-[clamp(1rem,2vw,1.35rem)]"
        />
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24 relative z-10">
        <a href="#contact">
          <ContactButton />
        </a>
      </div>
    </section>
  );
}
