import React, {Component} from "react";

import _ from "lodash";
import MemberInfo from "./MemberInfo";

export default class Group extends Component{

	constructor(props){
		super();
		this.state = props
	}

	render(){

		const {groupName, members} = this.state;
		const referrence = "#" + groupName;
		const MembersComponent = members.map((user) => {

			const id = _.random(1,9999);
			return <MemberInfo key={id} {...user}/>
		})

		return (
			<div class="group-item-box">
			    <div class="panel-heading bg-info" role="tab" id="headingOne">
			      <h4 class="panel-title">
			        <a class="groups-item-text collapsed" role="button" data-toggle="collapse"
			        	data-parent="#accordion" href={referrence}
			        	aria-expanded="false" aria-controls="collapseOne">
			          {groupName}
			        </a>
			      </h4>
			    </div>
			    <div id={groupName} class="panel-collapse collapse" aria-expanded="false" role="tabpanel" aria-labelledby="headingOne">
			      <div class="panel-body">
			      	<ul>
			      		{MembersComponent}
			      	</ul>
			      </div>
			    </div>
		    </div>
		)
	}

}