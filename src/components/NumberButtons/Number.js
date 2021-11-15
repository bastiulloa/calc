import React from 'react';
import RenderScreen from '../Screen/RenderScreen';

function Number({num, onClick}) {
    
    return(
        <button className="number" onClick={onClick}>{num}</button>
    )
}

export default Number;