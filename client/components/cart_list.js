// import React, { Component } from 'react';
//
// class Cart extends Component {
//   constructor(props){
//     super(props);
//
//     this.state = { items: [], total: 0 };
//   }
//
//   addItem(e, item) {
//     this.state.items.push(index);
//     this.countTotal();
//   }
//
//   removeItem(e, itemID) {
//     let itemIndex;
//     this.state.items.some(function(item,index){
//       if(item.id == itemId){
//         itemIndex = index;
//         return true;
//         this.countTotal();
//       }
//     })
//
//     if(typeof itemID != 'undefined'){
//       this.state.items.spice(itemIndex, 1);
//     }
//   }
//
//   countTotal() {
//     let total = 0;
//     this.state.items.forEach(function(item, index){
//       total = total + item.price;
//     });
//     this.setState(total: total);
//   }
//
//   render()
//     return(
//       <div className='cart-list'>
//         {this.state.items.map(item =>
//           return(
//             <li key={item.id} className='list-group-item'>
//               <p>{item.name}</p>
//               <p>{item.price}</p>
//             </li>
//           )
//         )};
//         let body = (<ul>{items}</ul>)
//         let empty = <div>cart is empty</div>;
//     </div>
//   );
// };
//
// export default Cart;
