import React from 'react';

export default function Organic({ results, tab }) {
  const {
    title, link, snippet, imageUrl,
  } = results;
  return (
    <>
      {tab ? (
        <div className="md:w-3/5 m-auto sm:w-80">
          <div className="flex justify-between flex-wrap">
            <div className="flex flex-col flex-wrap">
              <a href={link} className="text-green-600">
                {' '}
                <h2 className="text-2xl hover:underline">{title}</h2>
              </a>
              <p className="text-slate-400 sm:w-80 md:w-96">{link}</p>
            </div>
            {imageUrl ? <img className="h-20" src={imageUrl} alt="url-img" /> : ''}
          </div>
          <p>{snippet}</p>
        </div>
      )
        : (
          <>
            {imageUrl ? <a href={link}><img className="h-40 w-52 hover:border-2 border-orange-500" src={imageUrl} alt="url-img" /></a> : ''}
          </>

        ) }
    </>
  );
}
