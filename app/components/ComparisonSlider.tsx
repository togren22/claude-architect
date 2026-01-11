"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { GripVertical } from "lucide-react";
import { clsx } from "clsx";

import Image from "next/image";

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
      className="relative w-full max-w-5xl h-[350px] sm:h-[500px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 select-none group cursor-ew-resize touch-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onClick={(e) => updateSlider(e.clientX)}
    >
      {/* Right Side: The Structure (Background) */}
      <div className="absolute inset-0 flex">
        {/* We push the content to the right so it stays fixed as we reveal it */}
        <div className="w-full h-full bg-neutral-950 flex flex-col items-center justify-center overflow-hidden relative">
          {/* Full Height Background Image */}
          <div className="absolute inset-0 z-0">
             <Image 
                src="/structure.png" 
                alt="Structure" 
                fill
                className="object-cover opacity-80"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
          </div>

          <div className="w-full h-full max-w-4xl relative flex flex-col z-10 p-8">
            <div className="absolute top-4 right-4 bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-mono border border-blue-500/20 z-10 backdrop-blur-sm">
              The Structure
            </div>
            
            {/* Code Block Floating Overlay */}
            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 max-w-[90%] sm:max-w-md w-full bg-neutral-900/80 backdrop-blur-md rounded-lg p-3 sm:p-4 font-mono text-[10px] sm:text-xs text-neutral-300 border border-neutral-800 shadow-2xl z-10">
                <div className="flex gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                </div>
                <pre className="overflow-x-auto">
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
          </div>
        </div>
      </div>

      {/* Left Side: The Slop (Foreground) - Clipped */}
      <div
        className="absolute inset-0 bg-neutral-100 text-neutral-900 overflow-hidden z-20"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <div className="w-full h-full relative flex flex-col items-center justify-center p-8 bg-white/95">
           <div className="absolute top-4 left-4 bg-neutral-200 text-neutral-600 px-3 py-1 rounded-full text-xs font-mono border border-neutral-300 z-10">
              The Slop
            </div>
           <div className="max-w-3xl w-full text-left space-y-4 opacity-60 blur-[1px] select-none pointer-events-none overflow-hidden h-full flex flex-col justify-center">
             <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-green-700/80 flex-shrink-0" />
                <div className="space-y-1 font-serif text-base leading-[1.2] text-gray-500">
                   <p>
                     Certainly! Here is a comprehensive breakdown of the bridge structure. A bridge is typically a structure built to span a physical obstacle (such as a body of water, valley, road, or rail) without blocking the way underneath. It is constructed for the purpose of providing passage over the obstacle.
                   </p>
                   <p>
                     However, one must also consider the socio-economic impact of the bridge. It connects communities, facilitates trade, and serves as a monument to human engineering. The aesthetic qualities of the bridge are also of significant importance, as it must blend seamlessly with the surrounding environment.
                   </p>
                   <p>
                     In terms of materials, we have a plethora of options. Steel offers high tensile strength, while concrete provides excellent compressive strength. A hybrid approach often yields the best results. Furthermore, the maintenance schedule must be rigorously adhered to in order to ensure longevity.
                   </p>
                   <p>
                     Let us not forget the environmental impact assessments that must be conducted prior to construction. These assessments evaluate the potential effects on local flora and fauna. Mitigation strategies must be implemented to minimize disruption to the ecosystem. The bridge is not merely a physical structure but a complex integration of engineering, environmental science, and urban planning.
                   </p>
                   <p>
                     Additionally, the funding for such a project is a complex matter involving public and private partnerships. Stakeholder engagement is crucial for the success of the project. Regular community meetings should be held to address concerns and gather feedback. The bridge stands as a testament to our ability to overcome physical barriers and connect with one another.
                   </p>
                   <p>
                     Therefore, when designing a bridge, one must take a holistic approach. It is not sufficient to simply calculate loads and stresses. One must also consider the human element. How will people interact with the bridge? Will it be pedestrian-friendly? These are the questions that must be answered.
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
      </div>
    </div>
  );
};
