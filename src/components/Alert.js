import React from 'react'

const Alert = (porps) => {
    return (
        <div>
            <div className="alert alert-primary" role="alert">
               {porps.message}
            </div>
        </div>
    )
}

export default Alert