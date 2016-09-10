import { EventEmitter } from "events";

import _ from "lodash";
import dispatcher from "../dispatcher";
import UserStore from "./UserStore";

class GroupStore extends EventEmitter {

	constructor(){
		super();
		
		this.getGroups = this.getGroups.bind(this);
		this.getAssignedUsers = this.getAssignedUsers.bind(this);
	}

	getGroups(){

		return _.groupBy(this.getAssignedUsers(), "group");
	}

	getAssignedUsers(){
		return _.filter(UserStore.getAll(), user => user.assigned);
	}

	getGroups(){

		return _.groupBy(this.getAssignedUsers(), "group");
	}


}

const groupStore = new GroupStore;

export default groupStore;