import React, {Component} from "react";
import * as UsersAction from "../../actions/UsersAction";

export default class UserFrom extends Component{

	constructor(){
		super();

		this.state = {inputVal: ""};
	}

	onInput(e){
		this.setState({inputVal: e.target.value})
	}

	handleSubmitForm(e){
		e.preventDefault();

		const refs = this.refs;
		const data = {
			name: this.state.inputVal,
		}

		this.setState({inputVal: ""})
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
								value={this.state.inputVal}
								onChange={this.onInput.bind(this)}
							    class="form-control"
							    ref="name"
							/>
						</div>
					</div>
					<div class="col-sm-4">
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