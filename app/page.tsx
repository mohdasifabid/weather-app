import Image from "next/image";
import { WeatherPage } from "./ui/weatherPage/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WeatherPage />
    </main>
  );
}
