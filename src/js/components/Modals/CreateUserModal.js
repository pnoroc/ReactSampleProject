import React, {Component} from "react";

import UserFrom from "../Users/UserForm";
import UserStore from "../../stores/UserStore";

export default class CreateUserModal extends Component {

  constructor (props) {
    super(props)

    this.state = {
      modalOpened: false
    }
    
    this.modalToggle = this.modalToggle.bind(this)
  }
  
  modalToggle () {
    this.setState({ modalOpened: !this.state.modalOpened })
  }

  handleAccept(){
    this.modalToggle();
  }

  componentWillMount() {
    UserStore.on("user_created", () => {
      this.setState({
        modalOpened: false
      })
    });
  }


  render () {

    const coverClass = this.state.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover'
    const containerClass = this.state.modalOpened ? 'modal-container modal-container-active' : 'modal-container'
    return (
      <div>
        <button class='btn btn-success user-menu-btn btn-xs' onClick={this.modalToggle}>
        <b>Create User</b> <span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
        
        <div class={containerClass}>



          <div class='modal-body'>
          <h4>Create New User</h4>
              
            <UserFrom />
              
          </div>
        </div>
        
        <div class={coverClass} onClick={this.modalToggle}></div>
      </div>
    )
  }
}