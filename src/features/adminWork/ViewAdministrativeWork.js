import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import AdministrativeWorkRow from './ViewAdministrativeWork/AdministrativeWorkRow';

//Dummy data
const dummySample = {
  workPosition: 'Instructor 1',
  officeUnit: 'C-112',
  approvedCreditUnits: '6',
  totalAdministrativeLoadCredits: '0'
};

const dummySample2 = {
  workPosition: 'Assistant Professor 1',
  officeUnit: 'C-114',
  approvedCreditUnits: '6',
  totalAdministrativeLoadCredits: '1'
};

const dummySample3 = {
  workPosition: 'Instructor 2',
  officeUnit: 'C-112',
  approvedCreditUnits: '3',
  totalAdministrativeLoadCredits: '3'
};

export default class ViewAdministrativeWork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // data : []
      data: [dummySample, dummySample2, dummySample3] //dummmy data
    };
  }
  
  // componentDidMount(){
  //   e.preventDefault();
  //   Api.ViewTeachingLoad({
  //   })
  //     .then(result => {
  //       this.setState({ data: result});
  //     })
  //     .catch(e => alert('Error loading Publications!!'));
  // }

  render() {
    return (
      <div className="App-header">
        <div class="ui blue inverted fluid ten item menu">
          <a class="item" href="/profile/view">
            Profile
          </a>
          <a class="item active" href="/teachingload/view">
            Teaching Load
          </a>
          <a class="item" href="/publications/view">
            Publications
          </a>
          <a class="item" href="/adminwork/view">
            Administrative Work
          </a>
          <a class="item" href="/ecservice/view">
            Extension and Community Service
          </a>
          <a class="item" href="/studyload/view">
            Study Load
          </a>
          <a class="item" href="/lpp/view">
            Limited Practice of Profession
          </a>
          <a class="item" href="/Professorialchair/view">
            Professorial Chair
          </a>
          <a class="item" href="/consultation/view">
            Consultation Hours
          </a>
          <a class="item" href="../..">
            Logout
          </a>
        </div>

        <div class="ui piled very padded container segment" color="teal">
          <div>
            <h1 class="ui blue header">
              Admin Work
              <button class="ui right floated blue button">Generate FSR</button>
              <button class="ui right floated blue button">
                {' '}
                Send to Admin{' '}
              </button>
            </h1>
          </div>
          <Divider hidden="true" />

          <style>
            {' '}
            {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
          </style>
          <table class="ui celled table">
            <thead>
              <tr>
                <th class="center aligned"> Position/Nature of Administrative Work </th>
                <th class="center aligned"> Office Unit </th>
                <th class="center aligned"> Approved Credit Units </th>
                <th class="center aligned"> Total Administrative Load Credits </th>
                <th class="center aligned"> Edit/Delete </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(item => {
                return (
                  <AdministrativeWorkRow
                    workPosition={item.workPosition}
                    officeUnit={item.officeUnit}
                    approvedCreditUnits={item.approvedCreditUnits}
                    totalAdministrativeLoadCredits={item.totalAdministrativeLoadCredits}
                  />
                );
              })}
            </tbody>
          </table>
          <div>
            <h1 class="ui white header">
              <button class="ui right floated button">
                <a color="white" href="./add"> 
                  {' '}
                  Add to Teaching Load{' '}
                </a>
              </button>
            </h1>
          </div>
          <Divider hidden="true" />
        </div>
      </div>
    );
  }
}
//=========================
ReactDOM.render(<ViewAdministrativeWork />, document.getElementById('root'));
