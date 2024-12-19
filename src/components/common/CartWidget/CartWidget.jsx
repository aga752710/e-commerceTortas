import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <img style={{width:"60px", marginleft:"30px"}} src="https://res.cloudinary.com/dvqc2bb12/image/upload/v1734448618/carrito_lhe6z7.png" alt="carrito" />
      <span>{cart.length}</span>
    </Link>
  );
};

export default CartWidget;