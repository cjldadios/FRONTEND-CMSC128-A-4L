import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';

export default class DeleteModal extends Component {
    constructor(props) {
    super(props);
    this.state = {};
    this.startEdit = this.startEdit.bind(this);
  }

  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  startEdit(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: '../publications/edit',
      state:
        {
        completeTitle:this.props.completeTitle,
        researchSubtype:this.props.researchSubtype,
        Role: this.props.Role,
        Coworkers:this.props.Coworkers,
        Funding:this.props.Funding,
        StartDate:this.props.StartDate,
        EndDate:this.props.EndDate,
        ApprovedCreditUnits:this.props.ApprovedCreditUnits,
        TotalWorkLoadUnits:this.props.TotalWorkLoadUnits}
      });
  }

  render() {
    const { open, size } = this.state

    return (
      <div>
        <button class="ui left attached compact icon button" onClick={this.startEdit}>
          <i class="edit icon"> </i>
        </button>
          
        <button class = "ui right attached compact icon button" onClick={this.show('mini')}>
        <i class="trash alternate icon" />
        </button>
        <Modal size={size} open={open} onClose={this.close} style={{marginTop: 300, marginLeft: 650}} >
          <Modal.Header>
            Delete Teaching Load
          </Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete this publication?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.close}>
              No
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content='Yes' />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

//=========================
ReactDOM.render(<DeleteModal />, document.getElementById('root'));
