// Write your Character component here
import React from 'react';
import Details from './Details'
import styled from 'styled-components';


const StyledInfoHolder = styled.div
`
display:flex;
justify-content:space-around;
width:60%;
margin:2% auto;
background-color: white;


`

export default function Character({info}) {
    return(
        <StyledInfoHolder className='Character'>
            {/* {console.log(info)} */}
            <p>Name: {info.name}</p>
            <p>Birth Year: {info.birth_year}</p>
            <Details info={info} />

        </StyledInfoHolder>
    )
}
