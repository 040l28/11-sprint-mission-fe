import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header />

      <main className={styles.main}>
        <Products />
      </main>

      <Footer />
    </div>
  );
}

export default App;
