import React from 'react'
import "../style/groupProduct.css"

const GroupProduct = () => {
  return (
    <div className='group_of_product'>
    <h2 className='group_product_heading'>Up to 60% off | Styles for Women</h2>
    <div className='image_container'>
        <div className='image_one'>
            <img alt='' className='img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg'></img>
            <p className='image_footer'>Women's Clothing</p>
        </div>
        <div className='image_two'>
            <img alt='' className='img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg'></img>
            <p className='image_footer'>Footwear+Handbags</p>
        </div>
        <div className='image_three'>
            <img alt='' className='img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg'></img>
            <p className='image_footer'>Watches</p>
        </div>
        <div className='image_four'>
            <img alt='' className='img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg'></img>
            <p className='image_footer'>Fashion Jewellery</p>
        </div>
        <h4 className='group_product_more'>See all offers</h4>
    </div>
</div>
  )
}

export default GroupProduct