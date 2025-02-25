import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./filmes.module.css";
import Link from "next/link";

export default function Filmes() {
  return (
    <div className={styles.main}>
      <Header nomePagina="Filmes" />
      <div className={styles.container}>
        <h1 className={styles.textoPrincipal}>🎬 Página Filmes</h1>

        <Link href={"/"} className={styles.link}>
          Ir Para a Página Home
        </Link>
        <Link href={"/sobre"} className={styles.link}>
          Ir Para a Página Sobre
        </Link>
      </div>
      <Footer />
    </div>
  );
}
