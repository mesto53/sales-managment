import './directory.styles.scss';
import DirectoryItem from '../directory-items/directory-item.components';


const Directory = ({categories})=>{
  
    
    return(
        <div className="directory-container">
             {categories.map((category)=>(
               <DirectoryItem category={category} key={category.id}/>
               ))}
        </div>
    );     
}
export default Directory;
