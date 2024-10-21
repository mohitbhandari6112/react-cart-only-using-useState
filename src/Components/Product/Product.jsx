import { products } from "../../Data/product";
import "./Product.scss";

// eslint-disable-next-line react/prop-types
const Product = ({ addToCart }) => {
  return (
    <section className="product">
      <div className="container-box">
        <h2 className="heading-secondary">Products</h2>
        <div className="product-row">
          {products.map((product) => {
            return (
              <div key={product.id} className="product-wrapper">
                <div className="product-col">
                  <div className="product-image">
                    <img src={product.image} alt="product image" />
                  </div>
                  <div className="product-price">${product.price}</div>
                  <strong className="product-title">{product.title}</strong>
                  <div className="btn-holder">
                    <button
                      className="product-btn"
                      onClick={() => addToCart(product.id)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;
