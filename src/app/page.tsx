import { ShowCard } from "@/components/Cards";
import Image from "next/image";
import { HubwireGalactic } from "@/data/newly created files/ZarkMedia";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ShowCard show={HubwireGalactic} homePage={true} />
    </main>
  );
}
