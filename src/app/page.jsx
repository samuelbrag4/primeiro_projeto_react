import Header from "./components/Header/page";
import Footer from "./components/Footer/page";
import CardDev from "./components/CardDev/page";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const nome = "Samuel Braga";

  return (
    <div className={styles.main}>
      <Header nomePagina="Home" />
      <div className={styles.container}>
        <p className={styles.textoPrincipal}> 📷 Olá {nome}!</p>

        <Link href={"/sobre"} className={styles.link}>
          Ir Para a Página Sobre
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
