import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Products } from '../../imports/collections/products';

import ProductDetail from './product_detail';

// constant default page loads
 
const PER_PAGE  = 21;

class ProductList extends Component {

  componentWillMount() {
    this.page = 1;
  }

  // code to handle truncation

  handleButtonClick() {
    Meteor.subscribe('products', PER_PAGE * (this.page + 1));
    this.page += 1;
  }

  render() {
    // props.products => an array of product objects

    return(
      <div>
        <div className='product-list'>
          {this.props.products.map(product =>
            <ProductDetail key={product._id} product={product} />
          )}
        </div>
        <button onClick={this.handleButtonClick.bind(this)}
          className='btn btn-danger'>
          Load More...
        </button>
      </div>
    );
  }
};

export default createContainer(() => {
  // set up subscription
  Meteor.subscribe('products', PER_PAGE);

  //return an object. Whatever we return will be sent to ProductList
  // as props
  return { products: Products.find({}).fetch() };

}, ProductList);
