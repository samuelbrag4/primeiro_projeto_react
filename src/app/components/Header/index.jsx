import styles from "./header.module.css";

const Header = ({ nomePagina }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.titulo}>React | NextJS - {nomePagina}</h1>
    </header>
  );
};

export default Header;
