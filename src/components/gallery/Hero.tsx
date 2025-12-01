import Image from "next/image";

export default function GalleryHero() {
  return (
    <section className="relative h-[680px] w-full">
      {/* Background Image */}
      <Image
        src="/Gallery-bg.png"
        alt="Gallery background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-start justify-end px-6 md:px-[10%]">
        <div className="space-y-6">
          <span className="inline-block border border-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
            Gallery
          </span>
          <h1 className="text-5xl font-bold text-white mb-18 md:text-6xl">
            Multimedia
          </h1>
        </div>
      </div>
    </section>
  );
}
