import React, {Component} from "react";

import _ from "lodash";
import MemberInfo from "./MemberInfo";

export default class Group extends Component{

	constructor(props){
		super();
		this.state = props
	}

	componentWillMount(){
		this.setState({
			ariaExpanded: false,
			panelClass: "panel-collapse collapse",
			itemClass: "groups-item-text collapsed"
		})
	}

	onPanelChange(e){
		console.log(e)
	}

	onItemChange(e){
		console.log(e)
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
			        <a class={this.state.itemClass} role="button" data-toggle="collapse"
			    		onChange={this.onItemChange.bind(this)}
			        	data-parent="#accordion" href={referrence}
			        	aria-expanded={this.state.ariaExpanded} aria-controls="collapseOne">
			          {groupName}
			        </a>
			      </h4>
			    </div>
			    <div id={groupName} class={this.state.panelClass} 
			    	onChange={this.onPanelChange.bind(this)}
			    	aria-expanded={this.state.ariaExpanded} 
			    	role="tabpanel" 
			    	aria-labelledby="headingOne">
			      <div class="panel-body">
			      	<table class="table table-striped table-resonsive">
			      		<tbody>
			      			{MembersComponent}
			      		</tbody>
			      	</table>
			      </div>
			    </div>
		    </div>
		)
	}

}