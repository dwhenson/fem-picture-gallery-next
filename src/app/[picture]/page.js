import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import { data } from "@/data/data.js";
import back from "/public/assets/shared/icon-back-button.svg";
import next from "/public/assets/shared/icon-next-button.svg";
import importAll from "@/helpers/importAll";
import styles from "./page.module.css";

const images = importAll(require.context("/public/assets", true, /hero-large/));
const artists = importAll(require.context("/public/assets", true, /artist/));

export async function generateMetadata({ params }) {
  const title = data.find((picture) => picture.id === params.picture).name;

  return {
    title: `${title} - Profile`,
    description: "Improving my Next.js skillz.",
    robots: "",
  };
}

function PictureProfilePage({ params }) {
  const picture = data.find((picture) => picture.id === params.picture);
  const index = data.findIndex((picture) => picture.id === params.picture);

  return (
    <>
      <Nav />

      <main className={styles.main}>
        <div className={styles.pictureSection}>
          <Link
            className={styles.imageWrapper}
            href={`${params.picture}/${params.picture}`}
          >
            <Image
              src={images[index].default.src}
              width={images[index].default.width}
              height={images[index].default.height}
              alt={picture.name}
              priority={true}
              className={styles.pictureImage}
            />
          </Link>
          <div className={`stack ${styles.titles}`}>
            <h1 style={{ color: "var(--clr-neutral-100)" }}>{picture.name}</h1>
            <p>{picture.artist.name}</p>
          <Image
            src={artists[index].default.src}
            width={100}
            height={100}
            alt={picture.artist.name}
            className={styles.artistImage}
          />
          </div>
        </div>
        <div className={styles.contentSection}>
          <p className={styles.year}>{picture.year}</p>
          <p className={styles.description}>{picture.description}</p>

          <Link className={styles.source} href={picture.source}>
            Go to source
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          <h2 style={{ color: "black" }}>{picture.name}</h2>
          <p>{picture.artist.name}</p>
        </div>

        <div className={styles.buttons}>
          <Link
            href={data[index - 1]?.id ? data[index - 1].id : data[index].id}
          >
            <Image src={back} alt="previous" />
          </Link>
          <Link
            href={data[index + 1]?.id ? data[index + 1].id : data[index].id}
          >
            <Image src={next} alt="next" />
          </Link>
        </div>
      </footer>
    </>
  );
}

export default PictureProfilePage;
