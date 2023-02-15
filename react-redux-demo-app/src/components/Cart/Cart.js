import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(elem => {
          return <CartItem
            item={{
              title: elem.name,
              quantity: elem.quantity,
              price: elem.price,
              total: elem.totalPrice,
              id: elem.itemId
            }}
            key={elem.itemId}
          />
        })}
      </ul>
    </Card>
  );
};

export default Cart;
