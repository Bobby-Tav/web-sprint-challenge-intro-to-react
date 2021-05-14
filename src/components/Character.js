// Write your Character component here
import React, {useState} from 'react';
import Details from './Details'
import styled from 'styled-components';


const StyledInfoHolder = styled.div`
display:flex;
justify-content:space-between;
align-items:flex-start;
width:60%;
margin:2% auto;
background-color: ${prop => prop.theme.mainColor};
font-size:2rem;
padding:0% 1%;


p{
    color:${prop => prop.theme.black};
    text-align: center;
}
`
const StyledClick = styled.p`
font-size:1rem;
padding:0;
align-self:flex-end;
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
            {detailName !== info.name && <StyledClick>--Click to see details---</StyledClick>}
            <p>Birth Year: {info.birth_year}</p>
        </StyledInfoHolder>
    )
}
