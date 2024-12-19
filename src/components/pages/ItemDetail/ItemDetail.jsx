import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataBase } from "../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import Counter from "../../common/counter/counter";

const ItemDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productsCollection = collection(dataBase, "products");
    let refDoc = doc(productsCollection, id);
    const getDocById = getDoc(refDoc);
    getDocById.then((res) => setProduct({ ...res.data(), id: res.id }));
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
        <p style={{backgroundColor:"blueviolet", fontSize:"40px"}}>{product.precio}</p>
        <Counter product={product}/>
      </div>
      
     
    </div>
  );
};

export default ItemDetail;