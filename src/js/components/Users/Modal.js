import React, {Component} from "react";

export default class Modal extends Component {

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
    console.log("accepted");
    this.modalToggle();
  }

  render () {

    const coverClass = this.state.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover'
    const containerClass = this.state.modalOpened ? 'modal-container modal-container-active' : 'modal-container'
    return (
      <div>
        <button class='btn btn-info btn-xs' onClick={this.modalToggle}>assign</button>
        
        <div class={containerClass}>

          <div class='modal-body'>
            
            <select>
              <option value=""></option>
            </select>
           
          </div>
        </div>
        
        <div class={coverClass} onClick={this.modalToggle}></div>
      </div>
    )
  }
}