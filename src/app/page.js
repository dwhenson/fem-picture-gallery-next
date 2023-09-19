import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import importAll from "@/helpers/importAll";
import { data } from "@/data/data.js";
import styles from "./page.module.css";

const images = importAll(require.context("/public/assets", true, /thumbnail/));
for (let index = 0; index < images.length; index++) {
  const element = images[index];
}

export const metadata = {
  title: "Home",
  description: "Improving my Next.js skillz.",
};

export default function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <ul role="list" className={`stack ${styles.masonry}`}>
          {data.map((picture, index) => (
            <li key={index}>
              <Link href={picture.id} className={styles.picture}>
                <Image
                  key={index}
                  src={images[index].default.src}
                  width={images[index].default.width}
                  height={images[index].default.height}
                  alt={picture.name}
                  priority={true}
                />
                <div className={`stack ${styles.text}`}>
                  <h2>{picture.name}</h2>
                  <h3>{picture.artist.name}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
