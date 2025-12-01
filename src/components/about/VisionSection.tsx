import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-6xl space-y-16 px-6">
        <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-wide text-black">
          ABOUT US
        </h2>
        {/* Who we are */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="relative h-[300px] overflow-hidden rounded-lg">
            <Image
              src="/down.jpg"
              alt="Rice in bowl"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold text-black">Who we are</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Mukunguri Rice Promotion and Investment Company Ltd (MRPIC) is a comprehensive agricultural processing enterprise located in Mugina Sector, Kamonyi District, Southern Province. Starting with rice processing, we have expanded to operate four modern facilities: Rice Mill, Maize Flour Plant, Animal Feed Plant, and Briquette Plant. Through our zero-waste approach, we transform agricultural raw materials and by-products into quality products including BURYOHE rice, UMUMAF maize flour, animal feed, and eco-friendly charcoal briquettes, serving markets across Kigali, Huye, Muhanga, and beyond.
            </p>
          </div>
        </div>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-black">Our vision</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                To preserve and ensuring the genetic integrity of the seed, by encouraging farmers to adopt scientific agricultural practices and by leveraging world-class rice processing technologies, to emerge as the industry benchmark for product quality and customer service.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-black">Our mission</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                To preserve and ensuring the genetic integrity of the seed, by encouraging farmers to adopt scientific agricultural practices and by leveraging world-class rice processing technologies, to emerge as the industry benchmark for product quality and customer service.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="/LeaderSection-bg.png"
              alt="Team meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
