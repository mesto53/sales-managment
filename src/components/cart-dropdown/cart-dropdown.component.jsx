import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CardItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CardContext } from '../../context/card.context';
import { useNavigate } from 'react-router-dom';


const CartDrobDown = ()=>{
   const {cartitems} = useContext(CardContext);
   const navigate =useNavigate();
   const gotonavigate = ()=>{
      navigate('/checkout');
   }
    return(
       <div className='cart-dropdown-container'>
          <div className='cart-items' >
            {cartitems.map((item)=>(
            <CardItem key={item.id} cartitem={item}/>
            ))}
          </div>
          <Button buttonType='inverted' onClick ={gotonavigate}  >GO checkout</Button>     
       </div>
    );
}
export default CartDrobDown;