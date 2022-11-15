import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';
import Organic from './Organic';
import MinSearchPage from './MinSearchPage';
import Related from './Related';
import loadinganim from '../assets/images/loading.gif';
import { Search, SearchLoading, SearchImage } from './redux/search/action';
import getSearchResults from './redux/search/Api';
import searchicn from '../assets/images/search-icn2.svg';
import imagesicn from '../assets/images/images.svg';

const SearchResults = () => {
  const {
    searchResults, searcherror, Savedkey, loading, imageresults,
  } = useSelector((state) => state.searchReducer);
  const [tab, settab] = React.useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const LocalResults = JSON.parse(localStorage.getItem('arada_results'));
    if (searchResults.length === 0 && LocalResults) { // when refresh if there is no search results and there is a previous search key in local stroage
      dispatch(Search(LocalResults, LocalResults.searchParameters.q)); // call getSearchResults function to get the search results using key from local storage
    }
    window.scrollTo(0, 0);
  }, [Savedkey]);
  const handletab = () => {
    settab(!tab);
    dispatch(SearchLoading(true));
    if (true) {
      const LocalImageResults = JSON.parse(localStorage.getItem('arada_image'));
      if (LocalImageResults.searchParameters.q !== Savedkey) {
        dispatch(SearchLoading(true));
        dispatch(getSearchResults(Savedkey, 'image'));
      } else {
        dispatch(SearchImage(LocalImageResults, Savedkey));
      }
    }
  };
  if (searcherror === 1) {
    return (
      <div>
        <MinSearchPage />
        <h1 className="bg-red-600 text-white h-10 text-center">Someting went wrong, Please try again later </h1>
      </div>
    );
  }
  if (loading === true) {
    <MinSearchPage />;
    return (<img src={loadinganim} alt="loading" className="m-auto mt-28 mb-96" />);
  }

  if (searchResults.length !== 0) {
    return (
      <>

        <div className="flex flex-col sm:w-100 bg-slate-100 ">
          <div className="bg-slate-100 border-b-4 border-slate-200 ... mb-3">
            <MinSearchPage />
            <div className="text-center">
              <span title={Savedkey}>
                <img src={searchicn} alt="search-icon" className="h-3 m-auto" />
                Search Results for
              </span>
              <span className="text-2lx bg-slate-300">
                {' '}
                {Savedkey}
              </span>
            </div>
            <div className="flex gap-8 w-24 m-auto pt-5">
              <button type="button" onClick={handletab} className={tab ? 'border-b-4 border-orange-600 ring-offset-2 ' : ''}>
                <div className="flex justify-center text-center items-center gap-1">
                  <img className=" h-4 w-5" src={searchicn} alt="search icon" />
                  <p title="All search results">All</p>
                </div>
              </button>
              <button type="button" onClick={handletab} className={tab ? '' : 'border-b-4 border-orange-600'}>
                <div className="flex justify-center text-center items-center gap-1">
                  <img className=" h-4 w-5" src={imagesicn} alt="search icon" />
                  <p className="Images search results">Images</p>
                </div>
              </button>
            </div>
          </div>
          {tab
            ? (
              <div>
                {Object.keys(searchResults.organic).map((results) => (
                  <Organic
                    key={generate({ charset: alphanumeric, length: 32 })}
                    ID={results}
                    results={searchResults.organic[results]}
                    tab={tab}
                  />
                ))}
                <h3 className="text-4xl text-center m-8">Related searches </h3>
                <div className="m-auto grid md:grid-cols-3 sm:grid-cols-1 sm:w-72   border-4 border-white-200 border-x-orange-200 sm:w-80 md:w-3/5">

                  {
      searchResults.relatedSearches
        ? Object.keys(searchResults.relatedSearches).map((related) => (

          <Related
            key={generate({ charset: alphanumeric, length: 32 })}
            ID={related}
            related={searchResults.relatedSearches[related]}
          />
        )) : ''
            }
                </div>
              </div>

            ) : (

              <div className="grid grid-cols-3 md:w-3/4 m-auto sm:gap-7  sm:w-4/5 mb-80">
                {imageresults.images ? Object.keys(imageresults.images).map((images) => (
                  <Organic
                    key={generate({ charset: alphanumeric, length: 32 })}
                    ID={images}
                    results={imageresults.images[images]}
                    tab={tab}
                  />
                ))
                  : ''}
              </div>
            )}
          {' '}

        </div>
      </>
    );
  }
  return (
    <div className="mb-96"><MinSearchPage /></div>
  );
};

export default SearchResults;
