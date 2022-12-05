import './product-card.styles.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CardContext } from '../../context/card.context';


const ProductCard = ({product})=>{
  const {additemtocart} = useContext(CardContext);
  const addProduct = ()=> additemtocart(product);
  return(
    <div className='product-card-container'>
      <img src={product.imageUrl} alt={`${product.name}`}/>
      <div className='footer'>
           <span className='name'> {product.name}</span>
           <span className='price'>{product.price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProduct} >ADD CARD</Button>
    </div>
  )};
export default ProductCard;