import Cart from './components/Cart/Cart';
import { createPortal } from 'react-dom';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector ,useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { cartUiactions } from './store/cartUiSlice';
import { useRef } from 'react';
function App() {
 const {showCartModal}=useSelector(state => state.cartUi);
 const dispatch = useDispatch();
 const {removeCartModal} =  cartUiactions;
/* To remnove the overflow of body when modal is opened */
 useEffect(() => {
  document.body.style.overflow = showCartModal ? "hidden" : "auto";
  },[showCartModal])

  function Backdrop(){
  return createPortal(<div className='modal-backdrop'></div>,document.getElementById("cartModal-backdrop"));
  }

  function Overlay(props){
  return <div
  ref={modalRef}
  onClick={handleBackdropClick} className='modal-overlay'>{props.content}</div>
  }

  const modalRef = useRef(null);

  const handleBackdropClick = (event) => {
    // Hide the modal if the backdrop or overlay is clicked
    if (event.target === modalRef.current) {
      dispatch(removeCartModal());
    }
  };

  return (
    <Layout>
     {showCartModal && createPortal(
      <Fragment>
      <Backdrop/>
      <Overlay content={<Cart />}/>
      </Fragment>
      ,document.getElementById('cart-modal')
          )}
     <Products />
    </Layout>
  );
}

export default App;
