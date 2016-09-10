import { EventEmitter } from "events";

import _ from "lodash";
import dispatcher from "../dispatcher";

class UserStore extends EventEmitter {
  constructor() {
    super()
    this.users = [
      {
        id: _.random(1,999),
        name: "Jason Borne",
        email: "bornid@movie.com",
        group: "Movies",
        assigned: true
      },
      {
        id: _.random(1,999),
        name: "Bruce Wayne",
        email: "bat@gotham.com",
        group: "Movies",
        assigned: true
      },
      {
        id: _.random(1,999),
        name: "N.Zakas",
        email: "nzak@oreilly.com",
        group: "",
        assigned: false
      }
    ];
  }

  createUser(data) {
    
    const id = _.random(1,999);
    const {name, group} = data;

    this.users.push({
      id,
      name,
      group,
      assigned: false,
    });

    this.emit("change");
    this.emit("user_created");
  }

  getAll() {
    return this.users;
  }

  assignUser(ids, group){

    ids.map((id) => {
      this.users.map((user) => {
        if(user.id === id){
          user.group = group
          user.assigned = true
        }
      })
    })
    this.emit("change")
    this.emit("successful_assigned")

  }

  removeUser(id){

    _.remove(this.users, user => user.id === id)
    this.emit("change")
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_USER": {
        this.createUser(action.data);
        break;
      }
      case "RECEIVE_USERS": {
        this.users = action.users;
        this.emit("change");
        break;
      }
      case "DELETE_USER": {
        this.removeUser(action.id);
        this.emit("change");
        break;
      }
      case "ASSIGN_USER_TO_GROUP": {
        this.assignUser(action.ids, action.group);
        this.emit("change");
        break;
      }
    }
  }

}

const userStore = new UserStore;
dispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;