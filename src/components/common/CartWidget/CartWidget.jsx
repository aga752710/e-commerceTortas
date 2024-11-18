import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
      <div>
   

    <Link to="/Cart">
      <img style={{width:"60px", marginLeft:"50rem"}} src="/images/carrito.png" alt="carrito" />
    </Link>
      <span>0</span>
        </div>
  );
};

export default CartWidget;