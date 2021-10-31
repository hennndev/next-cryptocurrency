import React from 'react'
import moment from 'moment'
import { useRouter } from 'next/router'

const CryptoTable = ({cryptoData}) => {

    const theadData = [
        'Nama', 'Symbol', 'Price', '24h Percentage', 'High 24h', 'Low 24h', 'Last update'
    ]

    const router = useRouter()

    return (
        <table className="mt-20 w-full relative">
            <thead>
                <tr className="border-b border-gray-300 dark:border-gray-700">
                    {theadData.map(data => (
                        <td className="pr-20 md:pr-0 pb-2 font-bold" key={data}>
                            {data}
                        </td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {cryptoData.map(crypto => (
                    <tr className="border-b border-gray-300 dark:border-gray-800 cursor-pointer" key={crypto.id} onClick={() => router.push(`/${crypto.id}`)}>
                        <td className="pr-10 md:pr-0 flex items-center py-5">
                            <img src={crypto.image} className="h-5 mr-2"/>
                            {crypto.name}
                        </td>
                        
                        <td className="pr-6 md:pr-0 py-5">{crypto.symbol.toUpperCase()}</td>
                        <td className={`pr-6 md:pr-0 py-5 ${String(crypto.current_price).includes('-') ? 'text-red-500' : 'text-green-500'}`}>${crypto.current_price}</td>
                        <td 
                            className={`pr-6 md:pr-0 py-5 ${String(crypto.price_change_percentage_24h).includes('-') ? 'text-red-500' : 'text-green-500'}`}>
                            {crypto.price_change_percentage_24h}
                        </td>
                        <td className={`pr-6 md:pr-0 py-5 ${String(crypto.high_24h).includes('-') ? 'text-red-500' : 'text-green-500'}`}>
                            {crypto.high_24h}
                        </td>
                        <td className={`pr-6 md:pr-0 py-5 ${String(crypto.low_24h).includes('-') ? 'text-red-500' : 'text-green-500'}`}>
                            {crypto.low_24h}
                        </td>
                        <td className={`pr-15 md:pr-0 py-5`}>
                            {moment(crypto.last_updated).startOf('ss').fromNow()}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CryptoTable
