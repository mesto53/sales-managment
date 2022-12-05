import './cart-item.styles.scss';


const CardItem = ({cartitem})=>{
    const {name,quantity,price,imageUrl} = cartitem;
    return(
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>
                  {quantity} * ${price}
                </span>
            </div>
        </div>
    );
};
export default CardItem;