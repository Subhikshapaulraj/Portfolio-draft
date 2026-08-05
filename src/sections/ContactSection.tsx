import { Mail, Link2, FolderGit2, Phone } from "lucide-react";
import FadeIn from "../components/FadeIn";
import ContactButton from "../components/ContactButton";

const LINKS = [
  {
    label: "Email",
    value: "subhiksha.paulraj@gmail.com",
    href: "mailto:subhiksha.paulraj@gmail.com",
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "subhiksha-paulraj",
    href: "https://www.linkedin.com/in/subhiksha-paulraj",
    Icon: Link2,
  },
  {
    label: "GitHub",
    value: "Subhikshapaulraj",
    href: "https://github.com/Subhikshapaulraj",
    Icon: FolderGit2,
  },
  {
    label: "Phone",
    value: "+1 (682) 247-6164",
    href: "tel:+16822476164",
    Icon: Phone,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-36 flex flex-col items-center text-center"
      style={{ background: "#0C0C0C" }}
    >
      <FadeIn delay={0} y={30}>
        <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs sm:text-sm mb-4 block">
          Let&apos;s connect
        </span>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 11vw, 150px)" }}
        >
          Get in touch
        </h2>
        <p className="text-[#D7E2EA]/70 font-light max-w-md mx-auto mt-6 mb-10 text-sm sm:text-base leading-relaxed">
          Actively seeking internships and always open to collaborating on interesting data &amp; AI projects.
        </p>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <a href="mailto:subhiksha.paulraj@gmail.com">
          <ContactButton />
        </a>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl w-full mt-16">
        {LINKS.map((link, i) => (
          <FadeIn key={link.label} delay={0.1 + i * 0.08} y={20}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex flex-col items-center gap-2 sm:gap-3 rounded-3xl border border-[#D7E2EA]/20 px-4 py-6 sm:py-7 hover:border-[#D7E2EA]/50 hover:bg-[#D7E2EA]/5 transition-colors duration-200"
            >
              <link.Icon size={22} strokeWidth={1.5} className="text-[#D7E2EA]" />
              <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-[10px]">
                {link.label}
              </span>
              <span className="text-[#D7E2EA] text-xs sm:text-sm font-medium break-all">
                {link.value}
              </span>
            </a>
          </FadeIn>
        ))}
      </div>

      <p className="text-[#D7E2EA]/30 text-xs mt-20 font-light">
        Subhiksha Paulraj — B.S. Data Science + Physics, UT Arlington
      </p>
    </section>
  );
}
