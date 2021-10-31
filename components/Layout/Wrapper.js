import React from 'react'

const Wrapper = ({children}) => {
    return (
        <div className="px-6 lg:px-0 md:max-w-3xl xl:max-w-5xl md:mx-auto py-10">
            {children}
        </div>
    )
}

export default Wrapper
