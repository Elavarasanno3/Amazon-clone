import React from 'react'
import "../style/productGroup.css"
import SingleProduct from './SingleProduct'
import GroupProduct from './GroupProduct'

const ProductGroup = () => {
  return (
    <div className='product_group'>
      <div className='group_product'>
        <GroupProduct/>
        <GroupProduct/>
        <GroupProduct/>
        <GroupProduct/>
      </div>
      <div className='single_product'>
        <SingleProduct/>

      </div>
    </div>
  )
}

export default ProductGroup