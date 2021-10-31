import React from 'react'
import { SwitchHorizontalIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

const Header = ({isTheme, handleTheme}) => {
    const router = useRouter()
    return (
        <div className="w-full py-4 px-5">
            <div className="flex items-center justify-between md:max-w-3xl xl:max-w-5xl md:mx-auto">
                <h1 className="text-2xl cursor-pointer" onClick={() => router.push('/')}>NextCrypto</h1>
                <button className="py-2 px-3 text-sm rounded bg-gray-800 flex items-center text-gray-100 dark:bg-gray-200 dark:text-gray-800 transition transition-200 ease-in" onClick={handleTheme}>
                    <SwitchHorizontalIcon className="h-4 mr-2"/>
                    {isTheme ? 'Light mode' : 'Dark mode'}
                </button>
            </div>
        </div>
    )
}

export default Header
