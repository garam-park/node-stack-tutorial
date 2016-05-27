import AppDispatcher from "../AppDispatcher"
import {ActionTypes} from "../Constans"

class ServerActions {
  receiveLinks(links){
    console.log("2. In ServerActions");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_LINKS,
      links
    });
  }
}
ServerActions = new ServerActions;
export default ServerActions;
