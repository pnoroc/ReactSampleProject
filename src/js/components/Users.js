import React, {Component} from "react";

import _ from "lodash";
import User from "./Users/User";
import * as UsersAction from "../actions/UsersAction";
import UserStore from "../stores/UserStore";
import CreateUserModal from "./Users/CreateUserModal";

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

	removeUsers(){
		const checkedUsers = this.getCheckedUsers();

		if(checkedUsers.length > 0){
			const ids = checkedUsers.map((user) => user.id)
			UsersAction.removeUsers(ids);
		}
	}

	handleItemChecked(user_id, val){

		this.setState((previousState, currentProps) => {

			_.each(previousState.users, (user) =>{
				if(user.id === user_id){
					user.checked = val
				}

			})

			return previousState;
		})
	}

	getCheckedUsers(){
		return _.filter(this.state.users, (user) => user.checked)
	}

	render(){

		const {users} = this.state;

		const UserComponents = users.map((user) => {
			user.onChange = this.handleItemChecked.bind(this);
			return <User
					key={user.id}
					{...user}
					ref="userItem"/>
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
								<div class="dropdown">
								  <button class="btn btn-info user-menu-btn dropdown-toggle btn-xs" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
								    <b>Actions  </b>
								    <span class="caret"></span>
								  </button>
								  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
								    <li><a>Assign Group</a></li>
								    <li><a onClick={this.removeUsers.bind(this)}>Remove</a></li>
								  </ul>
								</div>
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