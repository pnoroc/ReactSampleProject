import React, {Component} from "react";
import * as UsersAction from "../../actions/UsersAction";


export default class User extends Component {

	constructor(props){
		super();
		this.state = props
	}

	removeUser(e){

		const {id} = this.state;

		UsersAction.removeUser(id);
	}


	render(){

		const { id,name,email,group } = this.state;

		return (

				<tr>
					<td>{id}</td>
					<td>{name}</td>
					<td>{group}</td>
					<td>
						<a class="pointer">
							<span 
								class="glyphicon glyphicon-remove pointer"
								onClick={this.removeUser.bind(this)}></span>
						</a>
					</td>

				</tr>
		)

	}


}