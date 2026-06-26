import { createClient } from "@/prismicio";
import Link from "next/link";
import type { PageDocument } from "@/prismicio-types";

export default async function Navigation() {
  const client = createClient();
  const pages = await client.getAllByType("page");

  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      <div className="flex flex-col items-end space-y-2">
        {pages.map((page) => (
          <Link
            key={page.id}
            href={`/${page.uid}`}
            className="menu-link"
          >
            {page.data.title || page.uid}
          </Link>
        ))}
      </div>
    </nav>
  );
}