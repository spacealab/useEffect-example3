import Image from "next/image";
import { Inter } from "next/font/google";
import Weather from "@/components/weather/Weather";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center items-center h-[100vh">
      <Weather city={"Tehran"}/>
    </main>
  );
}
