import React from 'react'
import { getSearchResults } from './redux/search/Api';
export default function Related({ID, related}) {
    const { query } = related;
  return (
    <div className='m-auto'>
        <p className='related bg-slate-400 rounded-lg m-2'  onClick={getSearchResults(query)}>{query} </p>
        </div>
  )
}
