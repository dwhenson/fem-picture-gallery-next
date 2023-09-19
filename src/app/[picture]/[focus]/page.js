import Image from "next/image";
import Link from "next/link";
import { data } from "@/data/data.js";
import importAll from "@/helpers/importAll";

const images = importAll(require.context("/public/assets", true, /hero-large/));

export async function generateMetadata({ params }) {
  const title = data.find((picture) => picture.id === params.picture).name;

  return {
    title: `${title} - Image`,
    description: "Improving my Next.js skillz.",
  };
}

function PictureFocus({ params }) {
  const picture = data.find((picture) => picture.id === params.picture);
  const index = data.findIndex((picture) => picture.id === params.picture);

  return (
    <main>
      <Link href={`/${params.picture}`}>Close</Link>
      <Image
        src={images[index].default.src}
        width={images[index].default.width}
        height={images[index].default.height}
        alt={picture.name}
        priority={true}
      />
    </main>
  );
}

export default PictureFocus;
