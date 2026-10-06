import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Info, Sparkles } from "lucide-react";
import { careTracksData, careTracksDisclaimer } from "../data/careTracks";

export const CareTracks: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const clientWidth = scrollContainerRef.current.clientWidth;
      const scrollAmount = clientWidth; // Scroll by one full visible viewport page
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
      setTimeout(checkScroll, 350);
    }
  };

  // Curated gradient themes matching the Vayosh / Nithya Mitra palette
  const cardThemes = [
    {
      bg: "bg-gradient-to-br from-[#17352F] via-[#21463F] to-[#0E2420]",
      glow: "bg-[#2D6054]/40",
      accent: "text-[#D8C8B3]",
      tagBg: "bg-white/10 border-white/15 text-[#D8C8B3]"
    },
    {
      bg: "bg-gradient-to-br from-[#8E4430] via-[#A85A42] to-[#5C2314]",
      glow: "bg-[#D97D64]/30",
      accent: "text-[#F7E5DE]",
      tagBg: "bg-white/10 border-white/15 text-[#F7E5DE]"
    },
    {
      bg: "bg-gradient-to-br from-[#2D3E33] via-[#3B5446] to-[#18261E]",
      glow: "bg-[#517A63]/30",
      accent: "text-[#D8C8B3]",
      tagBg: "bg-white/10 border-white/15 text-[#D8C8B3]"
    },
    {
      bg: "bg-gradient-to-br from-[#3D342C] via-[#57493D] to-[#241E18]",
      glow: "bg-[#85705E]/30",
      accent: "text-[#EBDDCF]",
      tagBg: "bg-white/10 border-white/15 text-[#EBDDCF]"
    },
    {
      bg: "bg-gradient-to-br from-[#1E3B35] via-[#2D544C] to-[#112420]",
      glow: "bg-[#3D7A6E]/30",
      accent: "text-[#D8C8B3]",
      tagBg: "bg-white/10 border-white/15 text-[#D8C8B3]"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FBFAF6] border-b border-[#17352F]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B86F55] block mb-2 font-sans">
              OPTIONAL CARE TRACKS
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-tight font-normal"
            >
              Additional support when a specific health need arises.
            </motion.h2>

            <p className="mt-3 text-sm text-[#68716D] font-sans">
              These can be added to the core family-support plan and coordinated through appropriate healthcare partners.
            </p>
          </div>

          {/* Scroll Navigation Buttons */}
          <div className="flex items-center gap-3 self-end">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-3.5 rounded-full border transition-all cursor-pointer shadow-xs ${
                canScrollLeft
                  ? "border-[#17352F]/30 text-[#17352F] hover:bg-[#17352F] hover:text-[#F7F4ED] bg-[#FBFAF6]"
                  : "border-[#17352F]/10 text-[#17352F]/30 bg-[#EDE8DE]/40 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-3.5 rounded-full border transition-all cursor-pointer shadow-xs ${
                canScrollRight
                  ? "border-[#17352F]/30 text-[#17352F] hover:bg-[#17352F] hover:text-[#F7F4ED] bg-[#FBFAF6]"
                  : "border-[#17352F]/10 text-[#17352F]/30 bg-[#EDE8DE]/40 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Paginated Complete Card Carousel (Exact 3 Cards on Desktop, 2 on Tablet, 1 on Mobile - No Half Cut) */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {careTracksData.map((track, idx) => {
            const theme = cardThemes[idx % cardThemes.length];

            return (
              <div
                key={track.id}
                className={`w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] shrink-0 snap-start ${theme.bg} rounded-3xl p-7 sm:p-8 flex flex-col justify-between text-[#F7F4ED] relative overflow-hidden border border-white/15 shadow-xl transition-all duration-300 group min-h-[380px]`}
              >
                {/* Subtle Structural Grid Overlay */}
                <div
                  className="absolute inset-0 opacity-[0.08] pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.7) 1px, transparent 1px)`,
                    backgroundSize: "36px 36px"
                  }}
                />

                {/* Soft Radial Ambient Glow */}
                <div
                  className={`absolute -top-16 -right-16 w-48 h-48 rounded-full ${theme.glow} blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-125`}
                />

                <div className="relative z-10">
                  {/* Track Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full border backdrop-blur-md ${theme.tagBg}`}>
                      Track {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-white/40 group-hover:text-white/80 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-[25px] font-serif font-normal text-white mb-3.5 leading-snug group-hover:text-[#F7F4ED] transition-colors">
                    {track.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans font-light">
                    {track.description}
                  </p>
                </div>

                {/* Bottom Focus Capsule */}
                <div className="relative z-10 mt-8 pt-4 border-t border-white/15">
                  <span className={`text-[10px] uppercase tracking-wider font-bold block mb-0.5 font-sans ${theme.accent}`}>
                    Specialist Focus
                  </span>
                  <span className="text-xs text-white font-medium font-sans leading-snug">
                    {track.keySupport}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory Disclaimer Notice */}
        <div className="mt-4 p-4 bg-[#EDE8DE] border border-[#D8C8B3] rounded-2xl flex items-start gap-3 text-xs text-[#17211F]/80 font-sans">
          <Info className="w-4 h-4 text-[#B86F55] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="font-semibold text-[#17352F]">Service Clarity:</strong> {careTracksDisclaimer}
          </p>
        </div>

      </div>
    </section>
  );
};
