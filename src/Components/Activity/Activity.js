import { useState } from 'react';
import './Activity.css';

const Activity = ({activity}) => {

    const [label, setLabel] = useState("Vandaag");
    const [labelClassname, setLabelClassname] = useState("activity__label")

    const onColorChange = () => {
        if (label === "Vandaag") {
            setLabel("Morgen");
            setLabelClassname("activity__label--morgen");
        }

        if (label === "Morgen") {
            setLabel("Overmorgen");
            setLabelClassname("activity__label--overmorgen");
     
        }

        if (label === "Overmorgen") {
            setLabel("Vandaag");
            setLabelClassname("activity__label");
        }
    }

    return (
        <li className="trellie__activity">
            <h3 onClick={onColorChange} className={labelClassname}>{label || "----"}</h3>
            <p className="activity__description">{activity.description}</p>
        </li>
    );
}

export default Activity;