import avatar from '../../../assets/images/avatar-michelle.jpg';
import ShareButton from '../ShareButton/ShareButton';
import styles from './Profile.module.css';
import parentStyles from '../Card.module.css';

interface ProfileProps {
  toggleActive: () => void;
}

export default function Profile({ toggleActive }: ProfileProps) {
  return (
    <div className={`${styles.container} ${parentStyles.footerContainer}`}>
      <img
        src={avatar}
        alt='Avatar of Michelle'
        className={styles.authorImage}
      />
      <div className={styles.authorInfo}>
        <p className={styles.authorName}>Michelle Appleton</p>
        <p className={styles.date}>28 Jun 2020</p>
      </div>
      <ShareButton isActive={false} toggleActive={toggleActive} />
    </div>
  );
}
