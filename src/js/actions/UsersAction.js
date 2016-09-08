import dispatcher from "../dispatcher";

export function reloadUsers() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({type: "FETCH_USERS"});
  setTimeout(() => {
    console.log("got users")
    dispatcher.dispatch({type: "RECEIVE_USERS", users: [


    ]});
  }, 1000);
}

export function createUser(data){

  dispatcher.dispatch({
    type: "CREATE_USER",
    data
  })
}