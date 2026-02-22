
import { formatFileNameToTitle } from '../utils';
import './Products.css';

// import all files immediately ('eager: true') as URL strings ('as: url').
// The keys of this object will be the file paths.
const imagesGlob = import.meta.glob('../assets/images/*.*', { eager: true, as: 'url' });

function Products() {
  // Convert the glob object into an array we can loop through
  const productList = Object.keys(imagesGlob).map((filePath) => {
    return {
        id: filePath,
        src: imagesGlob[filePath], // The actual resulting URL of the image
        title: formatFileNameToTitle(filePath) // Use our helper function
    };
  });

  return (
    <div style={{ padding: '20px' }}>
      <h1>Our Products</h1>
      <div className="product-grid">
        {productList.map((product) => (
          // This is the container loop you asked for
          <div key={product.id} className="product-card">
            <img src={product.src} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;