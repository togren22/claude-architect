"use client";

import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "For individuals getting started with Claude.",
    features: [
      "Access to Claude 3.5 Sonnet",
      "Limited daily usage",
      "Ask about images and docs",
      "Access on web, iOS, and Android",
    ],
    cta: "Try for free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$20",
    period: "/month",
    description: "For power users who want the best of Claude.",
    features: [
      "Everything in Free",
      "5x more usage than Free",
      "Access to Claude 3 Opus & Haiku",
      "Priority access during high traffic",
      "Early access to new features",
    ],
    cta: "Subscribe to Pro",
    highlight: true,
  },
  {
    name: "Team",
    price: "$25",
    period: "/month/member",
    description: "For fast-growing teams collaborating on Claude.",
    features: [
      "Everything in Pro",
      "Higher usage limits than Pro",
      "Centralized billing & administration",
      "Early access to collaboration features",
      "Minimum 5 members",
    ],
    cta: "Create a Team",
    highlight: false,
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a18] sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Choose the plan that's right for you or your team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 border ${
                tier.highlight
                  ? "bg-white border-[#da7756] shadow-xl scale-105 z-10"
                  : "bg-white border-neutral-200"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#da7756] text-white px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-[#1a1a18]">
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline text-[#1a1a18]">
                <span className="text-4xl font-bold tracking-tight">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-lg text-neutral-500 ml-1">
                    {tier.period}
                  </span>
                )}
              </div>
              <p className="mt-2 text-neutral-600">{tier.description}</p>

              <ul className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#da7756] flex-shrink-0" />
                    <span className="text-neutral-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  tier.highlight
                    ? "bg-[#da7756] text-white hover:bg-[#c46645]"
                    : "bg-[#f0eee6] text-[#1a1a18] hover:bg-[#e6e2da]"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
