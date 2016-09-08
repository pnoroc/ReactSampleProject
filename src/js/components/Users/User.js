import React, {Component} from "react";

export default class User extends Component {

	constructor(props){
		super();
		this.state = props
	}


	render(){

		const { id,name,email,group } = this.state;

		return (

				<tr>
					<td>{id}</td>
					<td>{name}</td>
					<td>{email}</td>
					<td>{group}</td>
				</tr>
		)

	}


}