import React, {Component} from "react";

import User from "./Users/User";
import * as UsersAction from "../actions/UsersAction";
import UserStore from "../stores/UserStore";

export default class Users extends Component {

	constructor(){
		super();
		this.getUsers = this.getUsers.bind(this);
		this.state = {
			users: UserStore.getAll()
		}
	}

	getUsers(){
		this.setState({
			users: UserStore.getAll()
		})
	}


	render(){

		const {users} = this.state;
		const UserComponents = users.map((user) => {
			return <User key={user.id} {...user}/>
		});

		return (
			
			<div>
				<div class="panel panel-primary">
					<div class="panel-heading">
						<b>User List</b>
					</div>
					<div class="panel-body">
						<button class="btn btn-success">
							Add <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
						</button>

						<table class="table table-responsive table-boarded">
							<thead>
								<tr>
									<th>#Id</th>
									<th>Name</th>
									<th>Email</th>
									<th>Group</th>
								</tr>
							</thead>
							<tbody>
								{UserComponents}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}