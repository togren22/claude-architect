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
    slopTags: ["✗ Bullet points & emojis", '✗ "Hope this helps! 😊"'],
  },
  {
    prompt: "Draft an executive summary for our Q3 sales report",
    claudeLabel: "Q3_Executive_Summary.md",
    claudeType: "prose" as const,
    claudeTags: ["✓ Specific numbers", "✓ Clear recommendation"],
    slopTags: ["✗ Asks for data you gave it", "✗ Never writes the summary"],
  },
  {
    prompt: "Write a RhinoScript to generate a parametric truss bridge",
    claudeLabel: "truss_bridge.py",
    claudeType: "code" as const,
    claudeTags: ["✓ Runs in Rhino", "✓ Parametric & clean"],
    slopTags: ["✗ Explains bridges", "✗ Never writes code"],
  },
];

// ─── CLAUDE CONTENT PER EXAMPLE ──────────────────────────────────────────────

function ClaudeContent({ index }: { index: number }) {
  const cardShell = "w-full rounded-lg border border-neutral-700 shadow-2xl overflow-hidden";
  const cardHeader = (label: string) => (
    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-neutral-700 flex-shrink-0" style={{ backgroundColor: "#242420" }}>
      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
      <span className="ml-2 text-neutral-500 text-[9px] font-mono">{label}</span>
    </div>
  );

  if (index === 0) {
    return (
      <div className={cardShell} style={{ backgroundColor: "#2a2a27" }}>
        {cardHeader("BirthdayCard.tsx")}
        <pre className="p-3 sm:p-4 overflow-hidden font-mono text-[9px] sm:text-[11px] leading-[1.7] text-neutral-300">
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
      <div className={cardShell} style={{ backgroundColor: "#2a2a27" }}>
        {cardHeader("gatsby_analysis.md")}
        <div className="p-3 sm:p-4 text-[10px] sm:text-[11px] leading-[1.7] text-neutral-300 space-y-3 overflow-hidden">
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

  if (index === 2) {
    return (
      <div className={cardShell} style={{ backgroundColor: "#2a2a27" }}>
        {cardHeader("Q3_Executive_Summary.md")}
        <div className="p-3 sm:p-4 text-[10px] sm:text-[11px] leading-[1.7] text-neutral-300 space-y-3 overflow-hidden">
          <p><span className="text-blue-400 font-semibold">Q3 Executive Summary</span></p>
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

  // index === 3: Rhino
  return (
    <div className={cardShell} style={{ backgroundColor: "#2a2a27" }}>
      {cardHeader("truss_bridge.py")}
      <pre className="p-3 sm:p-4 overflow-hidden font-mono text-[9px] sm:text-[11px] leading-[1.7] text-neutral-300">
        <span className="text-purple-400">import</span> <span className="text-green-300">rhinoscriptsyntax</span> <span className="text-purple-400">as</span> rs{"\n\n"}
        <span className="text-blue-400">def</span> <span className="text-yellow-200">create_truss</span>(<span className="text-orange-300">length, height, subdivisions</span>):{"\n"}
        {"  "}<span className="text-neutral-500"># Generate bottom and top chord points</span>{"\n"}
        {"  "}<span className="text-purple-400">for</span> i <span className="text-purple-400">in</span> <span className="text-yellow-200">range</span>(subdivisions + <span className="text-orange-300">1</span>):{"\n"}
        {"    "}x = i * (length / subdivisions){"\n"}
        {"    "}bot = rs.<span className="text-yellow-200">CreatePoint3D</span>(x, <span className="text-orange-300">0</span>, <span className="text-orange-300">0</span>){"\n"}
        {"    "}top = rs.<span className="text-yellow-200">CreatePoint3D</span>(x, <span className="text-orange-300">0</span>, height){"\n\n"}
        {"  "}<span className="text-neutral-500"># Pipe the chords</span>{"\n"}
        {"  "}base = rs.<span className="text-yellow-200">AddPolyline</span>(bottom_pts){"\n"}
        {"  "}rs.<span className="text-yellow-200">AddPipe</span>(base, <span className="text-orange-300">0</span>, <span className="text-orange-300">0.3</span>){"\n"}
        {"  "}rs.<span className="text-yellow-200">AddPipe</span>(top_chord, <span className="text-orange-300">0</span>, <span className="text-orange-300">0.3</span>)
      </pre>
    </div>
  );
}

// ─── SLOP CONTENT PER EXAMPLE ────────────────────────────────────────────────

function SlopContent({ index }: { index: number }) {
  const slopShell = "flex items-start gap-2 sm:gap-3";
  const slopAvatar = (
    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-600/80 flex-shrink-0 mt-0.5 flex items-center justify-center">
      <span className="text-white text-[9px] sm:text-[10px]">✓</span>
    </div>
  );
  const slopText = "text-[10px] sm:text-[11px] leading-[1.55] text-neutral-500 font-sans space-y-1.5 sm:space-y-2 select-none pointer-events-none";

  if (index === 0) {
    return (
      <div className={slopShell}>
        {slopAvatar}
        <div className={slopText} style={{ opacity: 0.75 }}>
          <p>Great question! I'd be happy to help you create a birthday card website for your mom — what a thoughtful gesture! A birthday card website is a wonderful way to show your appreciation, and there are so many creative directions you could take this.</p>
          <p>First, let's think about what makes a great birthday card website. You'll want to consider the overall <em>theme</em> — is your mom into flowers? Travel? Cooking? The theme will inform your color palette, imagery, and tone. It's really important to personalize it, because personalization is key to emotional engagement.</p>
          <p>In terms of <em>structure</em>, I'd recommend starting with a clean landing page. You could include a hero section with a warm greeting, and then maybe a scrolling section with some family photos or memories. A timeline of her life milestones could be a really nice touch, though that would require gathering quite a bit of information first.</p>
          <p>For the <em>technical side</em>, you have a few options — you could use plain HTML and CSS, which is the simplest approach, or you could use a framework like React or Vue.js for a more dynamic experience. That said, for a simple birthday card, plain HTML is probably sufficient.</p>
          <p>You'll also want to think about <em>hosting</em>. There are several free options out there — GitHub Pages, Netlify, and Vercel are all popular choices. Each has its own pros and cons, so it really depends on your comfort level with the technology.</p>
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className={slopShell}>
        {slopAvatar}
        <div className={slopText} style={{ opacity: 0.75 }}>
          <p>Great question! Let me break this down for you:</p>
          <p>The Great Gatsby is a <em>fascinating</em> novel with several <strong>important themes</strong>:</p>
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
          <p><strong>In conclusion,</strong> Fitzgerald masterfully weaves these themes together into a timeless masterpiece that continues to resonate with readers today! Hope this helps! 😊</p>
        </div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className={slopShell}>
        {slopAvatar}
        <div className={slopText} style={{ opacity: 0.75 }}>
          <p>Sure! I'd be happy to help you draft an executive summary for your Q3 sales report. An executive summary is a really important document — it's essentially the first thing stakeholders will read, so it's crucial that it makes a strong impression.</p>
          <p>Before I draft anything, it might be worth considering what the <em>key objectives</em> of the summary should be. Generally speaking, an executive summary should cover the main highlights — but of course, this can vary depending on your industry, your audience, and the specific goals of the report.</p>
          <p>In terms of <em>structure</em>, most executive summaries follow a fairly standard format — an overview section, key findings, and then recommendations. That said, there's no single "right" way to structure one — some organizations prefer a more narrative approach, while others like to lead with data and metrics.</p>
          <p>It's also worth noting that without the actual Q3 data — revenue figures, growth metrics, customer acquisition numbers, and so on — I wouldn't want to put specific numbers in there that might not be accurate. Could you share the underlying data or the full report?</p>
          <p>Once I have that, I can definitely put something together! In the meantime, I'd also recommend looking at how previous quarters' summaries were written in your organization — consistency is important for executive-level documents.</p>
        </div>
      </div>
    );
  }

  // index === 3: Rhino
  return (
    <div className={slopShell}>
      {slopAvatar}
      <div className={slopText} style={{ opacity: 0.75 }}>
        <p>Certainly! Here is a comprehensive breakdown of the bridge structure. A bridge is typically a structure built to span a physical obstacle — such as a body of water, valley, road, or rail — without blocking the way underneath. It is constructed for the purpose of providing passage over the obstacle.</p>
        <p>However, one must also consider the socio-economic impact of the bridge. It connects communities, facilitates trade, and serves as a monument to human engineering. The aesthetic qualities of the bridge are also of significant importance, as it must blend seamlessly with the surrounding environment.</p>
        <p>In terms of materials, we have a plethora of options. Steel offers high tensile strength, while concrete provides excellent compressive strength. A hybrid approach often yields the best results. Furthermore, the maintenance schedule must be rigorously adhered to in order to ensure longevity.</p>
        <p>Let us not forget the environmental impact assessments that must be conducted prior to construction. These assessments evaluate the potential effects on local flora and fauna. The bridge is not merely a physical structure but a complex integration of engineering, environmental science, and urban planning.</p>
        <p>Therefore, when designing a bridge, one must take a holistic approach. It is not sufficient to simply calculate loads and stresses. One must also consider the human element. How will people interact with the bridge? These are the questions that must be answered.</p>
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

      setFadeOpacity(0);

      setTimeout(() => {
        if (isHoveringRef.current) return;
        setCurrentExample((prev) => (prev + 1) % examples.length);
        setSliderPosition(15);

        setTimeout(() => {
          if (isHoveringRef.current) return;
          setFadeOpacity(1);

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
      className="relative w-full max-w-5xl overflow-hidden rounded-xl border border-neutral-800 select-none group cursor-ew-resize touch-none"
      style={{ backgroundColor: "#1e1e1c", height: "420px" }}
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
        <div className="absolute inset-0">
          <div className="w-full h-full flex flex-col overflow-hidden relative" style={{ backgroundColor: "#1e1e1c" }}>
            {/* Grid bg */}
            <div
              className="absolute inset-0 z-0 opacity-[0.04]"
              style={{
                backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Claude label */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 rounded-full text-xs font-mono border z-10 font-semibold tracking-tight" style={{ backgroundColor: "rgba(30,30,28,0.9)", borderColor: "rgba(100,140,255,0.4)", color: "#60a5fa" }}>
              Claude
            </div>

            {/* Prompt bubble */}
            <div className="absolute top-10 left-3 sm:top-12 sm:left-4 max-w-[60%] sm:max-w-sm z-10">
              <div className="border border-neutral-600 rounded-lg rounded-tl-none px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-lg" style={{ backgroundColor: "rgba(42,42,39,0.85)" }}>
                <p className="text-neutral-300 text-[9px] sm:text-xs font-mono">
                  <span className="text-neutral-500">{">"} </span>
                  {example.prompt}
                </p>
              </div>
            </div>

            {/* Claude content — flows in the space between prompt and tags */}
            <div className="relative z-10 flex-1 flex flex-col justify-end overflow-hidden" style={{ paddingTop: "80px", paddingBottom: "40px", paddingLeft: "12px", paddingRight: "12px" }}>
              <ClaudeContent index={currentExample} />
            </div>

            {/* Claude verdict tags */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex flex-wrap gap-1.5 z-20">
              {example.claudeTags.map((tag, i) => (
                <span key={i} className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full border" style={{ backgroundColor: "rgba(34,197,94,0.12)", borderColor: "rgba(34,197,94,0.3)", color: "#4ade80" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Left Side: The Slop - Clipped */}
        <div
          className="absolute inset-0 overflow-hidden z-20"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <div className="w-full h-full relative flex flex-col" style={{ backgroundColor: "#faf8f5" }}>
            {/* Label */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-neutral-100 text-neutral-500 px-3 py-1 rounded-full text-xs font-mono border border-neutral-200 z-10">
              Other AI
            </div>

            {/* Prompt bubble */}
            <div className="absolute top-10 sm:top-12 right-3 sm:right-4 max-w-[60%] sm:max-w-sm z-10">
              <div className="bg-white border border-neutral-200 rounded-lg rounded-tr-none px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-sm">
                <p className="text-neutral-500 text-[9px] sm:text-xs font-mono">
                  <span className="text-neutral-400">{">"} </span>
                  {example.prompt}
                </p>
              </div>
            </div>

            {/* Slop text — flows in the space between prompt and tags */}
            <div className="flex-1 flex flex-col justify-start overflow-hidden" style={{ paddingTop: "80px", paddingBottom: "40px", paddingLeft: "16px", paddingRight: "16px" }}>
              <SlopContent index={currentExample} />
            </div>

            {/* Slop verdict tags */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex flex-wrap gap-1.5 justify-end z-20">
              {example.slopTags.map((tag, i) => (
                <span key={i} className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full border" style={{ backgroundColor: "rgba(239,68,68,0.08)", borderColor: "rgba(239,68,68,0.25)", color: "#f87171" }}>
                  {tag}
                </span>
              ))}
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

        {/* Tooltip — anchored below the handle so it never overlaps content */}
        {!hasInteracted && (
          <div className="absolute top-[calc(50%+24px)] -translate-x-1/2 left-0 flex items-center gap-2 pointer-events-none animate-pulse">
            <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800/50 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-xl whitespace-nowrap">
              <span className="text-xs font-medium">Drag to compare</span>
              <MoveRight className="w-4 h-4 animate-bounce-x" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};