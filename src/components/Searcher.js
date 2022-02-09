import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterCategoryThunk, getProductsListThunk, filterHeadlineThunk } from '../redux/actions'



const Searcher = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  const [search, setSearch] = useState('');
  
  const filterCategory = id => dispatch(filterCategoryThunk(id));

  const productList = () => dispatch(getProductsListThunk());

  const filterHeadline = e =>{
    e.preventDefault();
    dispatch(filterHeadlineThunk(search.toLowerCase()));
  }

  return (
      <section className='searcher'>
          <form onSubmit={filterHeadline}>
            <input type="text" placeholder='Type to Search' value={search} onChange={ e => setSearch(e.target.value)}/>
            <input type="submit" value='Search'/>
          </form>
          <div className='categories'>
            <button onClick={productList}>All</button>
            {
              categories.map(category => (
                <button key={category.id} onClick={() => filterCategory(category.id)} > {category.name} </button>
              ))
            }
          </div>
      </section>
  );
};

export default Searcher;
