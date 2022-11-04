import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 bg-slate-100">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link to="/" class="flex items-center mb-4 sm:mb-0">
          <h1 className="text-yellow-700 m-auto text-2xl mb-7">Arada Search</h1>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-700 sm:mb-0 dark:text-gray-700">
          <li>
            <a href="https://www.linkedin.com/in/sentayhu-berhanu" className="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
            <a href="https://arada-chat.vercel.app/" className="mr-4 hover:underline md:mr-6">Arada Chat</a>
          </li>
          <li>
            <a href="https://github.com/sentayhu19" className="mr-4 hover:underline md:mr-6 ">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sentayhu-berhanu" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-700">
        © 2022
        <a href="arada-search.vercel.app" className="hover:underline">Arada</a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
