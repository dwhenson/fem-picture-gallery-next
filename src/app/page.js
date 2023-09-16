import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import { data } from "@/data/data.js";
import importAll from "@/helpers/importAll";

const images = importAll(require.context("/public/assets", true, /thumbnail/));
for (let index = 0; index < images.length; index++) {
  const element = images[index];
}

export const metadata = {
  title: "Home",
  description: "Improving my Next.js skillz.",
  robots: "",
};

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <ul>
          {data.map((picture, index) => (
            <li key={index}>
              <Link href={picture.id}>
                <h2>{picture.name}</h2>
                <h2>{picture.artist.name}</h2>
                <Image
                  key={index}
                  src={images[index].default.src}
                  width={images[index].default.width}
                  height={images[index].default.height}
                  alt={picture.name}
                  priority={true}
                />
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
