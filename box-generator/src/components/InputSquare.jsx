import React, { useState } from 'react';


const InputSquare = (props) => {
    const { inputs, setInputs } = props;
    const [ color, setColor ] = useState("");
    const [ size, setSize ] = useState(200);

    const makeSquare = (e) => {
        e.preventDefault();
        const newSq = { color, size };
        console.log("New Square: ", newSq);
        console.log("target: ", e.target);
        setInputs({
            boxes: inputs.boxes.concat(newSq)
        });
        document.getElementById("form").reset();
    };

    return(
        <form id="form" onSubmit={ makeSquare }>
            <div>
                <label>Color: </label> 
                <input name="color" type="text" onChange={ (e) => setColor(e.target.value) } required/>
            </div>
            <div>
                <label>Size: </label> 
                <input name="size" type="number" onChange={ (e) => setSize(e.target.value) } />
            </div>
            <input type="submit" value="Make Square" />
        </form>
    );
};

export default InputSquare;