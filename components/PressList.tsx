import { createClient } from "@/prismicio";
import type { PressDocument } from "@/prismicio-types";

interface PressListProps {
  press: PressDocument[];
}

export default async function PressList({ press }: PressListProps) {
  if (!press || press.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">
          Press
        </h2>
        <div className="space-y-6">
          {press.map((item) => (
            <div
              key={item.id}
              className="press-item"
            >
              <h3 className="text-xl font-semibold mb-2">
                {item.data.title}
              </h3>
              {item.data.year && (
                <p className="text-gray-600">{item.data.year}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}