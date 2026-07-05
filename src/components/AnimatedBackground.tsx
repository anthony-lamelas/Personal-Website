/**
 * Fixed, decorative background: slowly drifting gradient orbs + a faint grid.
 * Sits behind all content (pointer-events-none, -z-10). Motion is CSS-based and
 * automatically stilled by the prefers-reduced-motion rule in index.css.
 */
const AnimatedBackground = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Drifting accent orbs */}
      <div className="absolute -left-32 -top-24 h-[34rem] w-[34rem] animate-float-slow rounded-full bg-sky-500/20 blur-[130px]" />
      <div className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] animate-float rounded-full bg-cyan-400/15 blur-[130px]" />
      <div className="absolute bottom-[-6rem] left-1/4 h-[28rem] w-[28rem] animate-float-slow rounded-full bg-blue-600/15 blur-[130px]" />

      {/* Faint engineering grid, masked to fade toward the edges */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.35) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
