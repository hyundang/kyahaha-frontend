import { combineReducers } from "redux";
import NickNameChange from './NickNameChange';
import ClickChange from './ClickChange';
import HoverChange from './HoverChange';

const rootReducer = combineReducers({
    NickNameChange,
    ClickChange,
    HoverChange,
});


export default rootReducer;