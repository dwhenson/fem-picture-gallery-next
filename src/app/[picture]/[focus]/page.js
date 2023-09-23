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
    <main
      style={{
        backgroundColor: "var(--clr-neutral-100)",
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
      }}
    >
      <Link
        href={`/${params.picture}`}
        style={{
          display: "block",
          color: "var(--clr-neutral-500)",
          padding: "var(--space-m)",
          textTransform: "uppercase",
          letterSpacing: "2px",
          textAlign: "right",
        }}
      >
        Close
      </Link>
      <Image
        src={images[index].default.src}
        width={images[index].default.width}
        height={images[index].default.height}
        alt={picture.name}
        priority={true}
        style={{ marginLeft: "auto", marginRight: "auto" }}
      />
    </main>
  );
}

export default PictureFocus;
