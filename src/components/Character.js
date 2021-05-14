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
        //When Clicking the div opens up the details and clicking it again closes it.
        <StyledInfoHolder className='Character' onClick={() => detailName !== info.name ? setDetailName(info.name): setDetailName(null)} >
            <p>Name: {info.name}</p>
            {
             detailName === info.name && <Details info={info} />
            }
            <p>Birth Year: {info.birth_year}</p>
        </StyledInfoHolder>
    )
}
