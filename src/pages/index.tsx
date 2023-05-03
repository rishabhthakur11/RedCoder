import Image from "next/image";
import { Roboto } from "next/font/google";
import { Header } from "../components/Header";
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${roboto.className}`}>
      <div className="left-0 top-0 flex w-full  bg-mildBrown pt-3 pb-3 lg:static lg:w-auto lg:p-3">
        {<Header />}
      </div>
    </main>
  );
}
