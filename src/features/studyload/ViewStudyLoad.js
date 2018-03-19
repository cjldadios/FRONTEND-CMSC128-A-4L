import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ViewTeachingLoadRow from './ViewStudyLoadRow'

//Dummy data
const dummySample = {degree : 'MSCS', uni : 'UPLB', studyleave : 'No',
                      fellowship : 'Yes', courseno:  '3', ccred : '201', day : 'TTh', time : '3', school : ' ', slcred : ' 3'};

const dummySample2 = {degree : 'MSCS', uni : 'UPD', studyleave : 'Yes',
                      fellowship : 'No', courseno:  '3', ccred : '049', day : '3', time : 'MWF', school : ' ', slcred : ' 5'};

const dummySample3 = {degree : 'MSCS', uni : 'UPLB', studyleave : 'Yes',
                      fellowship : 'Yes', courseno:  '3', ccred : '352', day : '3', time : 'TTh', school : ' ', slcred : ' 3'};

export default class ViewStudyLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [dummySample,dummySample2,dummySample3]  //dummmy data
    };
  }

  render() {

    return (
      <div className="App-header">
        <div class="ui blue inverted fluid ten item menu">
          <a class="item" href="/profile/view">
            Profile
          </a>
          <a class="item" href="/teachingload/view">
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
          <a class="item active" href="/studyload/view">
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

        <div class = "ui piled very padded container segment" color = "teal">
          <div>
            <h1 class = "ui blue header">
              STUDY LOAD
              <button class="ui right floated blue button">Generate FSR</button>
              <button class="ui right floated blue button"> Send to Admin </button>
            </h1>
          </div>
          <Divider hidden="true" />

          <style> {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`} </style>
          <table class = "ui celled table">
            <thead>
              <tr>
                <th class = "center aligned"> Degree enrolled in </th>
                <th class = "center aligned"> University enrolled in </th>
                <th class = "center aligned"> On Full-Study Leave w/ pay? </th>
                <th class = "center aligned"> Recepient of Faculty Fellowship </th>
                <th class = "center aligned"> Course Number </th>
                <th class = "center aligned"> Course Credit </th>
                <th class = "center aligned"> Days </th>
                <th class = "center aligned"> Time </th>
                <th class = "center aligned"> School </th>
                <th class = "center aligned"> Study load credits </th>
                <th class = "center aligned"> Edit/Delete </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item) =>{
                return(
                    <ViewTeachingLoadRow degree = {item.degree} uni = {item.uni} studyleave = {item.studyleave} fellowship = {item.fellowship} courseno = {item.courseno} ccred = {item.ccred} day = {item.day} time = {item.time} school = {item.school} slcred = {item.slcred} />
                  )
                })
              }
            </tbody>
          </table>
          <div>
            <h1 class = "ui white header">
            <button class="ui right floated button">
               <a color = "white" href = "./add"> Add Study Load </a>
            </button>
            </h1>
          </div>
          <Divider hidden="true" />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<ViewStudyLoad />, document.getElementById('root'));