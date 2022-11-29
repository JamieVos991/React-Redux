import './Activity.css';

const Activity = ({activity}) => {
    return (
        <li className="trellie__activity">
            <h3 className="activity__label">{activity.label || "----"}</h3>
            <p className="activity__description">{activity.description}</p>
        </li>
    );
}

export default Activity;