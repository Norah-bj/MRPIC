import { testimonialsContent } from "@/lib/content";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const { badge, title, description, testimonials } = testimonialsContent;

  return (
    <section className="bg-white py-10 text-black">
      <div className="container mx-auto max-w-6xl px-6 space-y-14">
        <div className="space-y-4 text-center">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#431800]">
            {badge}
          </h3>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="group relative flex flex-col justify-between rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all hover:border-[#431800] hover:shadow-md h-full"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <Quote className="h-8 w-8 text-[#431800] opacity-40" />
                </div>

                <p className="text-sm leading-relaxed text-gray-700 line-clamp-4">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="font-bold text-black">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
