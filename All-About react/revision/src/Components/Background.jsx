

import React, { useState } from 'react';
import './background.css';

export default function Background() {
    const [color, setColor] = useState("green");

    const handleChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <div style={{ background: color }} className='bgoter'>
            <select value={color} onChange={handleChange} className='color-dropdown'>
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="pink">Pink</option>
                <option value="brown">Brown</option>
                <option value="orange">Orange</option>
                <option value="black">Black</option>
                <option value="purple">Purple</option>
                <option value="white">White</option>
                
            </select>
            <input 
                type="color" 
                value={color} 
                onChange={handleChange} 
                className="color-picker"
                title="Pick a custom color"
            />
        </div>
    );
}
