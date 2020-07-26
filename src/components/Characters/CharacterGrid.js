import React from 'react'
import CharacterItem from './CharacterItem'


const CharacterGrid = ({ itmes, isLoading }) => {
    return isLoading ? 
    (<h1>Loading...</h1>)
    :
    (<section className='cards'>
        {itmes.map(item => (
            <CharacterItem key={item.chart_id} item={item}></CharacterItem>
        ))}
    </section>
    )
}

export default CharacterGrid
