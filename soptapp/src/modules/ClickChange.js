import { createAction, handleAction, handleActions } from 'redux-actions';

const initState = {
    isClick: false,
}

const CLICK_TRUE = "CLICK_TRUE";

export const clickChange = createAction(CLICK_TRUE, (isClick)=>({
    isClick,
}))

const reducer = handleActions(
    {
        [CLICK_TRUE] : (state, {payload: {isClick}}) => ({
            ...state,
            isClick: isClick,
        }),
    },
    initState
);

export default reducer;