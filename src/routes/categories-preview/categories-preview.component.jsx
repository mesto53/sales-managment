import { useContext} from "react";
import { CategoriesContext } from "../../context/categories.context";
import './categories-peview.styles.scss';
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = ()=>{
  const {categoriesmap} = useContext(CategoriesContext);
  return(
    <>
      <div className="Category-preview-container">
          {
            Object.keys(categoriesmap).map(title=>{
             const products= categoriesmap[title];
             return( <CategoryPreview key={title} title={title} products={products}/>
            )})
          }
      </div>  
    </>
     
    );};
export default CategoriesPreview;