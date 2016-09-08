import dispatcher from "../dispatcher";

export function reloadUsers() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({type: "FETCH_USERS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_USERS", users: [

    ]});
  }, 1000);
}