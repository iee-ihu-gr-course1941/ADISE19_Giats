import { bake_cookie, read_cookie } from 'sfcookies';

class LoginValue {
    constructor() {
      this.state = {
        cookie_key : 'loggedin'
      };
    }

    ChangeValue(value){
      bake_cookie(this.state.cookie_key, value);

    };
    
    getLoginValue = () => {
       return read_cookie(this.state.cookie_key);
    }
}
  
export default new LoginValue();
  