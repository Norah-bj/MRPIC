import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[755px] w-full">
      {/* Background Image */}
      <Image
        src="/About-bg.png"
        alt="Rice grains background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 md:px-[10%]">
        <div className="space-y-6">
          <span className="inline-block rounded-full border border-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
            Who we are
          </span>
          <h1 className="text-5xl font-bold text-white md:text-6xl">
            About Us
          </h1>
        </div>
      </div>
    </section>
  );
}
