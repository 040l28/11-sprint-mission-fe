import BestProducts from '../BestProducts';
import SellingProducts from '../SellingProducts';
import styles from './Products.module.css';

function Products() {
  return (
    <div className={styles.productContainer}>
      <BestProducts />
      <SellingProducts />
    </div>
  );
}

export default Products;