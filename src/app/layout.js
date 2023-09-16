import Nav from "@/components/Nav";
import { Libre_Baskerville } from "next/font/google";
import "./reset.css";
import "./abstracts.css";
import "./global.css";

const baskerville_700 = Libre_Baskerville({
  subsets: ["latin"],
  weight: "700",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={baskerville_700.className}>{children}</body>
    </html>
  );
}
