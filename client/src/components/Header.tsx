import { useLocation } from "wouter";

interface HeaderProps {
  showNav?: boolean;
}

export function Header({ showNav = true }: HeaderProps) {
  const [, setLocation] = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black via-black/95 to-black/80 backdrop-blur-xl border-b border-yellow-500/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo - Centered */}
        <button
          onClick={() => setLocation("/")}
          className="flex-1 flex items-center justify-start gap-3 hover:opacity-90 transition-opacity group"
        >
          <img 
            src="/manus-storage/maho-logo_64d5e184.png" 
            alt="Maho Fitness" 
            className="w-12 h-12 rounded-full group-hover:shadow-lg group-hover:shadow-yellow-500/40 transition-all duration-300" 
          />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-white text-base tracking-tight">Maho</span>
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent font-bold text-base tracking-tight">Fitness</span>
          </div>
        </button>

        {/* Navigation */}
        {showNav && (
          <nav className="flex items-center gap-8 flex-1 justify-end">
            <button
              onClick={() => setLocation("/")}
              className="text-gray-300 hover:text-yellow-400 transition-colors text-sm font-medium"
            >
              Home
            </button>
            <a
              href="https://calendly.com/aleksandrharrison0/aleksandr-harrison-1-1-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-500/60 transition-all text-sm"
            >
              Book Call
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
