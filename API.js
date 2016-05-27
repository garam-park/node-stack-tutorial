import {get} from 'jquery';
import ServerActions from './actions/ServerActions'

let API = {
  fetchLinks(){
    console.log("0. Api fetchLinks");
    get('/data/links').done(resp => {
      console.log("1. Call Action");
      ServerActions.receiveLinks(resp);
    })
  }
}

export default API;
