import { EventEmitter } from "events";

import _ from "lodash";
import dispatcher from "../dispatcher";
import UserStore from "./UserStore";

class GroupStore extends EventEmitter {

	constructor(){
		super();
		this.getGroups = this.getGroups.bind(this);

	}

	getGroups(){

		return _.groupBy(this.getAssignedUsers(), "group");
	}

}