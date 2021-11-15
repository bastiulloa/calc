import React from "react";

function RenderScreen(props) {

    const arr = [];
    arr.push(props.value);

    console.log(arr);

    return(
        
        <div className="screen-area"> {arr} </div>
    )
}

export default RenderScreen;