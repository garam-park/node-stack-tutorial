import {get} from 'jquery';
import ServerActions from './actions/ServerActions'

let API = {
  fetchLinks(){
    console.log("Api fetchLinks");
    get('/data/links').done(resp => {
      // console.log(resp);
      ServerActions.receiveLinks(resp);
    })
  }
}

export default API;
