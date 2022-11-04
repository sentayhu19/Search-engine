import React from "react";

export default function Organic({ ID, results }) {
  const { title, link, snippet, imageUrl } = results;
  return (
    <div className="md:w-3/5 m-auto sm:w-80">
      <div className="flex justify-between flex-wrap">
        <div className="flex flex-col flex-wrap">
          <a href={link} className="text-green-600">
            {" "}
            <h2 className="text-2xl hover:underline">{title}</h2>
          </a>
          <p className="text-slate-400 sm:w-80 md:w-96">{link}</p>
        </div>
        <img className="h-20" src={imageUrl} />
      </div>
      <p>{snippet}</p>
    </div>
  );
}
