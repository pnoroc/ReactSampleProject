import React, {Component} from "react";

export default class UsersMenu extends Component{

	render(){
		return (
			<div class="dropdown">
			  <button class="btn btn-info user-menu-btn dropdown-toggle btn-xs" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
			    <b>Actions  </b>
			    <span class="caret"></span>
			  </button>
			  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
			    <li><a>Assign Group</a></li>
			    <li><a>Remove</a></li>
			  </ul>
			</div>
		)
	}
}