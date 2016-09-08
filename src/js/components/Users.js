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

	componentWillMount() {
		UserStore.on("change", this.getUsers);
	}

	componentWillUnmount() {
		UserStore.removeListener("change", this.getUsers);
	}

	reloadUsers(){
		UsersAction.reloadUsers();
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
						<div class="user-table-box">
							<table class="table table-responsive table-boarded">
								<thead>
									<tr>
										<th>#Id</th>
										<th>Name</th>
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
			</div>
		)
	}
}