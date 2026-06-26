import { createClient } from "@/prismicio";
import HeroSlider from "@/components/HeroSlider";

export default async function Home() {
  const client = createClient();
  const homepage = await client.getSingle("homepage");
  const images = homepage.data.images || [];

  return (
    <div className="home">
      <HeroSlider images={images} />
    </div>
  );
}
