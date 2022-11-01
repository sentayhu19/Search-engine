import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchResults } from './redux/search/Api';
const  SearchPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getSearchResults());
    }, [])
  return (
    <div className='w-full flex flex-col  mt-40  justify-center'>
        <h1 className='text-yellow-700 m-auto text-6xl mb-7'>Arada Search</h1>
        <form className='flex flex-col '>
        <input text="text" className='border-double border-4 border-sky-500 rounded-lg w-3/5 h-12 m-auto' placeholder="Search" />
        <button type='button' className='hover:bg-indigo-600 hover:text-white border-solid border-2 border-sky-500 button mt-5 m-auto w-40'>Search</button>
        </form>

    </div>
  )
}

export default SearchPage