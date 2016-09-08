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
      },
      {
        id: _.random(1,999),
        name: "Bruce Wayne",
        email: "bat@gotham.com",
        group: "Movies",
      },
    ];
  }

  createUser(text) {
    const id = Date.now();

    this.users.push({
      id,
      text,
      complete: false,
    });

    this.emit("change");
  }

  getAll() {
    return this.users;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_USER": {
        this.createUser(action.text);
        break;
      }
      case "RECEIVE_USERS": {
        this.users = action.users;
        this.emit("change");
        break;
      }
    }
  }

}

const userStore = new UserStore;
dispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;