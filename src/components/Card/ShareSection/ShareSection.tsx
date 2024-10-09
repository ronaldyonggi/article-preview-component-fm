import styles from './ShareSection.module.css';
import facebookIcon from '../../../assets/images/icon-facebook.svg'

export default function ShareSection() {
  return (
    <div>
      <p>SHARE</p>
      <a href='#' aria-label='Share on Facebook'>
        <img src={facebookIcon} alt="Facebook Icon" />
      </a>
      <a href='#' aria-label='Share on Twitter'>
      </a>
      <a href='#' aria-label='Share on Pinterest'>
      </a>
    </div>
  );
}
