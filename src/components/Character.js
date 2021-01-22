// Write your Character component here
import React, {useState} from 'react'
import CharacterCard from './CharacterCard'

function Character(props) {
   
    const {character} = props
    return (
        <div>
            {character.map(character => {
            return <CharacterCard key={character.id} character={character}/>
            })}
        </div>
    )
}

export default Character