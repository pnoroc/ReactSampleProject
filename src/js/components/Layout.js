import React from "react";

import Users from "./Users";

export default class Layout extends React.Component {

	render(){
		return (

			<div>
				<h2>User Table</h2>
				<Users />
			</div>
		)
	}

}