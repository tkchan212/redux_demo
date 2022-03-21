import React, {Component} from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
      tasks: state.tasks,
      totaltime: state.totaltime
    }
}

class TaskList extends React.Component {
    
    render() {
        const { tasks, totaltime } = this.props;
        return (
            <div>
                <p id="total">{totaltime}</p>
                <ul>
                    {
                        tasks.map((element) => {
                            if (element.type == "add_object"){
                                return(
                                    <li key={element.id} className="task">
                                        <span className="id">{element.id}   </span>
                                        <span className="name">{element.name}   </span>
                                        <span className="time">{element.time}</span>
                                    </li>
                                    )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }

}

export default connect(mapStateToProps)(TaskList);