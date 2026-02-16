import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { motion, LayoutGroup } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
// import { useTheme } from "../lib/ThemeProvider";
import clsx from "clsx";

function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // const { theme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-4 sm:top-6 left-0 w-full z-50 flex justify-center px-3 sm:px-0">
      <LayoutGroup>
        {/* NAVBAR */}
        <motion.nav
          layout
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className={clsx(
            "flex items-center justify-between px-4 sm:px-6 md:px-6 border backdrop-blur-xl",

            "border-[var(--border-soft)] bg-white/80 dark:bg-neutral-900/70",
            scrolled
              ? "h-12 w-[820px] rounded-xl shadow-xl"
              : "h-16 w-full max-w-6xl rounded-2xl",
          )}
        >
          {/* LEFT: LOGO */}
          <motion.h1 className="font-semibold">MyPortfolio</motion.h1>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-5">
            {/* DESKTOP MENU */}
            <motion.ul
              layout="position"
              className={clsx(
                "hidden md:flex items-center gap-8",
                scrolled ? "text-[0.85rem]" : "text-sm",
                "text-neutral-700 dark:text-neutral-300",
              )}
            >
              <li>
                <a
                  href="https://github.com/USERNAME_KAMU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  <FaGithub size={18} />
                </a>
              </li>

              {["home", "about", "projects", "contact"].map((id) => (
                <li key={id} className="relative">
                  <a
                    href={`#${id}`}
                    className="relative px-1 py-1 capitalize hover:text-black dark:hover:text-white"
                  >
                    {id}
                    {active === id && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 rounded-full"
                      />
                    )}
                  </a>
                </li>
              ))}
            </motion.ul>

            {/* THEME TOGGLE */}
            <ThemeToggle />

            {/* HAMBURGER */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-2xl p-2"
            >
              {open ? <HiXMark /> : <HiBars3 />}
            </button>
          </div>
        </motion.nav>

        {/* MOBILE MENU */}
        {open && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm surface p-6 md:hidden z-40">
            <ul className="flex flex-col gap-6 text-lg text-center">
              {["home", "about", "projects", "contact"].map((id) => (
                <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
            </ul>
          </div>
        )}
      </LayoutGroup>
    </div>
  );
}

export default Navbar;
