import React, {Component} from "react";
import * as UsersAction from "../../actions/UsersAction";

export default class UserFrom extends Component{

	constructor(){
		super();

		this.state = {inputVal: "", emailVal: ""};
	}

	onInput(e){
		const { name, email } = this.refs;
		this.setState({
			inputVal: name.value,
			emailVal: email.value
		})
	}

	handleSubmitForm(e){
		e.preventDefault();

		const data = {
			name: this.state.inputVal,
			email: this.state.emailVal
		}

		this.setState({inputVal: "", emailVal: ""})
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
						<div class="input-group">
							<label>
								Email
							</label>
							<input
								type="text"
								value={this.state.emailVal}
								onChange={this.onInput.bind(this)}
							    class="form-control"
							    ref="email"
							/>
						</div>
					</div>
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