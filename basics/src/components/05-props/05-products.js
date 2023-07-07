import React from 'react'
import ProductCard from './06-product-card'

const Products = () => {
  return (
    <div>
       <ProductCard name="Apple">
        <h2>Sony Display</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nobis, illum quod omnis excepturi soluta id quisquam itaque deleniti, fugiat obcaecati sequi laboriosam repellendus eius vel, facere atque temporibus error.
        </p>
       </ProductCard>

       <ProductCard name="Banana">
        <h2>Samsung Display</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nobis, illum quod omnis excepturi soluta id quisquam itaque deleniti, fugiat obcaecati sequi laboriosam repellendus eius vel, facere atque temporibus error.
        </p>
       </ProductCard>
    </div>
  )
}

export default Products