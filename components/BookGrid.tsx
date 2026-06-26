import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/prismicio";
import type { BookDocument } from "@/prismicio-types";

interface BookGridProps {
  books: BookDocument[];
}

export default async function BookGrid({ books }: BookGridProps) {
  if (!books || books.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">
          Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((book) => {
            const image = book.data.images?.[0]?.image;

            return (
              <Link
                key={book.id}
                href={`/book/${book.uid}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                  {image?.url ? (
                    <Image
                      src={image.url}
                      alt={image.alt || book.data.title || "Book cover"}
                      fill
                      className="image"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                </div>
                <h3 className="title">
                  {book.data.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}