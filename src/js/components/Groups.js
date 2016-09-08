import React, {Component} from "react";

export default class Users extends Component {

	render(){

		return (
			<div class="panel panel-primary">
				<div class="panel-heading"><b>User List</b></div>
				<div class="panel-body">
					<button class="btn btn-success">
						Add <span class="glyphicon glyphicon-plus"></span>
					</button>
					<table class="table table-striped table-responsive">
					</table>
				</div>
			</div>
		)

	}
}