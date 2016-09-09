import React, {Component} from "react";
import * as UsersAction from "../../actions/UsersAction";
import Modal from "./Modal";


export default class User extends Component {

	constructor(props){
		super();
		this.state = props
	}

	removeUser(e){

		const {id} = this.state;

		UsersAction.removeUser(id);
	}

	assignUserToGroup(e){

		const {id} = this.state;
		UsersAction.assignUserToGroup(id);
	}


	render(){

		const { id,name,email,group } = this.state;


		return (

				<tr>
					<td class="check-column">
						<input type="checkbox" ref="checkbox" />
					</td>
					<td>{name}</td>
					<td>{group}</td>

				</tr>
		)

	}


}