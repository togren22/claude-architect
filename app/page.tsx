import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Features } from "./components/Features";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] selection:bg-neutral-200 selection:text-black">
      <Nav />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      
      {/* Footer / Additional Content could go here */}
      <footer className="py-12 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 text-center text-neutral-500 text-sm">
          <p>© 2026 Claude AI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
