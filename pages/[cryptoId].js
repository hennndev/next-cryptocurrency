import React from 'react'
import moment from 'moment'
import millify from 'millify'
import { useRouter } from 'next/router'
import Wrapper from '../components/Layout/Wrapper'
import { ArrowLeftIcon } from '@heroicons/react/outline'

const CryptoDetail = ({crypto}) => {

    const router = useRouter()

    return (
        <Wrapper>
            <div className="flex items-center">
                <img src={crypto.image.small} alt={crypto.name} />
                <h1 className="ml-5 text-2xl">{crypto.name}</h1>
            </div>
            <div className="my-10 md:mb-0">
                <h2 className="text-xl">{crypto.name} Details</h2>
                <div className="mt-5 border border-gray-400 dark:border-gray-700 p-4 rounded-md">
                    <div className="flex justify-between mb-2">
                        <p>Name: </p>
                        <p>{crypto.name}</p>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p>Symbol: </p>
                        <p>{crypto.symbol.toUpperCase()}</p>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p>Gecko Rank: </p>
                        <p>{crypto.coingecko_rank}</p>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p>Market Cap Rank: </p>
                        <p>{crypto.market_cap_rank}</p>
                    </div>
                    <div className="flex justify-between flex-wrap mb-2">
                        <p>Categories: </p>
                        <p>{crypto.categories}</p>
                    </div>
                </div>
            </div>

            <h2 className="mt-16 text-xl mb-2">{crypto.name} Market</h2>
            <p>Last Updated: <span>{moment(crypto.market_data.last_updated).startOf('ss').fromNow()}</span></p>
            
            <div className="mt-5 mb-10 border border-gray-400 dark:border-gray-700 p-4 rounded-md">
                <p className="text-lg mb-5">currency USD</p>
                <div className="flex justify-between mb-2">
                    <p>Current price </p>
                    <p className="text-green-500 ml-2">{crypto.market_data.current_price.usd}</p>
                </div>
                <div className="flex justify-between mb-2">
                    <p>Price change (24h) </p>
                    <p className={`${String(crypto.market_data.price_change_24h).includes('-') ? 'text-red-500' : 'text-green-500'} ml-2`}>
                        {crypto.market_data.price_change_24h}
                    </p>
                </div>
                <div className="flex justify-between mb-2">
                    <p>Price change percentage (24h) </p>
                    <p className={`${String(crypto.market_data.price_change_percentage_24h).includes('-') ? 'text-red-500' : 'text-green-500'} ml-2`}>
                        {crypto.market_data.price_change_percentage_24h}
                    </p>
                </div>

                <div className="flex justify-between mb-2">
                    <p>Price change percentage (7d) </p>
                    <p className={`${String(crypto.market_data.price_change_percentage_7d).includes('-') ? 'text-red-500' : 'text-green-500'} ml-2`}>
                        {crypto.market_data.price_change_percentage_7d}
                    </p>
                </div>
                <div className="flex justify-between mb-2">
                    <p>Price change percentage (14d) </p>
                    <p className={`${String(crypto.market_data.price_change_percentage_14d).includes('-') ? 'text-red-500' : 'text-green-500'} ml-2`}>
                        {crypto.market_data.price_change_percentage_14d}
                    </p>
                </div>

                <div className="flex justify-between mb-2">
                    <p>Price change percentage (30d) </p>
                    <p className={`${String(crypto.market_data.price_change_percentage_30d).includes('-') ? 'text-red-500' : 'text-green-500'} ml-2`}>
                        {crypto.market_data.price_change_percentage_30d}
                    </p>
                </div>
                <div className="flex justify-between mb-2">
                    <p>Price change percentage (60d) </p>
                    <p className={`${String(crypto.market_data.price_change_percentage_60d).includes('-') ? 'text-red-500' : 'text-green-500'} ml-2`}>
                        {crypto.market_data.price_change_percentage_60d}
                    </p>
                </div>
                <div className="flex justify-between mb-2">
                    <p>Price change percentage (200d) </p>
                    <p className={`${String(crypto.market_data.price_change_percentage_200d).includes('-') ? 'text-red-500' : 'text-green-500'} ml-2`}>
                        {crypto.market_data.price_change_percentage_200d}
                    </p>
                </div>
                <div className="flex justify-between mb-2">
                    <p>Price change percentage (1y) </p>
                    <p className={`${String(crypto.market_data.price_change_percentage_1y).includes('-') ? 'text-red-500' : 'text-green-500'} ml-2`}>
                        {crypto.market_data.price_change_percentage_1y}
                    </p>
                </div>

                <div className="flex justify-between mb-2">
                    <p>Market cap change (24h) </p>
                    <p className={`${String(crypto.market_data.price_change_24h).includes('-') ? 'text-red-500' : 'text-green-500'} ml-2`}>
                        {crypto.market_data.market_cap_change_24h}
                    </p>
                </div>
                <div className="flex justify-between mb-2">
                    <p>Market cap change percentage (24h) </p>
                    <p className={`${String(crypto.market_data.price_change_24h).includes('-') ? 'text-red-500' : 'text-green-500'} ml-2`}>
                        {crypto.market_data.market_cap_change_percentage_24h}
                    </p>
                </div>
                <div className="flex justify-between mb-2">
                    <p>Total Supply </p>
                    <p className="text-green-500 ml-2">{millify(crypto.market_data.total_supply || 0)}</p>
                </div>
                <div className="flex justify-between mb-2">
                    <p>Total Volume </p>
                    <p className="text-green-500 ml-2">{millify(crypto.market_data.total_volume.usd || 0)}</p>
                </div>
            </div>
            <button className="flex items-center cursor-pointer hover:text-blue-600" onClick={() => router.push('/')}>
                <ArrowLeftIcon className="h-5 mr-2"/>
                Back Homepage
            </button>
        </Wrapper>
    )
}

export default CryptoDetail





export const getServerSideProps = async (context) => {
    const { cryptoId } = context.query
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${cryptoId}`)
    const crypto = await res.json()

    return {
        props: {
            crypto
        }
    }
} 
