import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/poduct-card/product-card.component';

import { CategoriesContext } from '../../context/categories.context';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesmap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesmap[category]);

  useEffect(() => {
    setProducts(categoriesmap[category]);
  }, [category, categoriesmap]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;