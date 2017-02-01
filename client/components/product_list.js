import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Products } from '../../imports/collections/products';

import ProductDetail from './product_detail';

const ProductList = (props) => {
  // props not employees => an array of product objects

  return(
    <div className='product-list'>
      {props.products.map(product => <ProductDetail product={product} />)}
    </div>
  );
};

export default createContainer(() => {
  // set up subscription
  Meteor.subscribe('products');

  //return an object. Whatever we return will be sent to ProductList
  // as props
  return { products: Products.find({}).fetch() };

}, ProductList);
