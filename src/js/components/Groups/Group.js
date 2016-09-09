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
		const MembersComponent = members.map((user) => {

			const id = _.random(1,9999);
			return <MemberInfo key={id} {...user}/>
		})

		return (
			<div>
				<section>
					{groupName}

					<ul>
						{MembersComponent}
					</ul>

				</section>
			</div>
		)
	}

}