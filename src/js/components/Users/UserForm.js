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
			<div>
				<div class="row">
					<div class="col-sm-4">
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
					</div>
					<div class="col-sm-4">
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
					<div class="col-sm-4"></div>
				</div>
	        	<button
	        		type="button"
	        		class="btn btn-primary margin-top"
	        		onClick={this.handleSubmitForm.bind(this)}>
	            	Add 
	        	</button>
	      </div>
		)
	}

}