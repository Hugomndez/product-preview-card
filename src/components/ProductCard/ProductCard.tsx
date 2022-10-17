import { Button } from 'components';
import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <picture>
        <source
          srcSet='/image-product-desktop.jpg'
          media='(min-width: 640px)'
        />
        <img
          className={styles.image}
          src='/image-product-mobile.jpg'
          alt='Perfume - Gabrielle Essence'
          decoding='async'
          loading='eager'
        />
      </picture>
      <div className={styles.content}>
        <h1 className={styles.title}>Perfume</h1>
        <h2 className={styles.subTitle}>Gabrielle Essence Eau De Parfum</h2>
        <p className={styles.description}>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className={styles.pricingWrapper}>
          <span className={styles.discount}>$149.99</span>
          <span className={styles.price}>$169.99</span>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default ProductCard;
