import React from 'react'
import { useSelector } from 'react-redux'
import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';
import Organic from './Organic';
import MinSearchPage from './MinSearchPage';
const  SearchResults = () => {
  const { searchResults } = useSelector(state => state.searchReducer);
  console.log("Get at resul",searchResults);
  return (
    <div className='flex flex-col'>
      <MinSearchPage/>
      <h1>SEARCH RESULTS: </h1>
         {Object.keys(searchResults.organic).map((results) => (
           <Organic
           key={generate({ charset: alphanumeric, length: 32 })}
           ID={results}
           results={searchResults.organic[results]}
         />
    
            ))}

        </div>
  )
}

export default SearchResults