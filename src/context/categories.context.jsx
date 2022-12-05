import { createContext,useState,useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";



export const CategoriesContext = createContext({
    categoriesmap: {},
});

export const CategoriesProvider = ({children})=>{
   const [categoriesmap,setcategoriesmap] =useState({});
   useEffect(()=>{
    const getcategories = async()=>{
       const categorymap = await getCategoriesAndDocuments();
       console.log(categorymap);
       setcategoriesmap(categorymap);
    }
    getcategories();
   },[])
   const value  = {categoriesmap};
   return(
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
   );
};