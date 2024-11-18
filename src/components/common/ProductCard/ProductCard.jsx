import { Link } from "react-router-dom";
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  return (
      <div className="card">
      <h3>{product.title}</h3>
     
       <Link to={`/ItemDetail/${product.id}`}>
      <img className="card-image"
        src={product.image}
        alt={product.title}/>
        </Link>
      
      <p>{product.description}</p>
      <p>{product.precio}</p>
      <button style={{borderRadius:"0.5rem"}}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;