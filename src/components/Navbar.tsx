
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowUpRight, Sun } from "lucide-react";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Mobility", path: "/mobility" },
  { name: "Solar Solutions", path: "/consultation" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path ||
      location.pathname.startsWith(`${path}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Company logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          aria-label="Lion Green Solutions home"
        >
          <img
            src="/Images/Nav/LGS_Nav_icon.png"
            alt="Lion Green Solutions"
            className="h-12 w-auto max-w-[190px] object-contain sm:h-14"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              aria-current={isActive(item.path) ? "page" : undefined}
              className={`relative rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                isActive(item.path)
                  ? "bg-emerald-50 text-emerald-800"
                  : "text-slate-600 hover:bg-slate-50 hover:text-emerald-700"
              }`}
            >
              {item.name}
              {isActive(item.path) && (
                <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-600" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop contact button */}
        <a
          href="tel:+251977404142"
          className="hidden items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 lg:flex"
        >
          <Phone className="h-4 w-4" />
          <span>Contact Us</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-slate-200 bg-white shadow-xl lg:hidden"
        >
          <div className="mx-auto max-w-7xl px-4 pb-6 pt-3 sm:px-6">
            <div className="mb-4 flex items-center gap-2 rounded-xl bg-emerald-50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Sun className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  Clean Energy. Smarter Living.
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Explore our solutions
                </p>
              </div>
            </div>

            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={isActive(item.path) ? "page" : undefined}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-emerald-50 text-emerald-800"
                      : "text-slate-700 hover:bg-slate-50 hover:text-emerald-700"
                  }`}
                >
                  {item.name}
                  <ArrowUpRight className="h-4 w-4 opacity-60" />
                </Link>
              ))}
            </div>

            <a
              href="tel:+251977404142"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              <Phone className="h-4 w-4" />
              Call +251 977404142
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
