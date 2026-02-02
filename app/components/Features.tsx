"use client";

import { Brain, Code, FileText, Search, Sparkles } from "lucide-react";

const features = [
  {
    name: "Thoughtful Responses",
    description: "Claude engages in nuanced conversation, understanding context and subtext better than any other AI.",
    icon: Brain,
  },
  {
    name: "Advanced Coding",
    description: "From simple scripts to complex applications, Claude writes clean, efficient, and documented code.",
    icon: Code,
  },
  {
    name: "Deep Research",
    description: "Analyze long documents, synthesize multiple sources, and get accurate, cited information.",
    icon: Search,
  },
  {
    name: "Creative Writing",
    description: "Collaborate on stories, scripts, and marketing copy with an AI that understands tone and voice.",
    icon: Sparkles,
  },
  {
    name: "Data Analysis",
    description: "Upload data files and get instant insights, visualizations, and strategic recommendations.",
    icon: FileText,
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-white border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a18] sm:text-4xl">
            Built for complex tasks
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Claude excels at open-ended questions and nuanced instructions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="p-6 rounded-2xl bg-[#f7f5f0] border border-neutral-200 hover:border-neutral-300 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-4 text-[#da7756]">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a18] mb-2">
                {feature.name}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
