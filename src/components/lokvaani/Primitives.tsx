import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import type { Verification } from "@/data/archive";

export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("label-xs text-muted-foreground", className)}>{children}</span>;
}

export function SectionHeading({
  number,
  label,
  title,
  intro,
  align = "left",
}: {
  number?: string;
  label?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {(number || label) && (
        <div
          className={cn(
            "mb-4 flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          {number && <span className="label-xs text-gold">{number}</span>}
          {number && label && <span className="h-px w-8 bg-gold/60" />}
          {label && <Label>{label}</Label>}
        </div>
      )}
      <h2 className="text-3xl leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function GoldRule({ className }: { className?: string }) {
  return <div className={cn("rule-gold w-full", className)} />;
}

const verificationMap: Record<Verification, { text: string; dot: string; cls: string }> = {
  community: { text: "Community Verified", dot: "bg-sage", cls: "text-sage border-sage/40" },
  expert: { text: "Expert Reviewed", dot: "bg-indigo", cls: "text-indigo border-indigo/40" },
  review: { text: "Under Review", dot: "bg-gold", cls: "text-gold-foreground border-gold/60" },
};

export function VerificationBadge({
  status,
  className,
}: {
  status: Verification;
  className?: string;
}) {
  const v = verificationMap[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border px-2.5 py-1 label-xs bg-card/70 backdrop-blur-sm",
        v.cls,
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full", v.dot)} />
      {v.text}
    </span>
  );
}

export function DemoTag({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-terracotta/40 bg-terracotta/10 px-2 py-0.5 label-xs text-terracotta",
        className,
      )}
    >
      Demo Content
    </span>
  );
}

export function Waveform({
  bars = 40,
  active = false,
  progress = 0,
  className,
  onSeek,
}: {
  bars?: number;
  active?: boolean;
  progress?: number;
  className?: string;
  onSeek?: (ratio: number) => void;
}) {
  return (
    <div
      className={cn("flex h-10 items-center gap-[2px]", onSeek && "cursor-pointer", className)}
      onClick={
        onSeek
          ? (e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              onSeek((e.clientX - rect.left) / rect.width);
            }
          : undefined
      }
      aria-hidden
    >
      {Array.from({ length: bars }).map((_, i) => {
        const h = 22 + Math.abs(Math.sin(i * 1.7)) * 62 + ((i * 13) % 17);
        const passed = i / bars <= progress;
        return (
          <span
            key={i}
            className={cn(
              "flex-1 rounded-full transition-colors",
              passed ? "bg-terracotta" : "bg-foreground/20",
              active && "animate-wave",
            )}
            style={{
              height: `${Math.min(h, 100)}%`,
              animationDelay: `${(i % 9) * 90}ms`,
            }}
          />
        );
      })}
    </div>
  );
}
