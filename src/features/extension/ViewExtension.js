import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ViewTeachingLoadRow from './TeachingLoadViewRow';

//Dummy data
const dummySample = {
  seccode: 'CMSC 128',
  room: 'CAS B04',
  days: 'T-Th',
  time: '4pm-7pm',
  hours: '3',
  studnum: '49',
  creditwo: '3',
  studcred: '3',
  creditw: ' 3'
};

const dummySample2 = {
  seccode: 'CMSC 127',
  room: 'CAS B04',
  days: 'T-Th',
  time: '4pm-7pm',
  hours: '3',
  studnum: '49',
  creditwo: '3',
  studcred: '3',
  creditw: ' 3'
};

const dummySample3 = {
  seccode: 'CMSC 129',
  room: 'CAS B04',
  days: 'T-Th',
  time: '4pm-7pm',
  hours: '3',
  studnum: '49',
  creditwo: '3',
  studcred: '3',
  creditw: ' 3'
};

export default class ViewTeachingLoad extends Component {
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
              TEACHING LOAD
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
                <th class="center aligned"> Section Code </th>
                <th class="center aligned"> Room </th>
                <th class="center aligned"> Days </th>
                <th class="center aligned"> Time </th>
                <th class="center aligned"> Hours Per Week </th>
                <th class="center aligned"> No. Of Students </th>
                <th class="center aligned"> Course Credit </th>
                <th class="center aligned"> Student Credit Units </th>
                <th class="center aligned">
                  {' '}
                  Teaching load credits with Multiplier{' '}
                </th>
                <th class="center aligned"> Edit/Delete </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(item => {
                return (
                  <ViewTeachingLoadRow
                    subj={item.subj}
                    seccode={item.seccode}
                    room={item.room}
                    days={item.days}
                    time={item.time}
                    hours={item.hours}
                    studnum={item.studnum}
                    creditwo={item.creditwo}
                    studcred={item.studcred}
                    creditw={item.creditw}
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
ReactDOM.render(<ViewTeachingLoad />, document.getElementById('root'));
