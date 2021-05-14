import React from 'react';
import styled from 'styled-components';

const StyledDetail = styled.div`
text-transform:capitalize;

h2{
    text-decoration:underline;
}

`


export default function Details({info}){

    return(
        <StyledDetail className='Detail'>
            <h2> Details </h2>
            <p>Gender: {info.gender}</p>
            <p>Height: {info.height}</p>
            <p>Mass: {info.mass}</p>
            <p>Eye Color: {info.eye_color}</p>
            <p>Skin Color: {info.skin_color}</p>
        </StyledDetail>
    );
}