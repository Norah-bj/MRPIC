import Image from "next/image";

const galleryImages = [
  { src: "/About-bg.png", alt: "Rice field landscape" },
  { src: "/Contact-bg.png", alt: "Contact background" },
  { src: "/down.jpg", alt: "Rice processing" },
  { src: "/Gallery-bg.png", alt: "Gallery highlight" },
  { src: "/Investment-bg.png", alt: "Investment opportunities" },
  { src: "/Join-ourteam-bg.png", alt: "Join our team" },
  { src: "/LeaderSection-bg.png", alt: "Leadership" },
  { src: "/Product-bg.png", alt: "Our products" },
  { src: "/Rectangle 2.png", alt: "Rice grains" },
  { src: "/Rectangle 3.png", alt: "Agricultural process" },
];

export default function GalleryImages() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-black md:text-5xl">
            Our Gallery
          </h2>
          <p className="text-base text-black/70 max-w-2xl mx-auto">
            Join us in revolutionizing agriculture and building a sustainable future. Invest in real assets with real returns.
          </p>
        </div>

        {/* Masonry Grid */}
        {/* Balanced Grid */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="relative h-[350px] overflow-hidden rounded-lg group">
              <Image
                src="/About-bg.png"
                alt="Rice field landscape"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative h-[250px] overflow-hidden rounded-lg group">
              <Image
                src="/Contact-bg.png"
                alt="Contact background"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg group">
              <Image
                src="/down.jpg"
                alt="Rice processing"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="relative h-[200px] overflow-hidden rounded-lg group">
              <Image
                src="/Gallery-bg.png"
                alt="Gallery highlight"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg group">
              <Image
                src="/Investment-bg.png"
                alt="Investment opportunities"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative h-[200px] overflow-hidden rounded-lg group">
              <Image
                src="/Join-ourteam-bg.png"
                alt="Join our team"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg group">
              <Image
                src="/LeaderSection-bg.png"
                alt="Leadership"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="relative h-[400px] overflow-hidden rounded-lg group">
              <Image
                src="/Product-bg.png"
                alt="Our products"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative h-[250px] overflow-hidden rounded-lg group">
              <Image
                src="/Rectangle 2.png"
                alt="Rice grains"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative h-[350px] overflow-hidden rounded-lg group">
              <Image
                src="/Rectangle 3.png"
                alt="Agricultural process"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
