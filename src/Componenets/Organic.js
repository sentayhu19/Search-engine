import React from 'react'

export default function Organic({ ID, results }) {


    const {
        title, link, snippet, imageUrl

      } = results;
    console.log("Get at resul ORGANIC", results);
  return (
    <div className='w-3/5 m-auto'>
        <div className='flex justify-between'>
            <div className='flex flex-col'>
        <a href= {link } className="text-green-600"> <h2 className='text-2xl'>{title}</h2></a>
        <p className='text-slate-400'>{link}</p>
        </div>
        <img src={imageUrl} />
       
       </div>
       <p>{snippet}</p>
       
    </div>
  )
}
