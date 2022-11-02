import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchResults } from './redux/search/Api';
import searchIcn from '../assets/images/search-icn.gif'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const  SearchPage = () => {
  const [key, setKey] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getSearchResults());
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
    <div className='w-full flex flex-col mb-72  mt-40  justify-center'>
        <Link to="/" className='m-auto'><h1 className='text-yellow-700 text-6xl'>አrada Search<sub className='text-sm'>by sentayhu</sub></h1></Link>
        <p className='text-sm text-center mb-5'>Arada search</p>
        <form className='flex flex-col' onSubmit={handleSubmit}>
        <input text="text" name="key" value={key} onChange={handleOnChange} className='border-double border-4 border-sky-500 rounded-lg w-3/5 h-12 m-auto' placeholder="Search" />
        <button type='submit' className='hover:bg-indigo-600 hover:text-white border-solid border-2 border-sky-500 button mt-5 m-auto w-40 rounded-lg'>Search</button>
        </form>

    </div>
  )
}

export default SearchPage