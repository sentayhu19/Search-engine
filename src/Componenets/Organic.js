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
              <p className="text-slate-400 sm:w-44  md:w-96">{link.substring(0, 28)}</p>
            </div>
            {imageUrl ? <img className="h-20" src={imageUrl} alt="url-img" /> : ''}
          </div>
          <p>{snippet}</p>
        </div>
      )
        : (
          <div>
            {imageUrl ? (
              <a href={link} title={title}>
                <img className="md:h-48 sm:h-28 md:w-52 sm:w-40  hover:border-2 border-orange-500 m-auto" src={imageUrl} alt="url-img" />
                <p className="md:w-52 sm:w-20 m-auto">
                  {title.substring(0, 35)}
                  ...
                </p>
              </a>

            ) : ''}
          </div>

        ) }
    </>
  );
}
