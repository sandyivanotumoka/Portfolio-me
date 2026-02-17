import Container from "../components/Container";
import { FaGithub } from "react-icons/fa";
import { profile } from "../data/profile";
import { socials } from "../data/socials";
import ProfileCard from "../components/ProfileCard";
import Magnetic from "../components/Magnetic";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // fade section
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      );

      // tunggu DOM huruf selesai dibuat
      requestAnimationFrame(() => {
        const chars = titleRef.current?.querySelectorAll(".char");
        if (!chars) return;

        gsap.to(".scroll-indicator", {
          opacity: 0,
          y: 40,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(chars, {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.4,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      data-animate
      className="relative isolate min-h-[95vh] md:min-h-screen flex items-start md:items-center
      pt-36 sm:pt-40 md:pt-0
      bg-gradient-to-b from-[var(--bg-main)] to-[var(--bg-soft)]
      transition-colors duration-500 overflow-hidden"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          data-parallax="0.15"
          className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full blur-[140px] opacity-30 bg-sky-400 dark:bg-violet-600"
        />
        <div
          data-parallax="0.25"
          className="absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full blur-[140px] opacity-30 bg-pink-400 dark:bg-indigo-600"
        />
      </div>

      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
          {/* TEXT SIDE */}
          <div className="max-w-2xl order-2 md:order-1">
            {/* TITLE (GSAP animated) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[var(--text-main)] whitespace-nowrap">
              <span ref={titleRef} className="inline-block whitespace-nowrap">
                {/* prefix */}
                {"Hi, I'm ".split("").map((char, i) => (
                  <span
                    key={"p" + i}
                    className="char inline-block opacity-0 translate-y-6"
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}

                {/* name gradient PER LETTER */}
                {profile.name.split(" ").map((word, wi) => (
                  <span key={wi} className="inline-flex">
                    {/* huruf dalam kata */}
                    {word.split("").map((char, ci) => (
                      <span
                        key={wi + "-" + ci}
                        className="char inline-block opacity-0 translate-y-6 bg-clip-text text-transparent"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, var(--name-from), var(--name-via), var(--name-to))",
                          textShadow: "var(--name-glow)",
                        }}
                      >
                        {char}
                      </span>
                    ))}

                    {/* jarak antar kata */}
                    {wi !== profile.name.split(" ").length - 1 && (
                      <span className="w-3 sm:w-5" />
                    )}
                  </span>
                ))}
              </span>
            </h1>

            {/* ROLE */}
            <p className="mt-5 text-xl md:text-2xl text-[var(--text-muted)]">
              {profile.role}
            </p>

            {/* DESCRIPTION */}
            <p className="mt-6 text-[var(--text-muted)] leading-relaxed">
              {profile.description}
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Magnetic>
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2
    w-full sm:w-auto
    px-5 py-3
    text-sm sm:text-base
    rounded-xl border
    border-[var(--border-soft)]
    hover:bg-[var(--bg-soft)]
    transition"
                >
                  <FaGithub className="text-base" />
                  Github
                </a>
              </Magnetic>

              <Magnetic>
                <button
                  className="w-full sm:w-auto
    px-5 py-3
    text-sm sm:text-base
    rounded-xl font-medium text-white
    bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500
    hover:scale-105 active:scale-95 transition
    dark:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
                >
                  Contact Me
                </button>
              </Magnetic>

              <Magnetic>
                <button
                  className="w-full sm:w-auto
    px-5 py-3
    text-sm sm:text-base
    rounded-xl border
    border-[var(--border-soft)]
    hover:bg-[var(--bg-soft)]
    transition"
                >
                  View Projects
                </button>
              </Magnetic>
            </div>
          </div>

          {/* CARD SIDE */}
          <div className="relative h-[320px] md:h-[460px] order-1 md:order-2">
            <ProfileCard />
          </div>
        </div>
      </Container>
      {/* SCROLL INDICATOR */}
      <div className="scroll-indicator absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <div className="w-[1px] h-10 bg-neutral-400/40 dark:bg-white/30 overflow-hidden relative">
          <span className="absolute top-0 left-0 w-full h-1/2 bg-neutral-700 dark:bg-white animate-scrollLine" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
