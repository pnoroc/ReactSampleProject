import React from "react";

import Groups from "./Groups";
import Users from "./Users";
import UserForm from "./Users/UserForm";

export default class Layout extends React.Component {

	render(){
		return (

			<div>
				<UserForm />
				<Users />
				<Groups />
			</div>
		)
	}

}