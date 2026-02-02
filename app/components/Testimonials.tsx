"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Claude has completely transformed how I write code. It doesn't just give me snippets; it understands the architecture of my entire project.",
    author: "Sarah Chen",
    role: "Senior Software Engineer",
    company: "TechFlow",
  },
  {
    quote: "The nuance in Claude's writing is unmatched. I use it to brainstorm marketing angles and draft copy that actually sounds human.",
    author: "Marcus Reynolds",
    role: "Content Director",
    company: "Creative Pulse",
  },
  {
    quote: "I threw a 50-page legal contract at Claude and asked for a summary of risks. It nailed every single point in seconds. Incredible.",
    author: "Elena Rodriguez",
    role: "Legal Counsel",
    company: "Global Ventures",
  },
  {
    quote: "As a researcher, having Claude is like having a brilliant research assistant who never sleeps. It synthesizes complex papers effortlessly.",
    author: "Dr. James Wilson",
    role: "Research Scientist",
    company: "BioLabs",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white border-t border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a18] sm:text-4xl">
            Loved by builders and creators
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto h-[300px] sm:h-[250px]">
          {testimonials.map((testimonial, index) => {
            const isActive = index === currentIndex;
            // Only render active and adjacent slides for performance if list is huge, 
            // but for 4 items, rendering all with opacity control is fine.
            
            return (
              <motion.div
                key={index}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: isActive ? 1 : 0, 
                  x: isActive ? 0 : -100,
                  pointerEvents: isActive ? "auto" : "none"
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="w-16 h-16 bg-[#f0eee6] rounded-full flex items-center justify-center mb-6 text-[#da7756]">
                  <Quote className="w-8 h-8 fill-current" />
                </div>
                <blockquote className="text-xl sm:text-2xl font-medium text-[#1a1a18] mb-8 max-w-3xl leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex flex-col items-center">
                  <cite className="not-italic font-semibold text-[#1a1a18]">
                    {testimonial.author}
                  </cite>
                  <span className="text-neutral-500 text-sm mt-1">
                    {testimonial.role}, {testimonial.company}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#da7756] w-6" : "bg-neutral-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
