import { Link } from "react-router-dom";
import CartWidget from "../../common/CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent:"center",
        padding: "12px",
        backgroundColor: "blueviolet"
      }}
    >
      <Link style={{
      textDecoration:"none", color:"white"}} to="/">
     <h2 >Nuestros productos</h2>
      </Link>
      <ul
        style={{
          display: "flex"
        }}
      >
        <Link style={{textDecoration:"none", marginLeft:"1rem", fontSize:"1.5rem", color:"white"}} to="/categoria/tartas">Tartas</Link>
        <Link style={{textDecoration:"none", marginLeft:"1rem", fontSize:"1.5rem", color:"white"}} to="/categoria/postres">Postres</Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;