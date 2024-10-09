import FacebookIcon from '../../Icons/FacebookIcon';
import PinterestIcon from '../../Icons/PinterestIcon';
import TwitterIcon from '../../Icons/TwitterIcon';
import ShareButton from '../ShareButton/ShareButton';
import styles from './ActiveSection.module.css';
import parentStyles from '../Card.module.css';

interface ActiveSectionProps {
  toggleActive: () => void;
}

export default function ActiveSection({ toggleActive }: ActiveSectionProps) {
  return (
    <div className={`${styles.container} ${parentStyles.footerContainer}`}>
      <div className={styles.shareSection}>
        <p className={styles.shareText}>Share</p>
        <a href='#' aria-label='Share on Facebook'>
          <FacebookIcon />
        </a>
        <a href='#' aria-label='Share on Twitter'>
          <TwitterIcon />
        </a>
        <a href='#' aria-label='Share on Pinterest'>
          <PinterestIcon />
        </a>
      </div>
      <ShareButton isActive={true} toggleActive={toggleActive} />
    </div>
  );
}
