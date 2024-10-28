import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
    <div>
        {children}
        <div className='flex items-end min-h-52'>Layout</div>
    </div>
    )
}

export default Layout