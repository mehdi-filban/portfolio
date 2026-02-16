export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="
        fixed inset-x-0 bottom-0 z-50
        border-t border-black/10
        bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          {/* Left side */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-700">
            <a
              href={`${import.meta.env.BASE_URL}assets/Mehdi-Filban-Resume.pdf`}
              className="green transition-colors duration-200 hover:opacity-80"
              download
            >
              Download Resume
            </a>
            <span>
              Current Position: <b className="green">Freelancer</b>
            </span>
          </div>

          {/* Right side */}
          <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-right">
            © {new Date().getFullYear()} <b className="green">Mehdi Filban</b> —
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
