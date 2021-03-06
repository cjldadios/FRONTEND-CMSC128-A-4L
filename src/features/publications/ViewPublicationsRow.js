import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css';
import {Modal} from 'semantic-ui-react'
import DeleteModal from './ViewPublications/DeleteModal';

export default class ViewPublicationsRow extends Component{
	render(){
		return(
			<tr>
                  <td class = "center aligned">{this.props.completeTitle}</td>
                  <td class = "center aligned">{this.props.researchSubtype}</td>
                  <td class = "center aligned">{this.props.Role}</td>
                  <td class = "center aligned">{this.props.Coworkers}</td>
                  <td class = "center aligned">{this.props.Funding}</td>
                  <td class = "center aligned">{this.props.StartDate}</td>
                  <td class = "center aligned">{this.props.EndDate}</td>
                  <td class = "center aligned">{this.props.ApprovedCreditUnits}</td>
                  <td class = "center aligned">{this.props.TotalWorkLoadUnits}</td>
                  <td class="center aligned">
                  <DeleteModal {...this.props}
                          completeTitle= {this.props.completeTitle}
                          researchSubtype ={this.props.researchSubtype}
                          Role= {this.props.Role}
                          Coworkers={this.props.Coworkers}
                          Funding={this.props.Funding}
                          StartDate={this.props.StartDate}
                          EndDate= {this.props.EndDate}
                          ApprovedCreditUnits= {this.props.ApprovedCreditUnits}
                          TotalWorkLoadUnits= {this.props.TotalWorkLoadUnits}/>
                  </td>
			</tr>
		)
	}
}
