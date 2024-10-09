import styles from './ShareButton.module.css';

interface ShareButtonProps {
  isActive: boolean;
}

export default function ShareButton({ isActive }: ShareButtonProps) {
  const fill = isActive ? '#FFF' : '#6E8098';

  return (
    <button className={styles.button}>
      <svg xmlns='http://www.w3.org/2000/svg' width='15' height='13'>
        <path
          fill={fill}
          d='M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z'
        />
      </svg>
    </button>
  );
}
