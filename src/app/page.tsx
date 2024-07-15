import { ShowCard } from "@/components/Cards";
import Image from "next/image";
import { HubwireGalactic } from "@/data/newly created files/ZarkMedia";
import { ProdLogoCarousel, ShowCarousel } from "@/components/Carousels";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ShowCarousel homePage={true} />
    </main>
  );
}
