"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/data/data";
import logo from "/public/assets/shared/logo.svg";
import styles from "./Nav.module.css";

function Nav() {
  const [isHomePage, setIsHomePage] = React.useState("loading");

  React.useEffect(() => {
    setIsHomePage(document.title === "Home");
  }, []);

  if (isHomePage === "loading") {
    return (
      <nav>
        <Link href="/">
          <Image src={logo} alt="Gallaria Logo" priority={true} />
        </Link>
      </nav>
    );
  }

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src={logo} alt="Gallaria Logo" priority={true} />
      </Link>
      {isHomePage ? (
        <Link href={data[0].id} className={styles.slideshow}>
          start slideshow
        </Link>
      ) : (
        <Link href="/" className={styles.slideshow}>
          stop slideshow
        </Link>
      )}
    </nav>
  );
}

export default Nav;
