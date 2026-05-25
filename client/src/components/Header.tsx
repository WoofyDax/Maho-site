import { useLocation } from "wouter";

interface HeaderProps {
  showNav?: boolean;
}

export function Header({ showNav = true }: HeaderProps) {
  const [, setLocation] = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-amber-600/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => setLocation("/")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">AH</span>
          </div>
          <span className="hidden sm:inline font-bold text-amber-400">Aleksandr Harrison</span>
        </button>

        {/* Navigation */}
        {showNav && (
          <nav className="flex items-center gap-6">
            <button
              onClick={() => setLocation("/")}
              className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium"
            >
              Home
            </button>
            <a
              href="https://calendly.com/aleksandrharrison0/aleksandr-harrison-1-1-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-amber-600/50 transition-all text-sm"
            >
              Book Call
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
