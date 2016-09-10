import React, {Component} from "react";
import * as UsersAction from "../../actions/UsersAction";


export default class User extends Component {

	constructor(props){
		super();
		this.state = props
	}

	handleChange(e){
		const {id} = this.state
		this.state.onChange( id, e.target.checked )
	}

	render(){

		const { id,name,email,group } = this.props;

		const checked = this.props.checked ? true : false;
		const className = this.props.checked ? "info" : "active";

		return (

				<tr class={className}>
					<td class="check-column">
						<input
							type="checkbox"
							checked={checked}
							onChange={this.handleChange.bind(this)} />
					</td>
					<td>{name}</td>
					<td>{group}</td>

				</tr>
		)

	}


}