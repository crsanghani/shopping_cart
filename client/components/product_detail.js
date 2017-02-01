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
          <li className='list-group-item'>
            Price: {price}
            {/* <button className={this.state.added ? 'btn btn-danger' : 'btn btn-success'} onClick={this.addToCart}>
              {this.state.added ? 'Remove' : 'Added to cart'}
            </button> */}
          </li>
          <button className='btn btn-success cart-btn'>Add to cart</button>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
