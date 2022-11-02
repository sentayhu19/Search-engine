import React from 'react'

export default function Footer() {
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 bg-slate-100">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
        <h1 className='text-yellow-700 m-auto text-2xl mb-7'>Arada Search</h1>
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Arada</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="https://arada-chat.vercel.app/" class="mr-4 hover:underline md:mr-6">Arada Chat</a>
            </li>
            <li>
                <a href="https://github.com/sentayhu19/Search-engine" class="mr-4 hover:underline md:mr-6 ">GitHub</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" class="hover:underline">Arada</a>. All Rights Reserved.
    </span>
</footer>
  )
}
