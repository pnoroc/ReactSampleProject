import React, {Component} from "react";

import User from "./Users/User";
import * as UsersAction from "../actions/UsersAction";
import UserStore from "../stores/UserStore";
import CreateUserModal from "./Users/CreateUserModal";
import UsersMenu from "./Users/UsersMenu";

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
						<div class="row">

							<div class="col-sm-2">
								<CreateUserModal />
							</div>
							<div class="col-sm-2">
								<UsersMenu />
							</div>
							
							<div class="col-sm-8">
							</div>
						</div>
						<div class="user-table-box">
							<table class="table table-responsive table-boarded">
								<thead>
									<tr>
										<th></th>
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