"use client";

import * as React from "react";
import { GripVertical, MoveRight } from "lucide-react";

import Image from "next/image";

export const ComparisonSlider = () => {
  const [sliderPosition, setSliderPosition] = React.useState(15);
  const [hasInteracted, setHasInteracted] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef(false);
  const animationRef = React.useRef<number | null>(null);

  // Auto-animate on mount: sweep from 15% -> 78% over ~2.2s, then stop
  React.useEffect(() => {
    const startPos = 15;
    const endPos = 78;
    const duration = 2200;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startPos + (endPos - startPos) * eased;
      setSliderPosition(current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return;
    updateSlider(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return;
    updateSlider(e.touches[0].clientX);
  };

  const updateSlider = (clientX: number) => {
    if (containerRef.current) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      if (!hasInteracted) setHasInteracted(true);
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  const handleMouseDown = () => {
    isDragging.current = true;
    if (!hasInteracted) setHasInteracted(true);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  React.useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl h-[350px] sm:h-[500px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 select-none group cursor-ew-resize touch-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onClick={(e) => updateSlider(e.clientX)}
    >
      {/* Right Side: Claude's output */}
      <div className="absolute inset-0 flex">
        <div className="w-full h-full bg-neutral-950 flex flex-col items-center justify-center overflow-hidden relative">
          {/* Subtle background grid */}
          <div
            className="absolute inset-0 z-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="w-full h-full max-w-4xl relative flex flex-col z-10 p-6 sm:p-8">
            {/* Label */}
            <div className="absolute top-4 left-4 bg-neutral-900/90 text-blue-400 px-3 py-1 rounded-full text-xs font-mono border border-blue-500/50 z-10 backdrop-blur-md shadow-lg font-semibold tracking-tight">
              Claude
            </div>

            {/* Prompt bubble */}
            <div className="absolute top-12 sm:top-14 left-4 sm:left-6 max-w-[60%] sm:max-w-sm">
              <div className="bg-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-lg rounded-tl-none px-3 py-2 shadow-lg">
                <p className="text-neutral-300 text-[11px] sm:text-xs font-mono">
                  <span className="text-neutral-500">{">"} </span>
                  Build me a simple birthday card website for my mom
                </p>
              </div>
            </div>

            {/* Code Block */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-[85%] sm:max-w-lg w-full bg-neutral-900/90 backdrop-blur-md rounded-lg border border-neutral-800 shadow-2xl z-10 overflow-hidden">
              {/* Terminal chrome */}
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-neutral-800 bg-neutral-900/50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-2 text-neutral-600 text-[9px] font-mono">BirthdayCard.tsx</span>
              </div>
              {/* Code */}
              <pre className="p-3 sm:p-4 overflow-x-auto font-mono text-[9px] sm:text-[11px] leading-[1.7] text-neutral-300">
                <span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-300">"react"</span>{"\n"}
                <span className="text-purple-400">import</span> {"{ "}<span className="text-yellow-200">useState</span>{" }"} <span className="text-purple-400">from</span> <span className="text-green-300">"react"</span>{"\n\n"}
                <span className="text-blue-400">export default function</span> <span className="text-yellow-200">BirthdayCard</span>{"() {"}{"\n"}
                {"  "}<span className="text-purple-400">const</span> [flipped, setFlipped] = <span className="text-yellow-200">useState</span>(<span className="text-orange-300">false</span>);{"\n\n"}
                {"  "}<span className="text-purple-400">return</span> ({"\n"}
                {"    "}<span className="text-blue-300">{"<div"}</span> className={<span className="text-green-300">{"`card ${flipped ? 'flipped' : ''}`"}</span>}{"\n"}
                {"          "}<span className="text-blue-300">{"onClick"}</span>={{"{"}<span className="text-purple-400">() ={">"}</span> <span className="text-yellow-200">setFlipped</span>(!flipped){"}"}>{">"}{"\n"}
                {"      "}<span className="text-blue-300">{"<h1>"}</span><span className="text-pink-300">Happy Birthday, Mom! 🎂</span><span className="text-blue-300">{"</h1>"}</span>{"\n"}
                {"      "}<span className="text-blue-300">{"<p"}</span> className={<span className="text-green-300">"hint"</span>}{">"}<span className="text-neutral-500">Click to reveal your message</span><span className="text-blue-300">{"</p>"}</span>{"\n"}
                {"    "}<span className="text-blue-300">{"</div>"}</span>{"\n"}
                {"  ");}{"\n"}
                {"}"}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Left Side: The Slop (Foreground) - Clipped */}
      <div
        className="absolute inset-0 overflow-hidden z-20"
        style={{
          clipPath: `inset(0 0 0 ${sliderPosition}%)`,
        }}
      >
        <div className="w-full h-full relative flex flex-col justify-center p-6 sm:p-8" style={{ backgroundColor: "#faf8f5" }}>
          {/* Label */}
          <div className="absolute top-4 right-4 bg-neutral-100 text-neutral-500 px-3 py-1 rounded-full text-xs font-mono border border-neutral-200 z-10">
            Other AI
          </div>

          {/* Prompt echo */}
          <div className="absolute top-12 sm:top-14 right-4 sm:right-6 max-w-[60%] sm:max-w-sm">
            <div className="bg-white border border-neutral-200 rounded-lg rounded-tr-none px-3 py-2 shadow-sm">
              <p className="text-neutral-500 text-[11px] sm:text-xs font-mono">
                <span className="text-neutral-400">{">"} </span>
                Build me a simple birthday card website for my mom
              </p>
            </div>
          </div>

          {/* Slop response */}
          <div className="mt-16 sm:mt-20 max-w-xl w-full mx-auto overflow-hidden">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-green-600/80 flex-shrink-0 mt-0.5 flex items-center justify-center">
                <span className="text-white text-[10px]">✓</span>
              </div>
              <div className="text-[11px] sm:text-[12px] leading-[1.65] text-neutral-500 font-sans space-y-2.5 select-none pointer-events-none" style={{ opacity: 0.75 }}>
                <p>
                  Great question! I'd be happy to help you create a birthday card website for your mom — what a thoughtful gesture! A birthday card website is a wonderful way to show your appreciation, and there are so many creative directions you could take this.
                </p>
                <p>
                  First, let's think about what makes a great birthday card website. You'll want to consider the overall <em>theme</em> — is your mom into flowers? Travel? Cooking? The theme will inform your color palette, imagery, and tone. It's really important to personalize it, because — as any marketing expert will tell you — personalization is key to emotional engagement.
                </p>
                <p>
                  In terms of <em>structure</em>, I'd recommend starting with a clean landing page. You could include a hero section with a warm greeting — something like "Happy Birthday, Mom!" — and then maybe a scrolling section with some family photos or memories. A timeline of her life milestones could be a really nice touch, though that would require gathering quite a bit of information first.
                </p>
                <p>
                  For the <em>technical side</em>, you have a few options — you could use plain HTML and CSS, which is the simplest approach, or you could use a framework like React or Vue.js for a more dynamic experience. That said, for a simple birthday card, plain HTML is probably sufficient — though React does offer some nice benefits in terms of component reusability and state management, which could be useful if you ever wanted to expand this into something bigger down the line.
                </p>
                <p>
                  You'll also want to think about <em>hosting</em>. There are several free options out there — GitHub Pages, Netlify, and Vercel are all popular choices. Each has its own pros and cons, so it really depends on your comfort level with the technology and how much customization you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute inset-y-0 w-1 bg-white cursor-ew-resize hover:scale-x-150 transition-transform z-30"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)]">
          <GripVertical className="w-5 h-5 text-black" />
        </div>

        {/* Drag hint — shows until user interacts */}
        {!hasInteracted && (
          <div className="absolute top-1/2 -translate-y-1/2 left-8 flex items-center gap-2 pointer-events-none animate-pulse">
            <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800/50 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-xl">
              <span className="text-xs font-medium whitespace-nowrap">Drag to compare</span>
              <MoveRight className="w-4 h-4 animate-bounce-x" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
