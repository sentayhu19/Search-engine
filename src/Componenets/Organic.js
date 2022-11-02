import React from 'react'

export default function Organic({ ID, results }) {


    const {
        title, link, snippet, imageUrl

      } = results;
    console.log("Get at resul ORGANIC", results);
  return (
    <div className='w-80'>
        <div className='flex'>
        <a href= {link }> <h2>{title}</h2></a>
        <img src={imageUrl} />
       
       </div>
       <p>{snippet}</p>
       
    </div>
  )
}
