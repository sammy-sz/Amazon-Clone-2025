import React from 'react'
import {categoryInfos} from "./categoryFullInfos"
import CategoryCard from './CategoryCard'
import styles from "./Category.module.css";

const Category = () => {
  return (
    <section className={styles.category_container}>
      {categoryInfos.map((infos, i) => (
        <CategoryCard data={infos} key={i} />
      ))}
    </section>
  );
}

export default Category