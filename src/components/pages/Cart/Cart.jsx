import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";

const Cart = () => {
  const { cart, resetCart, removeProduct, getTotalPrecio } =
    useContext(CartContext);
  let totalAmount = getTotalPrecio();
  return (
    <div>
      
      {cart.length > 0 ? (
        cart.map((elemento) => {
          return (
            <div
              key={elemento.id}
              style={{ border: "2px solid black", padding: "20px", marginBottom: "20px" }}
            >
              <h3>{elemento.title}</h3>
              <h3>Cantidad: {elemento.quantity}</h3>
              <h3>Precio: {elemento.precio}</h3>
              <button onClick={() => removeProduct(elemento.id)}>
                Eliminar
              </button>
            </div>
          );
        })
      ) : (
        <h2>Aun no agregaste nada a tu carrito</h2>
      )}

      {cart.length > 0 && (
        <div>
          <h3>El total del carrito es : ${totalAmount}</h3>
          <button onClick={resetCart}>Limpiar todo el carrito</button>
          <Link to="/checkout">Finalizar compra</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;