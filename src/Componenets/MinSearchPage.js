import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { getSearchResults } from './redux/search/Api';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
      dispatch(getSearchResults(key));
      navigate('/searchresults');
    }
    return (
      <div className='w-full flex mb-10 mt-8'>
          <form className='flex gap-10 justify-center  m-auto' onSubmit={handleSubmit}>
        <Link to="/">  <h4 className='text-yellow-700 m-auto text-4xl text-center'>Arada Search</h4></Link>
          <input text="text" name="key" value={key} onChange={handleOnChange} className='border-double border-4 border-sky-500 rounded-lg w-80 h-12 m-auto' placeholder="Search" />
          <button type='submit' className='hover:bg-indigo-600 hover:text-white border-solid border-2 border-sky-500 button mt-5 m-auto w-40 rounded-lg'>Search</button>
          </form>
  
      </div>
    )
  }
  export default MinSearchPage;