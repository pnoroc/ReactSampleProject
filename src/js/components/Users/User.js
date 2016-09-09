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

	assignUserToGroup(e){

		const {id} = this.state;
		UsersAction.assignUserToGroup(id);
	}


	render(){

		const { id,name,email } = this.state;

		const group = this.state.assigned ? this.state.group : 
												<button class="btn btn-info btn-xs"
												onClick={this.assignUserToGroup.bind(this)}
												rel={id}>
													assign
												</button>


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