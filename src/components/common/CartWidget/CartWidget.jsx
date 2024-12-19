import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <img style={{width:"60px", marginleft:"30px"}} src="/images/carrito.png" alt="carrito" />
      <span>{cart.length}</span>
    </Link>
  );
};

export default CartWidget;