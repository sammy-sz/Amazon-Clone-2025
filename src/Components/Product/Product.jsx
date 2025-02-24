import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import styles from "./Product.module.css";
import Loader from "../Loader/Loader";

const Product = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
     {isLoading?(<Loader />) : (<section className={styles.products_container}>
        {products?.map((singleProduct) => {
          return <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />;
        })}
      </section>)
}
    </>
  );
};

export default Product;
