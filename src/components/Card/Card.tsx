import decoration from '../..//assets/images/drawers.jpg';
import styles from './Card.module.css';
import ActiveSection from './ActiveSection/ActiveSection';
import { useState } from 'react';
import Profile from './Profile/Profile';

export default function Card() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

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

        {/* <Author toggleActive={toggleActive} />
        <ActiveSection toggleActive={toggleActive} /> */}
      </div>
      {isActive ? (
        <ActiveSection toggleActive={toggleActive} />
      ) : (
        <Profile toggleActive={toggleActive} />
      )}
    </div>
  );
}
