import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../../context/StoreContext';

const Cart = () => {
  const { cart_Items, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cart_Items[item._id] > 0) {
            return (
              <div className="cart-items-item" key={item._id}>
                <p><img src={item.img} alt={item.title} /></p>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <p>{cart_Items[item._id]}</p>
                <p>{item.price * cart_Items[item._id]}</p>
                <p>
                  <button onClick={() => removeFromCart(item._id)}>Remove</button>
                </p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Cart;


