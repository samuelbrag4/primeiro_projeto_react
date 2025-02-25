import Link from "next/link";
import styles from "./sobre.module.css";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import CardDev from "../components/CardDev/page";

export default function Sobre() {
  const nomePagina = "Sobre";

  return (
    <div className={styles.main}>
      <Header nomePagina={nomePagina} />

      <div className={styles.container}>
        <h1 className={styles.textoPrincipal}> 🎥 Página {nomePagina}</h1>
        <p className={styles.description}>Este é o conteúdo da página Sobre</p>

        <Link href={"/"} className={styles.link}>
          Ir Para a Página Home
        </Link>
        <Link href={"/filmes"} className={styles.link}>
          Ir Para a Página Filmes
        </Link>
        <CardDev />
      </div>
      <Footer />
    </div>
  );
}
