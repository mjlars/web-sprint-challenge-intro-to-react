import React, {useState} from 'react'
import styled from 'styled-components'


const StyledCard = styled.div `
    border: solid black 8px;

   @import url("./index_files/get-shwifty.ttf");

    #hidden{
        display:none;
    }
    @font-face{
    font-family:Get Schwifty;
    src:url('./index_files/get-shwifty.ttf');
    }
     
    font-family: Get Schwifty;
    color: wheat;
    opacity: 1;
    background: url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80');

`

const StyledButton = styled.button`
    color: red;
    width: 40%;
    border-radius: 10px;
    opacity: .9;
`

function CharacterCard(props) {
    const [buttonOn, setButtonOn] = useState(false);

    const turnOn = () => {
      setButtonOn(!buttonOn)
    }

    console.log(props)
    const {character} = props;
    return (
        <div>
            <StyledButton onClick = {turnOn}>{buttonOn ? 'Close' : `${character.name}`} </StyledButton>
                {buttonOn ? <p>{  <StyledCard>
                    <img src={character.image} alt={character.name} />
                    <h3>Name: {character.name}</h3>
                    <p>Gender: {character.gender}</p>
                    <p>Place of Origin: {character.origin.name}</p>
                    <p>Species: {character.species}</p>
                    <p>Dead or Alive: {character.status}</p>
                </StyledCard>}`</p> : <p id='hidden'></p>}   
        </div>
    )
}

export default CharacterCard