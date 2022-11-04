import React from 'react'
import { getSearchResults } from './redux/search/Api';
import searchicon2 from '../assets/images/search-icn2.svg'
import { useDispatch } from 'react-redux';
export default function Related({ID, related}) {
  const dispatch = useDispatch();
    const { query } = related;
    const handleClick = (e) => {
      console.log("Target ID related: ", e.target.id);
      dispatch(getSearchResults(e.target.id))
    }
  return (
    <div className='m-auto flex  bg-slate-400 rounded-lg m-2 hover:bg-slate-300'>
      <img src={searchicon2} className='h-10 w-10' />
        <p className='related hover:underline ' id={query}  onClick={handleClick}>{query} </p>
        </div>
  )
}
