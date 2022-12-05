import { Outlet,Link } from "react-router-dom";
import { Fragment,useContext } from "react";
import { ReactComponent as Crownlogo } from "../../assets/crown.svg";
import {Navigationcontainer,LogoContainer,NavLinks,NavLink} from './navigation.styles';
import { UserContext } from "../../context/user.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/Cart-icon/cart-icon.component";
import CartDrobDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CardContext } from "../../context/card.context";



const Navigation = ()=>{
   const {currentUser} = useContext(UserContext);
   const {iscardopen} = useContext(CardContext)


    return(
       <Fragment>
          <Navigationcontainer>
            <LogoContainer to= '/'>
            <Crownlogo className='logo'/>
            </LogoContainer>
            <NavLinks>
               {currentUser ?
                   <NavLink as='span' onClick={SignOutUser}>signout</NavLink>
                   :<NavLink to='/auth'><span className="nav-linK">signin</span></NavLink>}
               <Link className="nav-link" to='/shop'>SHOP</Link>
               <CartIcon/>
            </NavLinks>
            { iscardopen && <CartDrobDown/>}
         </Navigationcontainer>
          <Outlet/>
       </Fragment>
    )
 }
 export default Navigation;