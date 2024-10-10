import styles from './ShareButton.module.css';
import facebookIcon from '../../../assets/images/icon-facebook.svg';
import twitterIcon from '../../../assets/images/icon-twitter.svg';
import pinterestIcon from '../../../assets/images/icon-pinterest.svg';

interface ShareButtonProps {
  isActive: boolean;
  toggleActive: () => void;
}

export default function ShareButton({
  isActive,
  toggleActive,
}: ShareButtonProps) {
  const fill = isActive ? '#FFF' : '#6E8098';

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${isActive && styles.buttonActive}`}
        onClick={toggleActive}
        aria-label='Share'
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='15' height='13'>
          <path
            fill={fill}
            d='M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z'
          />
        </svg>
      </button>
      {isActive && (
        <div className={styles.shareSection}>
          <span className={styles.shareText}>Share</span>
          <a href='#' aria-label='Share on Facebook' className={styles.icon}>
            <img src={facebookIcon} alt='Facebook icon' />
          </a>
          <a href='#' aria-label='Share on Twitter' className={styles.icon}>
            <img src={twitterIcon} alt='Twitter icon' />
          </a>
          <a href='#' aria-label='Share on Pinterest' className={styles.icon}>
            <img src={pinterestIcon} alt='Pinterest icon' />
          </a>
        </div>
      )}
    </div>
  );
}
