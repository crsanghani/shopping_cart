import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Products } from '../imports/collections/products';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  // code to run on server at startup
  // perfect place to generate data (seed)

  // check to see if data exists in the collections
  // see if the collection has any recods

  const numberRecords = Products.find({}).count();
  console.log(numberRecords);
  if ( !numberRecords ) {
    // generate some data using faker
    // faker has preset data you can load in using
    // their docs (https://www.npmjs.com/package/faker)

    _.times(5000, () => {
      //es6 destructuring
      const {productName, price, product} = helpers.createCard();

      Products.insert({
        productName, price, product,
        productImage: image.image()

      });
    });
  }
  Meteor.publish('products', function(){
    // return a limited product set initially
    return Products.find({}, { limit: 21 });
  });
});
