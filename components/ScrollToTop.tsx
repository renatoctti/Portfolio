"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white flex items-center justify-center shadow-lg shadow-[#7c3aed]/30"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.9)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}
    >
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
