import Nav from "@/components/Nav";
import { Libre_Baskerville } from "next/font/google";
import "./reset.css";
import "./abstracts.css";
import "./global.css";
import "./composition.css";

const baskerville_700 = Libre_Baskerville({
  subsets: ["latin"],
  weight: "700",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`place-content ${baskerville_700.className}`}>
        {children}
      </body>
    </html>
  );
}
