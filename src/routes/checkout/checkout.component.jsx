import './checkout.styles.scss'
import { useContext } from 'react';
import { CardContext } from '../../context/card.context';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = ()=>{
  const {cartitems,total} = useContext(CardContext);
    return(
      <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'>
              <span>Product</span>    
            </div>
            <div className='header-block'>
              <span>Discribtion</span>    
            </div>
            <div className='header-block'>
              <span>Quantity</span>    
            </div>
            <div className='header-block'>
              <span>price</span>    
            </div>
            <div className='header-block'>
              <span>Remove</span>    
            </div>
        </div>
          {cartitems.map((item)=>(
              <CheckOutItem
                key = {item.id} 
                item = {item} />
           ))}
        <span className='total'>Total: ${total} </span>
      </div>
)}        
export default Checkout;