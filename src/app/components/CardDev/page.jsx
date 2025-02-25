import styles from "./cardDev.module.css";

const CardDev = () => {
  return (
    <div className={styles.cardDev}>
      <img src="data:image/jpeg;base64,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" alt="Samuel Braga" />
      <h2>Samuel Braga</h2>
      <p>Desenvolvedor fullstack</p>
      <a href="https://github.com/samuelbrag4">Ver perfil</a>
    </div>
  );
};

export default CardDev;
