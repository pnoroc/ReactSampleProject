import React, {Component} from "react";

export default class MemberInfo extends Component {

	constructor(props){
		super();
		this.state = props
	}


	render(){

		const { name } = this.state;

		return (

			<li>
				<span><b>{name}</b></span>
			</li>
		)

	}


}