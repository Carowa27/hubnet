import { JoinCommunityCard } from "@/components/cards/JoinCommunityCard";
import { ShowsCarousel } from "@/components/carousels/ShowsCarousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ShowsCarousel homePage={true} />
    </main>
  );
}
