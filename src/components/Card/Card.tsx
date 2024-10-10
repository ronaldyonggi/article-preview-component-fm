import decoration from '../..//assets/images/drawers.jpg';
import styles from './Card.module.css';
import avatar from '../../assets/images/avatar-michelle.jpg';
import { useState } from 'react';
import ShareButton from './ShareButton/ShareButton';

export default function Card() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={decoration}
          alt='Green dresser with decorative items'
          className={styles.image}
        />
      </div>
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
        <div className={styles.authorInfo}>
          <img
            src={avatar}
            alt='Avatar of Michelle'
            className={styles.authorImage}
          />
          <div className={styles.authorText}>
            <p className={styles.authorName}>Michelle Appleton</p>
            <p className={styles.date}>28 Jun 2020</p>
          </div>
          <ShareButton isActive={isActive} toggleActive={toggleActive} />
        </div>
      </div>
    </div>
  );
}
