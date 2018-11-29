import {HUMID, LOGIN, TABLE} from '../actions/loginactions';
import {SIGNUP} from '../actions/loginactions';
import {TEMP} from '../actions/loginactions';
const initialState = {
    "stores":{

    }
};

const stores= (state = initialState, action) => {


    switch (action.type) {

        case LOGIN:
            console.log("im here in store");
            console.log("lid",action.data.login_id);
            console.log("email",action.data.email);
            console.log("status",action.data.status);
            return {
                ...state,
                "stores":{
                    "email":action.data.email,
                    "login_id":action.data.login_id,
                    "login":action.data.status,
                    "first_name": action.data.first_name
                }
            };

        case SIGNUP:
            console.log("im here in Signup store");
            console.log(action.data.status);
            console.log("email",action.data.email);
            console.log(stores);
            return {
                ...state,
                "stores":{
                    "status":action.data.status,
                    "email": action.data.email
                }
            };

        case TEMP:
            console.log("im here in Temp store");
            console.log(localStorage.setItem("temperature",action.data.temperature));
            console.log(stores);
            return {
                ...state,
                "stores":{
                    "tempval": action.data.temperature
                }
            };
        case HUMID:
            console.log("im here in humival store");
            console.log(localStorage.setItem("humid",action.data.humidity));
            console.log(stores);
            return {
                ...state,
                "stores":{
                    "humival": action.data.humidity
                }
            };

        case TABLE:
            console.log("im here in TABLE store");
            console.log(action.data.deviceData);
            console.log(stores);
            return {
                ...state,
                "stores":{
                    "tableData": action.data.deviceData
                }
            };
        default :
            return state;

    }
};

export default stores;