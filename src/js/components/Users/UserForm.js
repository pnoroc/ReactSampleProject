import React, {Component} from "react";
import * as UsersAction from "../../actions/UsersAction";

export default class UserFrom extends Component{

	constructor(){
		super();
	}

	handleSubmitForm(e){
		e.preventDefault();

		const refs = this.refs;
		const data = {
			name: refs.name.value,
			group: refs.group.value
		}

		UsersAction.createUser(data)
	}

	render(){
		return (
			<div class="panel panel-default">
				<div class="panel-body">
					<h3 class="">Add User</h3>
					<div class="form-group">
						<div class="input-group">
							<label>
								Name
							</label>
							<input
								type="text"
							    class="form-control"
							    ref="name"
							/>
						</div>

						<div class="input-group">
							<label>
								Group
							</label>
							<input
							    type="text"
							    class="form-control"
							    ref="group"
							/>
						</div>
						  
					</div>
		        	<button
		        		type="submit"
		        		class="btn btn-primary"
		        		onClick={this.handleSubmitForm.bind(this)}>
		            	Add 
		        	</button>

		      </div>
	      </div>
		)
	}

}