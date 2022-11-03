import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { getSearchResults } from './redux/search/Api';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SearchLoading } from './redux/search/action';

const  MinSearchPage = () => {
    const { Savedkey } = useSelector(state => state.searchReducer);
    const [key, setKey] = useState(null);
      const dispatch = useDispatch();
      useEffect(() => {
         dispatch(getSearchResults());
         setKey(Savedkey);
      }, [])
    const handleOnChange = (e) => {
      const { value } = e.target;
      setKey(value);
         }
         const navigate = useNavigate();
     const handleSubmit = (e) => {
      e.preventDefault();
      if(e.key === 'Enter' || e.target.id === 'search-form'){
      dispatch(getSearchResults(key));
      navigate('/searchresults');
      dispatch(SearchLoading());
      }
    }
    return (
      <div className='w-full flex mb-7 mt-8'>
          <form className='flex sm:gap-2 md:gap-10 justify-center  m-auto items-center sm:w-full md:w-2/4 ' onSubmit={handleSubmit} id="search-form">
        <Link to="/">  <h4 className='text-yellow-700 m-auto text-4xl text-center logo-font '>Arada Search</h4></Link>
          <input text="text" name="key" required value={key} onChange={handleOnChange} onKeyUp={handleSubmit} className='border-double border-4 border-sky-500 rounded-lg w-80 h-12 m-auto' placeholder="Search" />
          <button type='submit' className='hover:bg-indigo-600 hover:text-white border-solid border-2 border-sky-500 button  m-auto w-40 rounded-lg h-12'>Search</button>
          </form>
  
      </div>
    )
  }
  export default MinSearchPage;