import decoration from '../..//assets/images/drawers.jpg';
import styles from './Card.module.css';
import Author from './Author/Author';
import ShareSection from './ShareSection/ShareSection';

export default function Card() {
  return (
    <div className={styles.container}>
      <img
        src={decoration}
        alt='Green dresser with decorative items'
        className={styles.image}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className={styles.description}>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I've got some simple tips to help
          you make any room feel complete.
        </p>
        <Author />
        <ShareSection />
      </div>
    </div>
  );
}
