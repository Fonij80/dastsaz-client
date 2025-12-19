import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-40 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary-600">دست‌ساز</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/workshops"
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors"
            >
              کارگاه‌ها
            </Link>
            <Link
              to="/about"
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors"
            >
              درباره ما
            </Link>
            <Link
              to="/host/create"
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors"
            >
              میزبانی
            </Link>
            <Link
              to="/auth"
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors"
            >
              ورود / ثبت‌نام
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-neutral-700"
            aria-label="منو"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <nav className="flex flex-col gap-4">
              <Link
                to="/workshops"
                className="text-neutral-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                کارگاه‌ها
              </Link>
              <Link
                to="/about"
                className="text-neutral-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                درباره ما
              </Link>
              <Link
                to="/host/create"
                className="text-neutral-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                میزبانی
              </Link>
              <Link
                to="/auth"
                className="text-neutral-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                ورود / ثبت‌نام
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
