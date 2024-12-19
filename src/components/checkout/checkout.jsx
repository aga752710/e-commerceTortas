import { useContext, useState } from "react";
import { CartContext } from "../../../src/context/cartContext";
import { dataBase } from "../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";



const Checkout = () => {
  const { cart, getTotalPrecio, resetCart } = useContext(CartContext);
  const [userData, setUserData] = useState({

    nombre: "",
    userEmail: "",
    telefono: "",
  });

  const [orderId, setOrderId] = useState(null);

  const capturarDatos = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const funcionDelFormulario = (e) => {
    e.preventDefault();
   
    let total = getTotalPrecio();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };
    let ordersCollection = collection(dataBase, "orders");
    addDoc(ordersCollection, order).then((res) => {
      setOrderId(res.id);
      resetCart();
    });

    let productsCollection = collection(dataBase, "products");

    order.items.forEach((elemento) => {
      let refDoc = doc(productsCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });
  };

  return (
    <div>
      <h2>Sitio para completar el pedido</h2>
      {orderId ? (
          <div>
          <h2>Gracias por tu compra, tu ticket es: {orderId}</h2>
          </div>
      
      ) : (
        <form onSubmit={funcionDelFormulario}>
          <input
            type="text"
            placeholder="nombre"
            name="nombre"
            onChange={capturarDatos}
            required
          />
          <input
            type="text"
            placeholder="email"
            name="userEmail"
            onChange={capturarDatos}
            required
          />
          <input
            type="text"
            placeholder="telefono"
            name="telefono"
            onChange={capturarDatos}
            required
          />

{cart.length > 0 && (
            <div>
              <h3>Resumen del Pedido:</h3>
              <div>
                <h4>Datos del comprador:</h4>
                <p><strong>Nombre:</strong> {userData.nombre}</p>
                <p><strong>Email:</strong> {userData.userEmail}</p>
                <p><strong>Teléfono:</strong> {userData.telefono}</p>
              </div>

              <div>
                <h4>Productos en el carrito:</h4>
                {cart.map((elemento) => (
                  <div key={elemento.id} style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
                    <p><strong>{elemento.title}</strong></p>
                    <p>Cantidad: {elemento.quantity}</p>
                    <p>Precio: ${elemento.precio}</p>
                    <p>Subtotal: ${elemento.precio * elemento.quantity}</p>
                  </div>
                ))}
              </div>

              <div>
                <h4>Total: ${getTotalPrecio()}</h4>
              </div>
            </div>
          )}
           <button type="submit">Enviar</button>


<Link to="/">
  <button type="button" onClick={() => resetCart()} style={{ marginLeft: "10px" }}>
    Cancelar
  </button>
</Link>
</form>
)}
</div>)}
        
      
    




export default Checkout;