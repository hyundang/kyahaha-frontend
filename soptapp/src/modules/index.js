import { combineReducers } from "redux";
import NickNameChange from './NickNameChange';
import ClickChange from './ClickChange';

const rootReducer = combineReducers({
    NickNameChange,
    ClickChange,
});


export default rootReducer;