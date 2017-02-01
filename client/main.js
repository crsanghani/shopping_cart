import React from 'react';
import ReactDOM from 'react-dom';

import ProductList from './components/product_list';
// import CartList from './components/cart';

// after meteor loads in the browser then react loads in the DOM

const App = ()  => {
  return(
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-8'><ProductList /></div>
        {/* <div className='col-lg-4'><Cart /></div> */}
      </div>
    </div>
  )
}

Meteor.startup(() => {
  //react render call
  ReactDOM.render(<App />, document.querySelector('.container'));
});
