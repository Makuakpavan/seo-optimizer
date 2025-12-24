// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top section */}
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:justify-between gap-6">
          {/* Brand */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold">
              🚀 SEO Optimizer
            </h3>
            <p className="text-gray-400 text-sm mt-2 max-w-xs">
              AI-powered content optimization
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} SEO Optimizer. Built with Next.js.
        </div>
      </div>
    </footer>
  );
}



