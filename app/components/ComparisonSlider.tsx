"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { GripVertical } from "lucide-react";
import { clsx } from "clsx";

export const ComparisonSlider = () => {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current && !containerRef.current) return;
    updateSlider(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current && !containerRef.current) return;
    updateSlider(e.touches[0].clientX);
  };

  const updateSlider = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  const handleMouseDown = () => {
    isDragging.current = true;
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
      className="relative w-full max-w-5xl h-[500px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 select-none group cursor-ew-resize"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onClick={(e) => updateSlider(e.clientX)}
    >
      {/* Right Side: The Structure (Background) */}
      <div className="absolute inset-0 flex">
        {/* We push the content to the right so it stays fixed as we reveal it */}
        <div className="w-full h-full bg-neutral-950 flex flex-col items-center justify-center p-8 overflow-hidden">
          <div className="w-full h-full max-w-2xl relative flex flex-col">
            <div className="absolute top-4 right-4 bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-mono border border-blue-500/20 z-10">
              The Structure
            </div>
            
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Code Block */}
              <div className="bg-neutral-900/50 rounded-lg p-4 font-mono text-xs text-neutral-300 overflow-hidden border border-neutral-800">
                <div className="flex gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                </div>
                <pre>
                  <span className="text-purple-400">import</span> rhinoscriptsyntax <span className="text-purple-400">as</span> rs{'\n\n'}
                  <span className="text-blue-400">def</span> <span className="text-yellow-200">create_truss_bridge</span>(length, height):{'\n'}
                  {'  '}p1 = [<span className="text-orange-300">0</span>, <span className="text-orange-300">0</span>, <span className="text-orange-300">0</span>]{'\n'}
                  {'  '}p2 = [length, <span className="text-orange-300">0</span>, <span className="text-orange-300">0</span>]{'\n'}
                  {'  '}base = rs.AddLine(p1, p2){'\n'}
                  {'  '}rs.AddPipe(base, <span className="text-orange-300">0</span>, <span className="text-orange-300">0.5</span>){'\n\n'}
                  {'  '}<span className="text-gray-500"># Generate vertical struts</span>{'\n'}
                  {'  '}<span className="text-purple-400">for</span> i <span className="text-purple-400">in</span> <span className="text-blue-400">range</span>(subdivisions):{'\n'}
                  {'    '}x = i * (length / sub){'\n'}
                  {'    '}pt = [x, <span className="text-orange-300">0</span>, <span className="text-orange-300">0</span>]{'\n'}
                  {'    '}rs.AddPoint(pt)
                </pre>
              </div>

              {/* 3D Placeholder */}
              <div className="relative bg-neutral-900/50 rounded-lg border border-neutral-800 overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                 <div className="relative w-32 h-16 border-2 border-blue-500/50 transform rotate-12 bg-blue-500/10 skew-x-12" />
                 <div className="absolute bottom-4 left-4 text-xs font-mono text-neutral-500">
                    bridge_structure_v2.3dm
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left Side: The Slop (Foreground) - Clipped */}
      <div
        className="absolute inset-0 bg-neutral-100 text-neutral-900 overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <div className="w-full h-full relative flex flex-col items-center justify-center p-8 bg-white/95">
           <div className="absolute top-4 left-4 bg-neutral-200 text-neutral-600 px-3 py-1 rounded-full text-xs font-mono border border-neutral-300 z-10">
              The Slop
            </div>
           <div className="max-w-2xl w-full text-left space-y-6 opacity-60 blur-[0.5px] select-none pointer-events-none">
             <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-green-700/80 flex-shrink-0" />
                <div className="space-y-2 font-serif text-lg leading-relaxed text-neutral-800">
                   <p>
                     Certainly! Here is a comprehensive breakdown of the bridge structure. A bridge is typically a structure built to span a physical obstacle (such as a body of water, valley, road, or rail) without blocking the way underneath.
                   </p>
                   <p>
                     It is constructed for the purpose of providing passage over the obstacle, which is usually something that is otherwise difficult or impossible to cross. There are many different designs regarding structural components, depending on the nature of the terrain.
                   </p>
                   <p>
                     Furthermore, the structural integrity is paramount. We must consider the tensile strength of the materials used, whether it be steel, concrete, or perhaps a composite alloy. The load-bearing capacity must be sufficient to support not only its own weight but also the weight of the traffic it is intended to carry.
                   </p>
                </div>
             </div>
           </div>
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute inset-y-0 w-1 bg-white cursor-ew-resize hover:scale-x-150 transition-transform z-20"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)]">
          <GripVertical className="w-5 h-5 text-black" />
        </div>
      </div>
    </div>
  );
};
