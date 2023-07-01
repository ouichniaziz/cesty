import { Poppins } from "next/font/google";
import Image from "next/image";
import city from "../public/city.jpg";
import city2 from "../public/city-2.jpg";
import city3 from "../public/city-3.jpg";
import { useState } from "react";

const poppins = Poppins({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const images = [city, city2, city3];

export default function Home() {
  const [index, setIndex] = useState(0);
  const handleImageChange = () => {
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <main
      className={`flex flex-col lg:flex-row bg-primary h-screen ${poppins.className}`}
    >
      <header className="w-full lg:w-1/2 h-[50vh] lg:h-auto flex flex-col p-8 lg:justify-between">
        <h1 className="text-5xl lg:text-9xl text-secondary font-black">
          Cesty
        </h1>
        <h3 className="text-secondary text-xl lg:text-3xl mt-2">
          A photography project by Unsplash
        </h3>
      </header>

      <figure
        className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative"
        onClick={handleImageChange}
      >
        <Image
          src={images[index]}
          alt="city"
          style={{
            height: "100%",
            objectFit: "cover",
          }}
        />
        <figcaption className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white text-3xl pb-8">
          {index + 1} / {images.length}
        </figcaption>
      </figure>
    </main>
  );
}
