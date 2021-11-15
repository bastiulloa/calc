import React from 'react';
import Operation from './Operation';

function RenderOpButtons(props) {
    return(
        <div className="operation-buttons-area">
            <Operation operation="*"/>
            <Operation operation="/"/>
            <Operation operation="+"/>
            <Operation operation="-"/>
            <Operation operation="="/>
        </div>
    )
}

export default RenderOpButtons;