import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { products } from "./Data/product";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";

export const App = () => {
  const [cart, setCart] = useState([]);
  const [toastMessage, setToastMessage] = useState("");

  //for adding to cart
  function addToCart(id) {
    const product = products.find((product) => product.id === id);

    if (product) {
      setCart((prevCart) => {
        const existingProductIndex = prevCart.findIndex(
          (item) => item.id === id
        );

        if (existingProductIndex >= 0) {
          const updatedCart = [...prevCart];
          updatedCart[existingProductIndex].quantity += 1;
          updatedCart[existingProductIndex].cartPrice =
            updatedCart[existingProductIndex].price *
            updatedCart[existingProductIndex].quantity;
          setToastMessage("Cart updated successfully");
          return updatedCart;
        } else {
          setToastMessage("Product added to cart successfully");
          return [
            ...prevCart,
            {
              ...product,
              quantity: 1,
              cartId: uuidv4(),
              cartPrice: product.price,
            },
          ];
        }
      });
    } else {
      console.error("Product not found");
    }
  }

  //displaying toastr notification
  useEffect(() => {
    if (toastMessage) {
      toast.success(toastMessage);
      setToastMessage("");
    }
  }, [toastMessage]);

  //increasing quantity
  function increaseQuantity(id) {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.cartId === id);

      if (index === -1) return prevCart;

      const updatedCart = [...prevCart];
      updatedCart[index].quantity += 1;
      const originalPrice = updatedCart[index].price;
      updatedCart[index].cartPrice =
        originalPrice * updatedCart[index].quantity;
      return updatedCart;
    });
  }

  //decreasing qunaity
  function decreaseQuantity(id) {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.cartId === id);
      if (index === -1) return prevCart;
      if (prevCart[index].quantity <= 1) {
        return prevCart.filter((item) => item.cartId !== id);
      }

      const updatedCart = [...prevCart];
      updatedCart[index].quantity -= 1;
      const originalPrice = updatedCart[index].price;
      updatedCart[index].cartPrice =
        originalPrice * updatedCart[index].quantity;

      return updatedCart;
    });
  }
  //removing item from cart
  function removeItem(id) {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.cartId !== id);
    });
  }

  //sorty by price
  function sortByPrice() {
    const sortedCart = [...cart].sort((a, b) => a.price - b.price);
    setCart(sortedCart);
  }
  //sort by name
  function sortByTitle() {
    const sortedPeople = [...cart].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setCart(sortedPeople);
  }
  return (
    <Router>
      <NavBar itemsInCart={cart?.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              carts={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeItem={removeItem}
              sortByTitle={sortByTitle}
              sortByPrice={sortByPrice}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
