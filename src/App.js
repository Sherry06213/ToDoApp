import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminder } from './actions';
import moment from 'moment';

class App extends Component {
state = {
  text: '',
  dueDate: ''
}

addReminder(){
  this.props.addReminder(this.state.text, this.state.dueDate);
}

deleteReminder(id){
  this.props.deleteReminder(id);
}

showReminders(){
  const {reminders} = this.props;
  return (

    <ul className="list-group col-sm-4">
    {
      reminders.map(reminder => {
        return (
          <li key={reminder.id} className="list-group-item">
          <div>
          <div className="list-item">{reminder.text}</div>
          </div>
          
          <div className="list-item">{moment(new Date(reminder.dueDate)).fromNow()}</div>
          
          <div className="list-item delete-button" onClick={() => this.deleteReminder(reminder.id)}>
          &#x2715;
          </div>
          </li>
        )
      })
    }
    </ul>
  )
}

  render() {
    return (
      <div className="App">
      <div className="title">
      To Do App
      </div>
      <div className="form-inline">
      <div className="form-group">
      <input
      className="form-control"
      placeholder="I have to ..."
      onChange={event => this.setState({text: event.target.value})}
      />
      <input 
      className="form-control"
      type="datetime-local"
      onChange={event=> this.setState({dueDate: event.target.value})}
      />
      </div>
      
      <button 
      className="btn btn-success"
      onClick={() => this.addReminder()}>
      Add Reminder
      </button>
      </div>
      {this.showReminders()}
      <div 
      className="btn btn-danger"
      onClick={this.props.clearReminder}
      >
      Clear Reminders
      </div>
      </div>
    );
  }}

function mapStateToProps(state){
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminder })(App);
