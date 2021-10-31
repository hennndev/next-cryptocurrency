import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'

const SearchInput = ({value, handleChange}) => {
    return (
        <div className="flex items-center py-2 px-4 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800 w-mobile-search md:w-search">
            <SearchIcon className="h-5 mr-3"/>
            <input 
                type="text" 
                value={value}
                onChange={handleChange}
                placeholder="Search crypto by name..."
                className="w-full bg-transparent outline-none text-sm placeholder-gray-400 dark:placeholder-gray-500"/>
        </div>
    )
}

export default SearchInput
