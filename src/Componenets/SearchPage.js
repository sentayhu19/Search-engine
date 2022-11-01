import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchResults } from './redux/search/Api';
const  SearchPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getSearchResults());
    }, [])
  return (
    <div>
        <h1>Search Page</h1>
        <form>
        <input text="text" placeholder="Search" />
        <button type='button'>Search</button>
        </form>

    </div>
  )
}

export default SearchPage