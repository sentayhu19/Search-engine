import React from 'react'
import { useSelector } from 'react-redux'
import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';
import Organic from './Organic';
import MinSearchPage from './MinSearchPage';
import Related from './Related';
const  SearchResults = () => {
  const { searchResults ,searcherror } = useSelector(state => state.searchReducer);
  if(searcherror===0){
    return (<h1 class="bg-red-600 text-white h-10 text-center">Someting went wrong, Please try again later </h1>)
  }
  console.log("SEARCH ERRor: ", searcherror);
  return (
    <div className='flex flex-col'>
      <MinSearchPage/>
      <h1 className='text-center'>Search Results: </h1>
         {Object.keys(searchResults.organic).map((results) => (
           <Organic
           key={generate({ charset: alphanumeric, length: 32 })}
           ID={results}
           results={searchResults.organic[results]}
         />
            ))}
            <h3 class="text-4xl text-center">Related Searches </h3>
            <div className='m-auto flex flex-row flex-wrap w-3/5 border-4 border-indigo-200 border-x-indigo-500'>
      {Object.keys(searchResults.relatedSearches).map((related) => (
           <Related
           key={generate({ charset: alphanumeric, length: 32 })}
           ID={related}
           related={searchResults.relatedSearches[related]}
         />
    
            ))}
            </div>
        </div>
  )
}

export default SearchResults