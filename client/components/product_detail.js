import React from 'react';

const ProductDetail = ({ product }) => {
  // props is our product  => taken from product list
  // then renamed to product and es6 destructuring is
  // used to refactor the code to follow DRY

  const { productName, price, productImage } = product;

  return (
    <div className='thumbnail'>
      <img src={productImage}/>
      <div className='caption'>
        <h3>{productName}</h3>
        <ul className='list-group'>
          <li className='list-group-item'>Price: {price}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
