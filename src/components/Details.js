import React, {useEffect} from 'react';




export default function Details({info}){

    return(
        <div>
            <p>Gender:{info.gender}</p>
            <p>Height:{info.height}</p>
            <p>Mass:{info.mass}</p>
            <p>Eye Color:{info.eye_color}</p>
            <p>Skin Color: {info.skin_color}</p>
        </div>
    );
}