import styles from './Button.module.css';
import IconCart from './IconCart';

const Button = () => {
  return (
    <button className={styles.button}>
      <IconCart /> Add to Card
    </button>
  );
};

export default Button;
