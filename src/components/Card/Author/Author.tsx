import avatar from '../../../assets/images/avatar-michelle.jpg';
import ShareButton from '../ShareButton/ShareButton';
import styles from './Author.module.css';

export default function Author() {
  return (
    <div className={styles.container}>
      <img
        src={avatar}
        alt='Avatar of Michelle'
        className={styles.authorImage}
      />
      <div className={styles.authorInfo}>
        <p className={styles.authorName}>Michelle Appleton</p>
        <p className={styles.date}>28 Jun 2020</p>
      </div>
      <ShareButton isActive={false} />
    </div>
  );
}
