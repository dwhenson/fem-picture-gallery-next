import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import { data } from "@/data/data.js";
import back from "/public/assets/shared/icon-back-button.svg";
import next from "/public/assets/shared/icon-next-button.svg";
import importAll from "@/helpers/importAll";

const images = importAll(require.context("/public/assets", true, /gallery/));
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

      <main>
        <h2>{picture.name}</h2>
        <p>{picture.artist.name}</p>
        <p>{picture.year}</p>
        <p>{picture.description}</p>
        <Link href={picture.source}>Go to source</Link>
        <Link href={`${params.picture}/${params.picture}`}>
          <Image
            src={images[index].default.src}
            width={images[index].default.width}
            height={images[index].default.height}
            alt={picture.name}
            priority={true}
          />
        </Link>
        <Image
          src={artists[index].default.src}
          width={100}
          height={100}
          alt={picture.artist.name}
        />
      </main>

      <footer>
        <p>{picture.name}</p>
        <p>{picture.artist.name}</p>

        <Link href={data[index - 1]?.id ? data[index - 1].id : data[index].id}>
          <Image src={back} alt="back" />
        </Link>
        <Link href={data[index + 1]?.id ? data[index + 1].id : data[index].id}>
          <Image src={next} alt="next" />
        </Link>
      </footer>
    </>
  );
}

export default PictureProfilePage;
