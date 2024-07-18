import { ShowCarousel } from "@/components/carousels/ShowCarousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ShowCarousel homePage={true} />
    </main>
  );
}
