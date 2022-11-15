import React from 'react';
import { useDispatch } from 'react-redux';
import getSearchResults from './redux/search/Api';
import searchicon2 from '../assets/images/search-icn2.svg';

export default function Related({ related }) {
  const dispatch = useDispatch();
  const { query } = related;
  const handleClick = (e) => {
    dispatch(getSearchResults(e.target.id, 'web'));
  };
  return (
    <div className="m-auto flex  bg-slate-400 rounded-lg m-2 hover:bg-slate-300">
      <img src={searchicon2} alt="search-icon" className="h-10 w-10" />
      <p className="related hover:underline " id={query} onClick={handleClick}>
        {query}
        {' '}
      </p>
    </div>
  );
}
