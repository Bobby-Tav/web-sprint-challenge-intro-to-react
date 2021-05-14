// Write your Character component here
import React, {useState} from 'react';
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
    const [detailName,setDetailName] = useState(null);
    
    return(
        <StyledInfoHolder className='Character' onClick={() => detailName !== info.name ? setDetailName(info.name): setDetailName(null)} >
            { console.log(info.name) }
            <p>Name: {info.name}</p>
            <p>Birth Year: {info.birth_year}</p>
            {
             detailName === info.name && <Details info={info} />
            }
        </StyledInfoHolder>
    )
}
