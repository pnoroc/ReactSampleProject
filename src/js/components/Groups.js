import React, {Component} from "react";

import _ from "lodash";
import Group from "./Groups/Group";
import UserStore from "../stores/UserStore";

export default class Groups extends Component {

	constructor(){
		super();

		this.getGroups = this.getGroups.bind(this);
		this.getAssignedUsers = this.getAssignedUsers.bind(this);

		this.state = {
			assigned_users: this.getAssignedUsers(),
			groups: this.getGroups()
		}
	}

	componentWillMount() {
		UserStore.on("change", this.reloadGroups.bind(this));
	}

	componentWillUnmount() {
		UserStore.removeListener("change", this.getGroups);
	}

	getAssignedUsers(){
		return _.filter(UserStore.getAll(), user => user.assigned);
	}

	getGroups(){

		return _.groupBy(this.getAssignedUsers(), "group");
	}

	reloadGroups(){
		this.setState({
			assigned_users: this.getAssignedUsers(),
			groups: this.getGroups()
		})
	}

	render(){


		const { groups, assigned_users } = this.state;
		let arr = [];

		_.mapKeys(groups,(members, group_name) => {

			arr.push({
				group_name,
				members
			})
		});

		let GroupComponents = arr.map((group) => {

			const id = _.random(1, 999);
			return <Group key={id}
					groupName={group.group_name}
					members={group.members}/>
		})

		if (GroupComponents.length === 0) {
			GroupComponents = "No groups created"
		}


		return (
			<div class="panel panel-primary">
				<div class="panel-heading"><b>Groups</b></div>
				<div class="panel-body">
					{GroupComponents}
				</div>
			</div>
		)

	}
}