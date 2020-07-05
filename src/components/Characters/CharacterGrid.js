import React from 'react'

const CharacterGrid = ({ itmes, isLoading }) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section className='cards'>
        {itmes.map(item => (
            <h1>{item.name}</h1>
        ))}
    </section>
    )
}

export default CharacterGrid
