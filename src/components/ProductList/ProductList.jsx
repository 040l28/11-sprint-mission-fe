import ProductCard from '../ProductCard';
import styles from './ProductList.module.css';

function ProductList({ products = [], columns = 4, variant = 'bestProduct' }) {
  return (
    <div
      className={styles.productGrid}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} variant={variant} />
      ))}
    </div>
  );
}

export default ProductList;
