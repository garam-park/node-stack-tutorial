import {get,post} from 'jquery';
import ServerActions from './actions/ServerActions'

let API = {
  fetchLinks(){
    console.log("0. Api fetchLinks");
    post('/graphql',{
      query:
      `{
        links{
          _id,
          title,
          url
        }
      }`
    }).done(resp => {
      console.log("1. Call Action");
      ServerActions.receiveLinks(resp.data.links);
    })
  }
}

export default API;
