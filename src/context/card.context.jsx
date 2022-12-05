import { createContext,useState,useEffect } from "react";

const addcartitem = (cartitems,producttoadd) =>{
    const existingcarditem = cartitems.find(
        (cartitem)=> cartitem.id===producttoadd.id
    );
    if(existingcarditem){
        return cartitems.map((cartitem)=>
            cartitem.id===producttoadd.id 
            ? {...cartitem,quantity:cartitem.quantity+1}
            : cartitem
        )}
    return [...cartitems,{ ...producttoadd,quantity:1 }];   
    }
     
    
const removecartitem = (cartitems,producttoremove) =>{
    const existingcarditem = cartitems.find(
        (cartitem)=> cartitem.id===producttoremove.id);
    if(existingcarditem.quantity===1){
        return cartitems.filter((cartitem)=>cartitem.id!==producttoremove.id);
    }
    return cartitems.map((cartitem)=>
        cartitem.id===producttoremove.id && cartitem.quantity>1
        ? {...cartitem,quantity:cartitem.quantity-1}
        : cartitem
            )};


const deletecartitem = (cartitems,producttodelete) =>{
    return cartitems.filter((cartitem)=>cartitem.id!==producttodelete.id);}


export const CardContext = createContext({
    iscardopen: false ,
    setiscardopen: ()=>{},
    cartitems : [],
    additemtocart:()=>{},
    cartcount: 0,
    removeitemtocart:()=>{},
    deleteitemfromcart:()=>{},
    total:0,

});

export const CardProvider = ({children})=>{
   const [iscardopen,setiscardopen]=useState(false);
   const [cartitems,setcarditem] = useState([]);
   const [cartcount,setcartcount] = useState(0);
   const [total,settotal] = useState(0);

   useEffect(() => {
    const count = cartitems.reduce(
      (total, cartItem) => total + cartItem.quantity,0);
      setcartcount(count);
  }, [cartitems]);


  useEffect(() => {
    const newtotal = cartitems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price ,0);
      settotal(newtotal);
  }, [cartitems]);

  
    const additemtocart = (producttoadd)=>{
      setcarditem(addcartitem(cartitems,producttoadd));}
    
    const deleteitemfromcart = (producttodelete)=>{
       setcarditem(deletecartitem(cartitems,producttodelete));}
    const removeitemfromcart = (producttoremove)=>{
       setcarditem(removecartitem(cartitems,producttoremove));}   
   const value = {iscardopen,setiscardopen,cartitems,additemtocart,cartcount,deleteitemfromcart,removeitemfromcart,total};

   return( 
      <CardContext.Provider value={value}>{children}</CardContext.Provider>
)};