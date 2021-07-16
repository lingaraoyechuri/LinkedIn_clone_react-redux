import React from 'react'

function news({description, readers, newsType}) {
    return (
        <div className="news">
            <h5>{description}</h5>
            <div className="newTags">
                <p>{newsType}</p>
                <p>{readers}</p>
            </div>
        </div>
    )
}

export default news
