import React, {Component} from "react";

import Group from "./Groups/Group";
import UserStore from "../stores/UserStore";

export default class Groups extends Component {

	render(){

		return (
			<div class="panel panel-primary">
				<div class="panel-heading"><b>Groups</b></div>
				<div class="panel-body">
					<Group />
				</div>
			</div>
		)

	}
}