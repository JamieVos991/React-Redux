import { connect } from "react-redux";
import "./Input.css";
import React from "react";

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = { inputValue: "" }
    }

    onActivityAdded = (event) => {
        event.preventDefault();
        let oldState = [...this.props.trelliesFromRedux];
        let newState = {
            description: this.state.inputValue,
            id: oldState[this.props.id - 1].activities.length + 1
        }
        oldState[this.props.id - 1].activities.push(newState);
        this.props.setTrelliesFromRedux(oldState);
    }

    onInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.onActivityAdded} className="input">
                <label htmlFor="input" className="input__label"></label>
                <input onChange={this.onInputChange} id="input" className="input__input" type="text" placeholder="Type hier je userstory.." value={this.state.inputValue}></input>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        trelliesFromRedux: state.trellies,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTrelliesFromRedux: (payload) => {dispatch({type: "TRELLIES", payload: payload})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);