import Link from "next/link";
import Image from "next/image";

export default function JoinOurTeam() {
  return (
    <section className="relative h-[400px] w-full overflow-hidden bg-gray-900">
      {/* Background Image */}
      <Image
        src="/Join-ourteam-bg.png"
        alt="Rice farmer working in field"
        fill
        className="object-cover"
        priority
      />
      
      {/* Circular Card Overlay */}
      <div className="absolute right-[10%] top-1/2 flex h-[340px] w-[340px] -translate-y-1/2 items-center justify-center rounded-full bg-[#431800] p-[6px] shadow-2xl">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
          <div className="space-y-4 px-8 py-6 text-center">
            <p className="text-xl font-bold uppercase tracking-wider text-[#431800]">
              JOIN OUR TEAM
            </p>
            <h2 className="text-xl font-bold leading-tight text-black">
              Be APart Of Mukunguri Rice
            </h2>
            <p className="mx-auto max-w-[280px] text-sm leading-relaxed text-gray-700">
              Join our growing community of rice farmers and be part of a movement that's transforming modern agriculture.
            </p>
            <Link
              href="/contact"
              className="group mx-auto flex w-fit items-center gap-3 rounded-full border border-[#431800] px-8 py-3 text-sm font-semibold text-[#000000] transition-all hover:bg-[#431800] hover:text-white"
            >
              Join our Team
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#431800] transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
