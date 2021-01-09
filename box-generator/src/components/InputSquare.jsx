import React, { useState } from 'react';


const InputSquare = (props) => {
    const { inputs, setInputs } = props;
    const [ color, setColor ] = useState("");
    const [ size, setSize ] = useState(200);

    const makeSquare = (e) => {
        e.preventDefault();
        const newSq = { color, size };
        console.log("New Square: ", newSq);
        setInputs({
            boxes: inputs.boxes.concat(newSq)
        });
    };

    return(
        <form onSubmit={ makeSquare }>
            <div>
                <label>Color: </label> 
                <input type="text" onChange={ (e) => setColor(e.target.value) } required/>
            </div>
            <div>
                <label>Size: </label> 
                <input type="number" onChange={ (e) => setSize(e.target.value) } />
            </div>
            <input type="submit" value="Make Square" />
        </form>
    );
};

export default InputSquare;