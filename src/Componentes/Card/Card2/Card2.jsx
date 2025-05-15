import styles from './Card.module.css';

function Card() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Título do Card</h2>
      <p>Essa é a descrição do card.</p>
      <button className={styles.button}>Clique aqui</button>
    </div>
  );
}

export default Card;
