import PropTypes from "prop-types"; // ES6
import "./Cart.scss";
import { useState } from "react";

const Cart = ({
  carts,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  sortByTitle,
  sortByPrice,
}) => {
  console.log(carts);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="h-100">
      <div className="container h-100 py-5">
        {carts?.length > 0 ? (
          <>
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-10">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-normal mb-0">Shopping Cart</h3>
                  <div>
                    <div className="mb-0">
                      <div className="dropdown show">
                        <button
                          type="button"
                          className="btn btn-primary dropdown-toggle"
                          data-toggle="dropdown"
                          onClick={toggleDropdown}
                        >
                          Sort By:
                        </button>
                        <ul
                          className={`dropdown-menu ${isOpen ? "show" : ""}`}
                          role="menu"
                        >
                          <button
                            className="dropdown-item"
                            onClick={sortByTitle}
                          >
                            title
                          </button>
                          <button
                            className="dropdown-item"
                            onClick={sortByPrice}
                          >
                            price
                          </button>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {carts?.map((cart) => {
                  return (
                    <div key={cart.id} className="card rounded-3 mb-4">
                      <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                          <div className="col-lg-2 col-xl-2">
                            <img
                              src={cart.image}
                              className="img-fluid rounded-3"
                              alt="product img"
                            />
                          </div>
                          <div className="col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">{cart.title}</p>
                          </div>
                          <div className="col-lg-3 col-xl-2 d-flex align-items-center">
                            <button
                              className="btn btn-danger"
                              onClick={() => decreaseQuantity(cart.cartId)}
                            >
                              <i className="bi bi-dash"></i>
                            </button>
                            <span className=" d-inline-block px-4">
                              {cart.quantity}
                            </span>
                            <button
                              className="btn btn-primary"
                              onClick={() => increaseQuantity(cart.cartId)}
                            >
                              <i className="bi bi-plus"></i>
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0">
                              ${cart.cartPrice?.toFixed(2)}
                            </h5>
                          </div>
                          <div className="col-lg-1 col-xl-1">
                            <button
                              className="btn btn-danger"
                              onClick={() => removeItem(cart.cartId)}
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <h2 className="text-center">No items in the cart</h2>
        )}
      </div>
    </section>
  );
};
Cart.propTypes = {
  carts: PropTypes.array,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  sortByTitle: PropTypes.func,
  sortByPrice: PropTypes.func,
};
export default Cart;
