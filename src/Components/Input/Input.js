import { connect } from "react-redux";
import "./Input.css";

const Input = (props) => {

    const onInputSubmit = (event) => {
        event.preventDefault();
        if (props.inputValueFromRedux !== "") {
            props.onActivityAdded(props.inputValueFromRedux);
        }
    }

    const onInputChange = (event) => {
       props.setInputValueFromRedux();
    }

    return (
        <form onSubmit={onInputSubmit} className="input">
            <label htmlFor="input" className="input__label"></label>
            <input onChange={onInputChange} id="input" className="input__input" type="text" placeholder="Type hier je userstory.." value={props.inputValueFromRedux}></input>
        </form>
    );
}

const mapStatetoProps = (state) => {
    return {
        inputValueFromRedux: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setInputValueFromRedux: () => dispatch({type: "test"}),
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Input);