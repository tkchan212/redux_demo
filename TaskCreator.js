import React, {Component} from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
      tasks: state.tasks
    }
}
class TaskCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            name: ""
        }
    }

    inputChange = (e) => {
        let id = e.currentTarget.id;
        let value = e.currentTarget.value;
        if (id == "time"){
            value = parseInt(value);
        }
        let clone_state = JSON.parse(JSON.stringify(this.state));
        clone_state[id] = value;
        this.setState(clone_state);
    }
    startTimer = ( ) => {
        this.clockLoop = setInterval(() => this.tick(), 1000);
    };
    stopTimer = ( ) => {
        clearInterval(this.clockLoop);
        let payload = this.state;
        this.props.dispatch(
            {...payload,
            type: "add_object"
        });
    };
    tick = () => {
        let now = this.state.time +1;
        this.setState({
            ...this.state,
            time: now
        })
    }

    render() {
        return (
            <div>
            <label>
                Task name
                <input value={this.state.name} id="name" type="text" onChange={this.inputChange}/>
            </label>
            <label>
                Time elapsed
                <input value={this.state.time} id="time" type="number" onChange={this.inputChange}/>
            </label>
            <button type="button" id="start" onClick={this.startTimer}>START</button>
            <button type="button" id="stop" onClick={this.stopTimer}>STOP</button>
        </div>
        )
    }

}
export default connect(mapStateToProps)(TaskCreator);
