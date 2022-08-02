import React, { useState } from 'react';

const NewBoxForm = ({ addBox }) => {

    const INITIAL_STATE = {
        backgroundColor: "",
        width: 10,
        height: 10
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData);
        setFormData({ backgroundColor: "", width: formData.width, height: formData.height });
    }

    return (
        <form onSubmit={handleSubmit} key="NewBoxForm">
            <div>
                <label htmlFor="bg-color">Background Color</label>
                <input
                    id="bg-color"
                    name="backgroundColor"
                    type="text"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="width">Width</label>
                <input
                    id="width"
                    name="width"
                    type="range"
                    min={10}
                    max={300}
                    value={formData.width}
                    onChange={handleChange}
                />
                {formData.width}
            </div>
            <div>
                <label htmlFor="height">Height</label>
                <input
                    id="height"
                    name="height"
                    type="range"
                    min={10}
                    max={300}
                    value={formData.height}
                    onChange={handleChange}
                />
                {formData.height}
            </div>
            <button type="submit">Add Box</button>
        </form>
    )
}

export default NewBoxForm;