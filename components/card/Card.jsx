
import styles from './card.module.css'; 

export function Card({ name, description, imageUrl }) {
    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={name} className={styles.cardImage} />
            <h2 className={styles.cardTitle}>{name}</h2>
            <p className={styles.cardText}>{description}</p>
            <button className={styles.cardButton}>Подробнее</button>
        </div>
    );
}