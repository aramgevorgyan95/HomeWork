import { combineReducers } from "redux";
import userReducer from "./userReducer";

const reducers = combineReducers({
    // students: ()=> {},
    user: userReducer
    // doctor: doctorData
})

export default reducers;