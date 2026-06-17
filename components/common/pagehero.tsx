"use client";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: string;
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  height = "h-[50vh]",
}: PageHeroProps) {
  return (
    <section
      className={`relative ${height} flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-4xl lg:text-5xl font-light tracking-[0.2em] text-white mb-4">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}