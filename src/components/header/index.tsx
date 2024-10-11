"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Toolbar } from "primereact/toolbar";
import Image from "next/image";

export function Header(){
  const [top, setTop] = useState(true);

  const scrollHander = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  }

  useEffect(() => {

    window.addEventListener("scroll", scrollHander);

    return () => window.removeEventListener("scroll", scrollHander);

  }, [top])


  return (
    <header className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>

      <div className={styles.container}>

        <div className={styles.content}>

          <div className={styles.contentLogo}>
            <Link href="/">
              <Image src="/logo.png" alt="AG Eletro" width={"130"} height={"130"} quality={100}/>
            </Link>
          </div>

          <nav className={styles.nav}>
            <Link href="/">
              HOME
            </Link>

            <Link href="/#servicos">
              SERVIÇOS
            </Link>

            <Link href="/#contatos">
              CONTATOS
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}