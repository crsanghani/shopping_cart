import React from 'react';
import ReactDOM from 'react-dom';

import ProductList from './components/product_list';

// after meteor loads in the browser then react loads in the DOM

const App = ()  => {
  return(
    <div>
      <ProductList />
    </div>
  )
}

Meteor.startup(() => {
  //react render call
  ReactDOM.render(<App />, document.querySelector('.container'));
});
