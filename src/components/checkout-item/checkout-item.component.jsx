import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CardContext } from '../../context/card.context';

const CheckOutItem = ({item,removee,addd,deletee})=>{
    const { name,quantity,imageUrl,price} = item;
    const {additemtocart,deleteitemfromcart,removeitemfromcart} = useContext(CardContext);
    return(
        <div  className='checkout-item-container'>
            <div className = 'image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <span className='arrow' onClick={()=>removeitemfromcart(item) }>&#10094;</span>
                <span className='value'>{quantity}</span>
                <span className='arrow' onClick={()=>additemtocart(item)}>&#10095;</span>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={()=>deleteitemfromcart(item)}>&#10005;</span>

        </div>
    )
};
export default CheckOutItem;