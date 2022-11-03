import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';
import Organic from './Organic';
import MinSearchPage from './MinSearchPage';
import Related from './Related';
import loadinganim from '../assets/images/loading.gif';
import { useNavigate } from 'react-router-dom';
const  SearchResults = () => {
  const { searchResults , key,searcherror,Savedkey, loading } = useSelector(state => state.searchReducer);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchResults])
  if(searcherror===1){
    return (<div><MinSearchPage/><h1 class="bg-red-600 text-white h-10 text-center">Someting went wrong, Please try again later </h1></div>)
  }
  if(loading===true){
    return (<img src={loadinganim} alt="loading" className="m-auto mt-28 mb-80" />)
  }
  if (searchResults.length !== 0) {
  return (
    <div className='flex flex-col'>
      <MinSearchPage/>
      
      <div className='text-center'><span >Search Results for </span><span className='text-2lx bg-slate-300'>{Savedkey}</span></div>
      <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"/>
         {Object.keys(searchResults.organic).map((results) => (
           <Organic
           key={generate({ charset: alphanumeric, length: 32 })}
           ID={results}
           results={searchResults.organic[results]}
         />
            ))}
            <h3 class="text-4xl text-center m-8">Related searches </h3>
            <div className='m-auto grid md:grid-cols-3 sm:grid-cols-1   w-3/5 border-4 border-indigo-200 border-x-indigo-500 sm:w-80 md:w-3/4'>
              
      {
      searchResults.relatedSearches ? 
      Object.keys(searchResults.relatedSearches).map((related) => (
           <Related
           key={generate({ charset: alphanumeric, length: 32 })}
           ID={related}
           related={searchResults.relatedSearches[related]}
         />
            )) : ''
            }
            </div>
        </div>
  )
      }
      else{
        return(
          <div className='mb-96'><MinSearchPage/></div>
        )
      }
}

export default SearchResults