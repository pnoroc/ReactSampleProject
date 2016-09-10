import React, {Component} from "react";

import _ from "lodash";

export default class AssignUserModal extends Component {

  constructor (props) {
    super(props)

    this.state = {
      modalOpened: false
    }
    
    this.submitChanges = this.submitChanges.bind(this)
    this.modalToggle = this.modalToggle.bind(this)
  }
  
  modalToggle () {
    this.setState({ modalOpened: !this.state.modalOpened })
  }

  handleAccept(){
    this.modalToggle();
  }

  componentWillMount() {

  }

  submitChanges(){
    this.props.onSaveChanges()
  }


  render () {

    const coverClass = this.state.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover'
    const containerClass = this.state.modalOpened ? 'modal-container modal-container-active' : 'modal-container'
    const {groups} = this.props;
    let arr = [];

    _.mapKeys(groups,(members, group_name) => {

      arr.push({
        group_name,
        members
      })
    });


    const GroupComponents = arr.map((group) => {
      const id = _.random(1,9999);
      return <li key={id}>{group.group_name}</li>
    })


    return (
      <div>    
        <div class={containerClass}>
          <div class='modal-body'>
          <h5>Chose the group to assign selected users.</h5>
              {GroupComponents}
             
          <button 
            onClick={this.submitChanges}
            class="btn btn-sm btn-primary">
            Save
          </button>
          </div>
        </div>
        
        <div class={coverClass} onClick={this.modalToggle}></div>
      </div>
    )
  }
}