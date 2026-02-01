"use client";

import * as React from "react";
import { GripVertical, MoveRight } from "lucide-react";

// ─── EXAMPLES DATA ───────────────────────────────────────────────────────────

const examples = [
  {
    prompt: "Build me a simple birthday card website for my mom",
    claudeLabel: "BirthdayCard.tsx",
    claudeType: "code" as const,
    claudeTags: ["✓ Working code", "✓ Actually builds it"],
    slopTags: ["✗ 387 words", "✗ Zero code written"],
  },
  {
    prompt: "Can you help me understand the themes in The Great Gatsby?",
    claudeLabel: "gatsby_analysis.md",
    claudeType: "prose" as const,
    claudeTags: ["✓ Analytical", "✓ Asks a follow-up"],
    slopTags: ["✗ Bullet points & emojis", "✗ \"Hope this helps! 😊\""],
  },
  {
    prompt: "Draft an executive summary for our Q3 sales report",
    claudeLabel: "Q3_Executive_Summary.md",
    claudeType: "prose" as const,
    claudeTags: ["✓ Specific numbers", "✓ Clear recommendation"],
    slopTags: ["✗ Asks for data you gave it", "✗ Never writes the summary"],
  },
];

// ─── CLAUDE CONTENT PER EXAMPLE ──────────────────────────────────────────────

function ClaudeContent({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="absolute bottom-12 left-4 sm:bottom-14 sm:left-6 max-w-[85%] sm:max-w-lg w-full rounded-lg border border-neutral-700 shadow-2xl z-10 overflow-hidden" style={{ backgroundColor: "#2a2a27" }}>
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-neutral-700" style={{ backgroundColor: "#242420" }}>
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="ml-2 text-neutral-500 text-[9px] font-mono">BirthdayCard.tsx</span>
        </div>
        <pre className="p-3 sm:p-4 overflow-x-auto font-mono text-[9px] sm:text-[11px] leading-[1.7] text-neutral-300">
          <span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-300">"react"</span>{"\n"}
          <span className="text-purple-400">import</span> {"{ "}<span className="text-yellow-200">useState</span>{" }"} <span className="text-purple-400">from</span> <span className="text-green-300">"react"</span>{"\n\n"}
          <span className="text-blue-400">export default function</span> <span className="text-yellow-200">BirthdayCard</span>{"() {"}{"\n"}
          {"  "}<span className="text-purple-400">const</span> [flipped, setFlipped] = <span className="text-yellow-200">useState</span>(<span className="text-orange-300">false</span>);{"\n\n"}
          {"  "}<span className="text-purple-400">return</span> ({"\n"}
          {"    "}<span className="text-blue-300">{"<div"}</span> className={<span className="text-green-300">{"`card ${flipped ? 'flipped' : ''}`"}</span>}{"\n"}
          {"          "}<span className="text-blue-300">{"onClick"}</span>={"{"}<span className="text-purple-400">{"() =>"}</span> <span className="text-yellow-200">setFlipped</span>(!flipped){"}"}<span className="text-blue-300">{">"}</span>{"\n"}
          {"      "}<span className="text-blue-300">{"<h1>"}</span><span className="text-pink-300">Happy Birthday, Mom! 🎂</span><span className="text-blue-300">{"</h1>"}</span>{"\n"}
          {"      "}<span className="text-blue-300">{"<p"}</span> className={<span className="text-green-300">"hint"</span>}<span className="text-blue-300">{">"}</span><span className="text-neutral-500">Click to reveal your message</span><span className="text-blue-300">{"</p>"}</span>{"\n"}
          {"    "}<span className="text-blue-300">{"</div>"}</span>{"\n"}
          {"  "}<span className="text-neutral-300">);</span>{"\n"}
          {"}"}
        </pre>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="absolute bottom-12 left-4 sm:bottom-14 sm:left-6 max-w-[85%] sm:max-w-lg w-full rounded-lg border border-neutral-700 shadow-2xl z-10 overflow-hidden" style={{ backgroundColor: "#2a2a27" }}>
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-neutral-700" style={{ backgroundColor: "#242420" }}>
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="ml-2 text-neutral-500 text-[9px] font-mono">gatsby_analysis.md</span>
        </div>
        <div className="p-3 sm:p-4 text-[10px] sm:text-[11px] leading-[1.7] text-neutral-300 space-y-3">
          <p>
            The novel's central tension is the corruption of the American Dream. Gatsby believes wealth can recreate the past and win Daisy back — but Fitzgerald systematically dismantles this. The old money class (Tom, Daisy) will never truly accept him.
          </p>
          <p>
            The green light is the clearest symbol of this: always visible, never reachable. Notice how Daisy's voice is described as <span className="text-yellow-200">"full of money"</span> — Fitzgerald is showing that Gatsby has fallen for what she represents, not who she is.
          </p>
          <p className="text-neutral-500 italic">
            What scenes stood out to you? That might help us dig deeper into specific themes.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute bottom-12 left-4 sm:bottom-14 sm:left-6 max-w-[85%] sm:max-w-lg w-full rounded-lg border border-neutral-700 shadow-2xl z-10 overflow-hidden" style={{ backgroundColor: "#2a2a27" }}>
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-neutral-700" style={{ backgroundColor: "#242420" }}>
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 text-neutral-500 text-[9px] font-mono">Q3_Executive_Summary.md</span>
      </div>
      <div className="p-3 sm:p-4 text-[10px] sm:text-[11px] leading-[1.7] text-neutral-300 space-y-3">
        <p>
          <span className="text-blue-400 font-semibold">Q3 Executive Summary</span>
        </p>
        <p>
          Revenue grew 12% YoY to $4.2M, driven primarily by the enterprise segment (+23%). Customer acquisition cost decreased 8% following the revised onboarding flow shipped in August.
        </p>
        <p>
          Churn ticked up slightly in the SMB tier (4.1% vs 3.6% in Q2). Root cause analysis points to a gap in the 30-day onboarding experience — recommendation is to prioritize the guided setup feature currently in sprint.
        </p>
        <p>
          <span className="text-green-400 font-semibold">Key metric:</span> <span className="text-neutral-400">Net Retention Rate held at 118%</span>, indicating strong expansion revenue despite the SMB churn.
        </p>
      </div>
    </div>
  );
}

// ─── SLOP CONTENT PER EXAMPLE ────────────────────────────────────────────────

function SlopContent({ index }: { index: number }) {
  if (index === 0) {
    return (
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
    );
  }

  if (index === 1) {
    return (
      <div className="mt-16 sm:mt-20 max-w-xl w-full mx-auto overflow-hidden">
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 rounded-full bg-green-600/80 flex-shrink-0 mt-0.5 flex items-center justify-center">
            <span className="text-white text-[10px]">✓</span>
          </div>
          <div className="text-[11px] sm:text-[12px] leading-[1.65] text-neutral-500 font-sans space-y-2 select-none pointer-events-none" style={{ opacity: 0.75 }}>
            <p>
              Great question! Let me break this down for you:
            </p>
            <p>
              The Great Gatsby is a <em>fascinating</em> novel with several <strong>important themes</strong>:
            </p>
            <p>
              ✨ <strong>The American Dream</strong> — This is a major theme!<br />
              &nbsp;&nbsp;• The pursuit of happiness<br />
              &nbsp;&nbsp;• Wealth and success<br />
              &nbsp;&nbsp;• The corruption of ideals
            </p>
            <p>
              💚 <strong>Love and Relationships</strong> — So important!<br />
              &nbsp;&nbsp;• Gatsby's obsession with Daisy<br />
              &nbsp;&nbsp;• Complex dynamics<br />
              &nbsp;&nbsp;• Unrequited feelings
            </p>
            <p>
              🎭 <strong>Social Class</strong> — A key element!<br />
              &nbsp;&nbsp;• Old money vs. new money<br />
              &nbsp;&nbsp;• The Valley of Ashes<br />
              &nbsp;&nbsp;• Appearances vs. reality
            </p>
            <p>
              <strong>In conclusion,</strong> Fitzgerald masterfully weaves these themes together into a timeless masterpiece that continues to resonate with readers today! Hope this helps! 😊
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 sm:mt-20 max-w-xl w-full mx-auto overflow-hidden">
      <div className="flex items-start gap-3">
        <div className="w-7 h-7 rounded-full bg-green-600/80 flex-shrink-0 mt-0.5 flex items-center justify-center">
          <span className="text-white text-[10px]">✓</span>
        </div>
        <div className="text-[11px] sm:text-[12px] leading-[1.65] text-neutral-500 font-sans space-y-2.5 select-none pointer-events-none" style={{ opacity: 0.75 }}>
          <p>
            Sure! I'd be happy to help you draft an executive summary for your Q3 sales report. An executive summary is a really important document — it's essentially the first thing stakeholders will read, so it's crucial that it makes a strong impression.
          </p>
          <p>
            Before I draft anything, it might be worth considering what the <em>key objectives</em> of the summary should be. Generally speaking, an executive summary should cover the main highlights — but of course, this can vary depending on your industry, your audience, and the specific goals of the report. You'll want to think about what matters most to your stakeholders.
          </p>
          <p>
            In terms of <em>structure</em>, most executive summaries follow a fairly standard format — an overview section, key findings, and then recommendations. That said, there's no single "right" way to structure one — some organizations prefer a more narrative approach, while others like to lead with data and metrics. It really depends on your company's culture and what your leadership team responds to best.
          </p>
          <p>
            It's also worth noting that without the actual Q3 data — revenue figures, growth metrics, customer acquisition numbers, and so on — I wouldn't want to put specific numbers in there that might not be accurate. Could you share the underlying data or the full report? That way I can make sure the summary is grounded in real figures rather than making assumptions.
          </p>
          <p>
            Once I have that, I can definitely put something together! In the meantime, I'd also recommend looking at how previous quarters' summaries were written in your organization — consistency is important for executive-level documents.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export const ComparisonSlider = () => {
  const [sliderPosition, setSliderPosition] = React.useState(15);
  const [hasInteracted, setHasInteracted] = React.useState(false);
  const [currentExample, setCurrentExample] = React.useState(0);
  const [fadeOpacity, setFadeOpacity] = React.useState(1);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef(false);
  const animationRef = React.useRef<number | null>(null);
  const cycleTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHoveringRef = React.useRef(false);

  // ── Sweep animation ──────────────────────────────────────────────────────
  const runSweep = React.useCallback(() => {
    const startPos = 15;
    const endPos = 78;
    const duration = 2200;
    const startTime = performance.now();

    const animate = (now: number) => {
      if (isHoveringRef.current) return;
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
  }, []);

  // ── Cycle logic ──────────────────────────────────────────────────────────
  const startCycle = React.useCallback(() => {
    if (cycleTimerRef.current) {
      clearTimeout(cycleTimerRef.current);
      cycleTimerRef.current = null;
    }

    cycleTimerRef.current = setTimeout(() => {
      if (isHoveringRef.current) return;

      // Fade out
      setFadeOpacity(0);

      setTimeout(() => {
        if (isHoveringRef.current) return;

        // Swap example and reset slider
        setCurrentExample((prev) => (prev + 1) % examples.length);
        setSliderPosition(15);

        // Fade in
        setTimeout(() => {
          if (isHoveringRef.current) return;
          setFadeOpacity(1);

          // Run sweep after fade-in completes
          setTimeout(() => {
            if (isHoveringRef.current) return;
            runSweep();
            startCycle();
          }, 400);
        }, 50);
      }, 400);
    }, 3500);
  }, [runSweep]);

  // ── Initial mount ────────────────────────────────────────────────────────
  React.useEffect(() => {
    runSweep();
    const timer = setTimeout(() => {
      startCycle();
    }, 2200);
    return () => {
      clearTimeout(timer);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (cycleTimerRef.current) clearTimeout(cycleTimerRef.current);
    };
  }, []);

  // ── Hover pause/resume ───────────────────────────────────────────────────
  const handleMouseEnter = () => {
    isHoveringRef.current = true;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    if (cycleTimerRef.current) {
      clearTimeout(cycleTimerRef.current);
      cycleTimerRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    isHoveringRef.current = false;
    setSliderPosition(15);
    setFadeOpacity(1);
    setTimeout(() => {
      runSweep();
      setTimeout(() => {
        startCycle();
      }, 2200);
    }, 100);
  };

  // ── Drag handlers ────────────────────────────────────────────────────────
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

  const example = examples[currentExample];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl h-[350px] sm:h-[500px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 select-none group cursor-ew-resize touch-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => updateSlider(e.clientX)}
    >
      {/* Fade wrapper */}
      <div
        className="absolute inset-0"
        style={{ opacity: fadeOpacity, transition: "opacity 400ms ease" }}
      >
        {/* Right Side: Claude's output */}
        <div className="absolute inset-0 flex">
          <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden relative" style={{ backgroundColor: "#1e1e1c" }}>
            <div
              className="absolute inset-0 z-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="w-full h-full max-w-4xl relative flex flex-col z-10 p-6 sm:p-8">
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono border z-10 backdrop-blur-md shadow-lg font-semibold tracking-tight" style={{ backgroundColor: "rgba(30,30,28,0.9)", borderColor: "rgba(100,140,255,0.4)", color: "#60a5fa" }}>
                Claude
              </div>

              <div className="absolute top-12 sm:top-14 left-4 sm:left-6 max-w-[60%] sm:max-w-sm">
                <div className="backdrop-blur-sm border border-neutral-600 rounded-lg rounded-tl-none px-3 py-2 shadow-lg" style={{ backgroundColor: "rgba(42,42,39,0.85)" }}>
                  <p className="text-neutral-300 text-[11px] sm:text-xs font-mono">
                    <span className="text-neutral-500">{">"} </span>
                    {example.prompt}
                  </p>
                </div>
              </div>

              <ClaudeContent index={currentExample} />

              {/* Claude verdict tags */}
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-6 flex flex-wrap gap-1.5 z-20">
                {example.claudeTags.map((tag, i) => (
                  <span key={i} className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full border" style={{ backgroundColor: "rgba(34,197,94,0.12)", borderColor: "rgba(34,197,94,0.3)", color: "#4ade80" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Left Side: The Slop - Clipped */}
        <div
          className="absolute inset-0 overflow-hidden z-20"
          style={{
            clipPath: `inset(0 0 0 ${sliderPosition}%)`,
          }}
        >
          <div className="w-full h-full relative flex flex-col justify-center p-6 sm:p-8" style={{ backgroundColor: "#faf8f5" }}>
            <div className="absolute top-4 right-4 bg-neutral-100 text-neutral-500 px-3 py-1 rounded-full text-xs font-mono border border-neutral-200 z-10">
              Other AI
            </div>

            <div className="absolute top-12 sm:top-14 right-4 sm:right-6 max-w-[60%] sm:max-w-sm">
              <div className="bg-white border border-neutral-200 rounded-lg rounded-tr-none px-3 py-2 shadow-sm">
                <p className="text-neutral-500 text-[11px] sm:text-xs font-mono">
                  <span className="text-neutral-400">{">"} </span>
                  {example.prompt}
                </p>
              </div>
            </div>

            <SlopContent index={currentExample} />

            {/* Slop verdict tags */}
            <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-6 flex flex-wrap gap-1.5 justify-end z-20">
              {example.slopTags.map((tag, i) => (
                <span key={i} className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full border" style={{ backgroundColor: "rgba(239,68,68,0.08)", borderColor: "rgba(239,68,68,0.25)", color: "#f87171" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slider Handle — outside fade wrapper so it's always visible */}
      <div
        className="absolute inset-y-0 w-1 bg-white cursor-ew-resize hover:scale-x-150 transition-transform z-30"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)]">
          <GripVertical className="w-5 h-5 text-black" />
        </div>

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