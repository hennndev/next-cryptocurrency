import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
    const [isTheme, setIsTheme] = useState(false)
    return (
        <main className={isTheme ? 'dark' : 'light'}>
            <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white transition transition-200 ease-in">
                <Header handleTheme={() => setIsTheme(!isTheme)} isTheme={isTheme}/>
                {children}
            </div>
            <Footer/>
        </main>
    )
}

export default Layout
