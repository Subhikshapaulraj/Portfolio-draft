import type { LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";

const GRADIENTS: string[] = [
  "linear-gradient(135deg, #1a0620 0%, #7621B0 50%, #B600A8 100%)",
  "linear-gradient(135deg, #0c0c0c 0%, #2b2f36 50%, #646973 100%)",
  "linear-gradient(135deg, #18011F 0%, #BE4C00 100%)",
  "linear-gradient(140deg, #101820 0%, #3a4a5c 60%, #BBCCD7 130%)",
  "linear-gradient(135deg, #1a0620 0%, #43124f 45%, #7621B0 100%)",
  "linear-gradient(135deg, #0c0c0c 0%, #4a1d1d 55%, #BE4C00 120%)",
  "linear-gradient(150deg, #0c0c0c 0%, #22303d 60%, #646973 120%)",
  "linear-gradient(135deg, #18011F 0%, #7621B0 55%, #BBCCD7 140%)",
];

interface PlaceholderTileProps {
  variant?: number;
  Icon?: LucideIcon;
  className?: string;
  style?: CSSProperties;
  iconSize?: number;
  label?: string;
}

/**
 * Original abstract tile used in place of external renders/photos:
 * a moody gradient (drawn from the site's own palette) with a
 * centered Lucide icon and a faint grid texture for depth.
 * Optionally shows a text label beneath the icon (used for the
 * skills marquee).
 */
export default function PlaceholderTile({
  variant = 0,
  Icon,
  className = "",
  style,
  iconSize = 32,
  label,
}: PlaceholderTileProps) {
  const gradient = GRADIENTS[variant % GRADIENTS.length];

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden ${className}`}
      style={{
        background: gradient,
        ...style,
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {Icon && (
        <Icon size={iconSize} strokeWidth={1.25} className="relative text-white/80" />
      )}
      {label && (
        <span className="relative text-white/70 font-medium uppercase tracking-widest text-xs">
          {label}
        </span>
      )}
    </div>
  );
}
