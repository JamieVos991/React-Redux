import { useState } from 'react';
import './Activity.css';

const Activity = ({activity}) => {

    const onColorChange = () => {
        console.log("asdasasd");
    }

    return (
        <li className="trellie__activity">
            <h3 onClick={onColorChange} className="activity__label">{activity.label || "----"}</h3>
            <p className="activity__description">{activity.description}</p>
        </li>
    );
}

export default Activity;