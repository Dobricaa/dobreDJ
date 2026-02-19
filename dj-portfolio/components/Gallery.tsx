import Image from "next/image";

const GALLERY_IMAGES = [
  { src: "/images/gallery-1.jpg", alt: "DJ set at festival" },
  { src: "/images/gallery-2.jpg", alt: "Club night" },
  { src: "/images/gallery-3.jpg", alt: "Behind the decks" },
  { src: "/images/gallery-4.jpg", alt: "Crowd moment" },
  { src: "/images/gallery-5.jpg", alt: "Stage performance" },
  { src: "/images/gallery-6.jpg", alt: "Event highlight" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 sm:py-28 px-6 bg-dark-950"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="gallery-heading"
          className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12"
        >
          Gallery
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0">
          {GALLERY_IMAGES.map((img, i) => (
            <li key={i} className="overflow-hidden rounded-lg">
              <div className="relative aspect-[4/3] bg-dark-800">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </li>
          ))}
        </ul>
        <p className="text-center text-zinc-500 text-sm mt-6">
          Add your photos to <code className="bg-dark-800 px-1 rounded">/public/images/</code> (gallery-1.jpg … gallery-6.jpg).
        </p>
      </div>
    </section>
  );
}
