import Link from "next/link";
import { Hexagon } from "lucide-react";

export const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#131110]/50 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Hexagon className="w-6 h-6 text-white fill-white" />
            <span className="font-bold text-lg tracking-tight">Claude</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <Link href="#" className="hover:text-white transition-colors">Features</Link>
            <Link href="#" className="hover:text-white transition-colors">Enterprise</Link>
            <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#" className="hover:text-white transition-colors">Docs</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block">
              Log in
            </Link>
            <Link href="#" className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
