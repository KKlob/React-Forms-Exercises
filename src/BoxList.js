import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';

const BoxList = () => {
    const [styles, setStyles] = useState([]);

    function removeBox(data) {
        setStyles(styles.filter(item => item !== data));
    }

    function addBox(data) {
        let newBox = {
            backgroundColor: data.backgroundColor,
            width: Number(data.width),
            height: Number(data.height),
            id: uuid()
        };
        setStyles(styles => [...styles, newBox]);
    }

    // Handles rendering all boxes in state + renders NewBoxForm at top

    return (
        <div>
            <h3>Color Box Maker</h3>
            <NewBoxForm addBox={addBox} />
            <p>------------------Boxes Render Under Here----------------------</p>
            {styles.map(style => <Box style={style} key={style.id} removeBox={removeBox} />)}
        </div >
    )
}

export default BoxList;