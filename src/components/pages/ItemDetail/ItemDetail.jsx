import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../products";

const ItemDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState({});

  useEffect(() => {
    let productSelected = products.find((el) => el.id === +id);
    setProduct(productSelected);
  }, [id]);

  return (
    <div className="card-container">
      <h2>{product.title}</h2>
      <img className="card" style={{
        width:"400px",
        height:"400px"
      }} src={product.image} alt="" />
      <div className="card">
        <p >{product.description}</p>
        <p style={{backgroundColor:"violet", fontSize:"40px"}}>{product.precio}</p>
        <button style={{borderRadius:"0.5rem"}}>Agregar al pedido</button>
      </div>
      
     
    </div>
  );
};

export default ItemDetail;