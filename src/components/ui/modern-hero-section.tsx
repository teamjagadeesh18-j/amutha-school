"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MaskTextReveal } from "@/components/ui/mask-text-reveal";
import MovingGradientButton from "@/components/ui/moving-gradient-button";

function ElegantShape({
  className, delay = 0, width = 400, height = 100, rotate = 0,
}: { className?: string; delay?: number; width?: number; height?: number; rotate?: number; }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{ duration: 2.4, delay, ease: [0.23, 0.86, 0.39, 0.96], opacity: { duration: 1.2 } }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div className={cn("absolute inset-0 rounded-full bg-gradient-to-r from-[#5e6ad2]/20 to-transparent backdrop-blur-[2px] border border-[#5e6ad2]/30 shadow-sm")} />
      </motion.div>
    </motion.div>
  );
}

export default function HeroGeometric({
  badge = "Krishna Nagar, Thiruninravur • Rating 4.6★",
  title1 = "Refined Academic Guidance & Excellence",
  title2 = "Academic Distinction",
  description = "Structured learning pathways, dedicated staff, and individual academic support from primary to high school.",
  bgImage = "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=80"
}: { badge?: string; title1?: string; title2?: string; description?: string; bgImage?: string }) {
  return (
    <div className="relative min-h-[640px] w-full flex items-center justify-center overflow-hidden bg-[#f7f8f9] py-20 px-6">
      {/* Subtle School Campus Background Image in Website's Light Theme */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.14]">
        <img
          src={bgImage}
          alt="Amutha Matriculation School Campus"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f7f8f9]/50 to-[#f7f8f9]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60 z-10">
        <ElegantShape delay={0.3} width={500} height={120} rotate={12} className="left-[-5%] top-[15%]" />
        <ElegantShape delay={0.5} width={400} height={100} rotate={-15} className="right-[-5%] top-[65%]" />
        <ElegantShape delay={0.4} width={250} height={70} rotate={-8} className="left-[10%] bottom-[10%]" />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto text-center space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-[12px] bg-[#eeeffc] text-[#5e6ad2] text-xs font-semibold uppercase tracking-wider font-body shadow-sm">
          📍 {badge}
        </span>
        <MaskTextReveal text={title1} className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#0f172a] tracking-tight leading-[1.15] font-heading" direction="bottom-to-top" />
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-body max-w-2xl mx-auto">
          {description}
        </p>
        <div className="pt-4 flex justify-center gap-4 font-body">
          <MovingGradientButton
            label="Apply Now"
            link="#connect"
            colors={{ fill: "#5e6ad2", hoverFill: "#4b57be", textColor: "#ffffff", hoverTextColor: "#ffffff" }}
            stroke={{ color: "#838ee5", headColor: "#ffffff", count: 2, speed: 30, movement: "step" }}
          />
          <a href="#about" className="px-6 py-3.5 rounded-[12px] border border-[#e2e8f0] text-[#0f172a] bg-white font-medium text-base hover:bg-slate-50 shadow-sm">
            Explore Curriculum
          </a>
        </div>
      </div>
    </div>
  );
}
