import React, {Component} from "react";

import _ from "lodash";
import UsersAction from "../../actions/UsersAction";
import UserStore from "../../stores/UserStore";
import GroupStore from "../../stores/GroupStore";

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
    this.setState(this.props)
    UserStore.on("successful_assigned", this.modalToggle.bind(this));
    UserStore.on("change", this.reloadGroups.bind(this));
  }

  reloadGroups(){
    this.setState({groups: GroupStore.getGroups()})
  }

  submitChanges(){

    const groupName = this.refs.selectGroup.selectedOptions[0].value;

    this.props.onSaveChanges(groupName)
  }

  addNewGroup(){

    const value = this.refs.groupName.value;

    this.setState({
      groups: this.state.groups.concat({group_name: value}),
      optionSelected: value,
      inputVal: ""
    })
  }

  onOptionSelected(e){
    this.setState({
      optionSelected: this.refs.selectGroup.selectedOptions[0].value
    })
  }

  handleNewGroupInput(e){
    this.setState({inputVal: e.target.value});
  }

  render () {

    const coverClass = this.state.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover'
    const containerClass = this.state.modalOpened ? 'modal-container modal-container-active' : 'modal-container'
    const {groups} = this.state;

    const GroupComponents = groups.map((group) => {
      const id = _.random(1,9999);
      return <option key={id} value={group.group_name}>{group.group_name}</option>
    })

    return (
      <div>    
        <div class={containerClass}>
          <div class='modal-body'>
          <h5>Chose the group to assign selected users create new group.</h5>
          <br/>

          <div class="row">
            <div class="col-xs-6">
                <label>
                  Chose a group
                </label>

            </div>
            <div class="col-xs-6">
                <label>
                  Create new group
                </label>
            </div>
          </div>


          <div class="row">
            <div class="col-xs-6">

                <div class="input-group">
                  <select 
                    class="form-control group-select"
                    value={this.state.optionSelected}
                    onChange={this.onOptionSelected.bind(this)}
                    ref="selectGroup">
                    {GroupComponents}
                  </select>
                </div>
            </div>
            <div class="col-xs-6">
              <div class="input-group">
                  <input
                      type="text"
                      placeholder="Group Name"
                      class="form-control"
                      value={this.state.inputVal}
                      onChange={this.handleNewGroupInput.bind(this)}
                      ref="groupName"/>
                  <span class="input-group-btn">
                    <button class="btn btn-info"
                    type="button"
                    onClick={this.addNewGroup.bind(this)}>Go!</button>
                  </span>
                </div>
            </div>
          </div>

            <br/>

          <button 
            onClick={this.submitChanges}
            class="btn btn-primary">
            Save
          </button>
          </div>
        </div>
        
        <div class={coverClass} onClick={this.modalToggle}></div>
      </div>
    )
  }
}