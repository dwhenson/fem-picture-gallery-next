"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/data/data";
import logo from "/public/assets/shared/logo.svg";

function Nav() {
  const [isHomePage, setIsHomePage] = React.useState(true);

  React.useEffect(() => {
    setIsHomePage(document.title === "Home");
  }, []);

  return (
    <nav>
      <Link href="/">
        <Image src={logo} alt="Gallaria Logo" priority={true} />
      </Link>
      {isHomePage ? (
        <Link href={data[0].id}>start slideshow</Link>
      ) : (
        <Link href="/">stop slideshow</Link>
      )}
    </nav>
  );
}

export default Nav;
