import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import GenerateFSR from './ViewTeachingload/GenerateFSR';
import SendtoAdmin from './ViewTeachingload/SendtoAdmin';

export default class EditTeachingLoad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subj: '',
      seccode: '',
      room: '',
      days: '',
      time: '',
      hours: '',
      studnum: '',
      creditwo: '',
      studcred: '',
      creditw: ''
    };

    this.handleChangeSubj = this.handleChangeSubj.bind(this);
    this.handleChangeSeccode = this.handleChangeSeccode.bind(this);
    this.handleChangeRoom = this.handleChangeRoom.bind(this);
    this.handleChangeDays = this.handleChangeDays.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeHours = this.handleChangeHours.bind(this);
    this.handleChangeStudnum = this.handleChangeStudnum.bind(this);
    this.handleChangeCreditwo = this.handleChangeCreditwo.bind(this);
    this.handleChangeStudcred = this.handleChangeStudcred.bind(this);
    this.handleChangeCreditwith = this.handleChangeCreditwith.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.startEdit = this.startEdit.bind(this);
  }

  handleChangeSubj(e) {
    this.setState({ subj: e.target.value });
  }

  handleChangeSeccode(e) {
    this.setState({ seccode: e.target.value });
  }

  handleChangeRoom(e) {
    this.setState({ room: e.target.value });
  }

  handleChangeDays(e) {
    this.setState({ days: e.target.value });
  }

  handleChangeTime(e) {
    this.setState({ time: e.target.value });
  }

  handleChangeHours(e) {
    this.setState({ hours: e.target.value });
  }

  handleChangeStudnum(e) {
    this.setState({ studnum: e.target.value });
  }

  handleChangeCreditwo(e) {
    this.setState({ creditwo: e.target.value });
  }

  handleChangeStudcred(e) {
    this.setState({ studcred: e.target.value });
  }

  handleChangeCreditwith(e) {
    this.setState({ creditw: e.target.value });
  }

  handleLogout(e) {
    e.preventDefault();
    Api.logout();
    this.props.history.push('../..');
  }

  startEdit(e) {
    // e.preventDefault();
    // Api.addteachingload({
    //   subj: this.state.subj,
    //   seccode: this.state.seccode,
    //   room: this.state.room,
    //   days: this.state.days,
    //   time: this.state.time,
    //   hours: this.state.hours,
    //   studnum: this.state.studnum,
    //   creditwo: this.state.creditwo,
    //   studcred: this.state.studcred,
    //   creditw: this.state.creditw
    // })
    //   .then(result => {
    //     this.props.history.push('./teachingload/view');  //change to profile later!!
    //     alert('Teaching load successfully added!');
    //   })
    //   .catch(e => alert('Error adding new Teaching Load!'));
  }

  render() {
    return (
      <div className="App-header">
        <NavBar {...this.props}/>
        <div
          class="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">
              Edit Teaching Load
              <GenerateFSR/>
              <SendtoAdmin/>
            </h2>
          </div>
          <Divider hidden="true" />
          <Divider hidden="true" />
          <Divider hidden="true" />
          <p>
            <a class="ui small header"> Subject </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '540px' }}
                value={this.state.subj}
                onChange={this.handleChangeSubj}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> Section Code </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '497px' }}
                value={this.state.seccode}
                onChange={this.handleChangeSeccode}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Room </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '552px' }}
                value={this.state.room}
                onChange={this.handleChangeRoom}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Days </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '560px' }}
                value={this.state.days}
                onChange={this.handleChangeDays}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Time </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '560px' }}
                value={this.state.time}
                onChange={this.handleChangeTime}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Hours per Week </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '473px' }}
                value={this.state.hours}
                onChange={this.handleChangeHours}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">No. of Students </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '480px' }}
                value={this.state.studnum}
                onChange={this.handleChangeStudnum}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Course Credit w/o Multiplier </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '378px' }}
                value={this.state.creditwo}
                onChange={this.handleChangeCreditwo}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Student Credit Units </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '440px' }}
                value={this.state.studcred}
                onChange={this.handleChangeStudcred}
              />
            </div>
          </p>
          <p>
            <a class="ui small header">Teaching Load Credits w/ Multiplier </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '325px' }}
                value={this.state.creditw}
                onChange={this.handleChangeCreditwith}
              />
            </div>
          </p>
          <div class="ui center aligned container">
            <button
              class="ui center aligned blue button"
              onClick={this.startEdit}>
              Save changes
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
//=========================
ReactDOM.render(<EditTeachingLoad />, document.getElementById('root'));
