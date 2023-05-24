import classes from './CartButton.module.css';
import {useSelector,useDispatch } from 'react-redux';
import { cartUiactions } from '../../store/cartUiSlice';
const CartButton = () => {
const {totalQuantity} = useSelector(state=>state.cart)
const {displayCartModal} = cartUiactions;
const dispatch = useDispatch();
  return (
    <button className={classes.button} onClick={()=>{dispatch(displayCartModal())}}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;