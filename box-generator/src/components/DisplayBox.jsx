import React, { useState } from 'react';


const DisplayBox = (props) => {
    const { boxes, setBoxes } = props;
    // const squares = boxes.map;
    console.log("test:");
    console.log(boxes);
    return(
        <div className="box">
            {
                boxes.boxes.map((box, i) => 
                    <div key={i} className="square" style={{ backgroundColor: box.color, height: box.size + "px", width: box.size + "px", margin: '5px' }}>
                    {box.size +  "px"}
                    </div>
                )
            }
        </div>
    )
}

export default DisplayBox;
