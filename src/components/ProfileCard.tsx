import { useRef } from "react";
import avatar from "../assets/me.jpeg";
import { profile } from "../data/profile";

export default function ProfileCard() {
  const shineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    const shine = shineRef.current;
    if (!card || !shine) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 18;
    const rotateX = -(y / rect.height - 0.5) * 18;

    card.style.transform = `
    perspective(900px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale3d(1.03,1.03,1.03)
  `;

    // posisi refleksi
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    shine.style.background = `
    radial-gradient(
      circle at ${percentX}% ${percentY}%,
      rgba(255,255,255,0.45),
      transparent 40%
    )
  `;
  }

  function reset() {
    const card = cardRef.current;
    const shine = shineRef.current;
    if (!card || !shine) return;

    card.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
    shine.style.background = "transparent";
  }

  return (
    <div className="flex items-center justify-center h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="
    relative w-[260px] h-[340px] md:w-[320px] md:h-[420px]
    rounded-2xl overflow-hidden
    transition-transform duration-200 ease-out
    will-change-transform
    bg-white/70 dark:bg-neutral-900/70
    backdrop-blur-xl border border-white/20
    shadow-[0_20px_60px_rgba(0,0,0,0.25)]
  "
      >
        {/* SHINE LAYER */}
        <div
          ref={shineRef}
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        />

        {/* glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 via-transparent to-violet-500/20" />

        {/* photo */}
        <img
          src={avatar}
          alt="profile"
          className="w-full h-[72%] object-cover"
          draggable={false}
        />

        {/* info */}
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
            {profile.name}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {profile.role}
          </p>
        </div>
      </div>
    </div>
  );
}
