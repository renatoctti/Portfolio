"use client";
import { useInView } from "@/lib/useInView";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: "bottom" | "left" | "right";
}

const transforms: Record<string, string> = {
  bottom: "translateY(28px)",
  left:   "translateX(-28px)",
  right:  "translateX(28px)",
};

export default function AnimateIn({ children, className = "", delay = 0, from = "bottom" }: Props) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : transforms[from],
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
