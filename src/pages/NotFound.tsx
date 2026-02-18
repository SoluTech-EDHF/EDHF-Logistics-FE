import { Link } from "react-router-dom";
import ForoforDark from "../assets/404-wide-dark.png";
import ForoforLight from "../assets/404-wide-light.png";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [isDark, setIsDark] = useState(() => {
    if (document.documentElement.classList.contains("dark")) return true;
    if (document.documentElement.classList.contains("light")) return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Watch for class-based theme changes
    const observer = new MutationObserver(() => {
      if (document.documentElement.classList.contains("dark")) {
        setIsDark(true);
      } else if (document.documentElement.classList.contains("light")) {
        setIsDark(false);
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Watch for OS-level preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (
        !document.documentElement.classList.contains("dark") &&
        !document.documentElement.classList.contains("light")
      ) {
        setIsDark(e.matches);
      }
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <img
        src={isDark ? ForoforDark : ForoforLight}
        alt="404 background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl drop-shadow-lg text-white">
          404 — Page not found
        </h1>

        <p className="mt-4 max-w-md text-lg sm:text-xl drop-shadow-md text-gray-200">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
        >
          &larr; Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
