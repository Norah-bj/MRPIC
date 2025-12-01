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
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative break-inside-avoid overflow-hidden rounded-lg group">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
