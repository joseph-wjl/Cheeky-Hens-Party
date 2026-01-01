import Image from "next/image";
import GalleryLightbox from "./galleryLightbox";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";

type GalleryImage = {
  image: any;
  caption: string;
};

async function getGalleryImages(): Promise<GalleryImage[]> {
  return await client.fetch(`*[_type == "galleryImage"]{image, caption}`);
}

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <>
      {/* Header */}
      <div className="px-6 py-20 min-h-100 bg-[#e3e2df] text-center text-[#82310e] justify-center flex flex-col items-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-10">Gallery</h1>
        <p className="mb-5">
          Click any image to explore our cheeky hen party moments.
        </p>
        <p>
          Follow us on Facebook or Instagram to keep up with all our fun and
          sexy art classes and check out our hot talent.
        </p>
      </div>

      {/* Gallery Grid */}
      <section className="px-6 py-20 bg-white max-w-6xl mx-auto">
        <GalleryLightbox images={images} />
      </section>
      
    </>
  );
}
