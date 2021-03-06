import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar'
import GenerateFSR from './../publications/ViewPublications/GenerateFSR'
import SendtoAdmin from './../publications/ViewPublications/SendtoAdmin'

export default class AddAdministrativeWork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positionOfWork : '',
      officeUnit : '',
      approvedCreditUnits : '',
      totalAdminLoadCredits : ''
    };

    this.handlePositionOfWork = this.handlePositionOfWork.bind(this);
    this.handleOfficeUnit = this.handleOfficeUnit.bind(this);
    this.handleApprovedCreditUnits = this.handleApprovedCreditUnits.bind(this);
    this.handleTotalAdminCredits = this.handleTotalAdminCredits.bind(this);

    this.startAdd = this.startAdd.bind(this);
  }

  handlePositionOfWork(e){
    this.setState({positionOfWork : e.target.value});
  }

  handleOfficeUnit(e){
    this.setState({officeUnit : e.target.value});
  }

  handleApprovedCreditUnits(e){
    this.setState({approvedCreditUnits : e.target.value});
  }

  handleTotalAdminCredits(e){
    this.setState({totalAdminLoadCredits : e.target.value});
  }

  startAdd(e) {
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
    //     this.props.history.push('./publications/view');  //change to profile later!!
    //     alert('Publication successfully added!');
    //   })
    //   .catch(e => alert('Error adding new Publication!'));
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
              Administrative Work
              <GenerateFSR/>
              <SendtoAdmin/>
            </h2>
          </div>
          <Divider hidden="true" />
          <p>
            <a class="ui small header"> Position/Nature of Adminstrative Work </a>
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '432px' }}
                onChange={this.handlePositionOfWork}
              />
            </div>
          </p>

          <p>
            <a class="ui small header"> Office Unit </a> {/* Can change to dropdown? */}
            <div class="ui input mini focus">
              <input
                type="text"
                style={{ width: '432px' }}
                onChange={this.handleOfficeUnit}
              />
            </div>
          </p>

           <p>
            <a class="ui small header"> Approved Credit Units </a> {/* Can change to number? */}
            <div class="ui input mini focus">
              <input
                type="number"
                style={{ width: '100px' }}
                onChange={this.handleApprovedCreditUnits}
              />
            </div>
          </p>

           <p>
            <a class="ui small header"> Total Administrative Load Credits </a> {/* Can change to dropdown? */}
            <div class="ui input mini focus">
              <input
                type="number"
                style={{ width: '100px' }}
                onChange={this.handleTotalAdminCredits}
              />
            </div>
          </p>

          <div class="ui center aligned container">
            <button
              class="ui blue button"
              onClick={this.startAdd}>
              Add Publication
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}

//=========================
ReactDOM.render(<AddAdministrativeWork />, document.getElementById('root'));
