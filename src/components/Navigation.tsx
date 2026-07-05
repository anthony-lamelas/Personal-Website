import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  // Blur + border the bar once the user scrolls past the hero fold
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="group flex items-center gap-2 text-lg font-semibold text-white transition-colors"
          >
            <span className="font-mono text-sky-400 transition-transform duration-300 group-hover:scale-110">
              {"</>"}
            </span>
            <span className="font-display">Anthony Lamelas</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            <div className="ml-3 flex items-center gap-1 border-l border-white/10 pl-3">
              <a
                href="https://github.com/anthony-lamelas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-md p-2 text-gray-300 transition-colors hover:text-sky-400"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/anthonylamelas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-md p-2 text-gray-300 transition-colors hover:text-sky-400"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-white transition-colors hover:text-sky-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-3 mt-2 space-y-1 rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur-md">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? "bg-sky-400/10 text-sky-300"
                        : "text-white hover:bg-white/5 hover:text-sky-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center gap-2 px-3 pt-2">
                  <a
                    href="https://github.com/anthony-lamelas"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-gray-300 transition-colors hover:text-sky-400"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/anthonylamelas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-gray-300 transition-colors hover:text-sky-400"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
