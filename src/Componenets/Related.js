import React from 'react'
import { getSearchResults } from './redux/search/Api';
export default function Related({ID, related}) {
    const { query } = related;
  return (
    <div className='m-auto'>
        <p className='related' onClick={getSearchResults(query)}>{query}</p>
        </div>
  )
}
