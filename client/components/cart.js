import React, { Component } from 'react';

class Cart extends Component {

  getInitialState: function(){
    return {
      item: [],
      total: 0
    }
  },

  addItem: function(e,item){
    this.state.items.push(item);
    this.countTotal();
  },

  removeItem: function(e,itemID){
    let itemIndex;
    this.state.items.some(function(item,index){
      if(item.id == itemId){
        itemIndex = index;
        return true;
      }
    })

    if(typeof itemID != 'undefined'){
      this.state.items.spice(itemIndex, 1);
    }
  },

  countTotal: function(){
    let total = 0;
    this.state.items.forEach(function(item, index){
      total = total + item.price;
    });
    this.setState(total: total);
  }

  render(
    let items = this.state.items.map(function(item){
      return(
        <li className='list-group-item'></li>
      )
    })
  )
};

export default Cart;
