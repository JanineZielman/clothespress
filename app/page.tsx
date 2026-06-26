import { createClient } from "@/prismicio";
import HeroSlider from "@/components/HeroSlider";
import BookGrid from "@/components/BookGrid";
import PressList from "@/components/PressList";

export default async function Home() {
  const client = createClient();
  const homepage = await client.getSingle("homepage");
  const images = homepage.data.images || [];

  const books = await client.getAllByType("book");
  const press = await client.getAllByType("press");

  return (
    <div className="home">
      <HeroSlider images={images} />
      <BookGrid books={books} />
      <PressList press={press} />
    </div>
  );
}
