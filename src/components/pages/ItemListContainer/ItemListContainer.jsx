import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { dataBase } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [myProducts, setMyProducts] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    
    const productsCollection = collection(dataBase, "products");
    let refCollection = productsCollection;
    if (name) {
      const productsCollectionFiltered = query(
        productsCollection,
        where("categoria", "==", name)
      );
      refCollection = productsCollectionFiltered;
    }
    
    const getProducts = getDocs(refCollection);
    getProducts.then((res) => {
      let products = res.docs.map((elemento) => {
        return { ...elemento.data(), id: elemento.id };
      });
      setMyProducts(products);
    });
  }, [name]);

  // const agregarProductos = () => {
  //   let productsCollection = collection(dataBase, "products");

  //   products.forEach((elemento) => {
  //     addDoc(productsCollection, elemento);
  //   });
  // };

  return (
    <div>
      {/* <button onClick={agregarProductos}>Agregar productos</button> */}
      {myProducts.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          
        </div>
      ) : (
        <ItemList myProducts={myProducts} />
      )}
      <h4>Gracias por elegir MINAMABEREPO</h4>
    </div>
  );
};

export default ItemListContainer;