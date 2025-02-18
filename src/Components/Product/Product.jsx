import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from './ProductCard'
import styles from './Product.module.css'

const Product = () => {
    const[products,setProducts]=useState(null)
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setProducts(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

  return (
    <section className={styles.products_container}>
    { products?.map((singleProduct)=>{
           return <ProductCard product={singleProduct} key={singleProduct.id}/>
        })
    }
    </section>
  )
}

export default Product