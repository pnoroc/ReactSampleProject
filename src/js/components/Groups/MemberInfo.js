import React, {Component} from "react";

import * as UsersAction from "../../actions/UsersAction";

export default class MemberInfo extends Component {

	constructor(props){
		super();
		this.state = props
	}

	removeFromGroup(e){

		const confirm = window.confirm("Are you sure ???");

		if(confirm){
			
			const id = this.state.id;
			UsersAction.removeUserFromGroup(id);
		}

	}


	render(){

		const { name } = this.state;

		return (
			<tr>
				<td><b>{name}</b></td>
				<td>
					<a 
						class="pull-right pointer-cursor"
						onClick={this.removeFromGroup.bind(this)}
					>
						<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
					</a>
				</td>
			</tr>
		)

	}


}