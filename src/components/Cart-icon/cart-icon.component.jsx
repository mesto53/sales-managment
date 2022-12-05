import { ReactComponent as Shoplogo } from "../../assets/shopping-bag.svg";
import './cart-icon.styles.scss';
import { useContext } from "react";
import { CardContext } from "../../context/card.context";

const CartIcon = ()=>{
    const {iscardopen,setiscardopen,cartcount} = useContext(CardContext);
    const toggle =()=> setiscardopen(!iscardopen);
    return(
     <div className="cart-icon-container" onClick={toggle}>
        <Shoplogo className="shopping-icon"/>
        <span className="item-count">{cartcount}</span>
     </div>
    );
};
export default CartIcon;