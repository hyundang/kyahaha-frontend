import { createAction, handleAction, handleActions } from 'redux-actions';

const initState = {
    isHover: false,
    value: -1,
}

const HOVER_P_TRUE = "HOVER_P_TRUE";
const HOVER_D_TRUE = "HOVER_D_TRUE";
const HOVER_A_TRUE = "HOVER_A_TRUE";
const HOVER_I_TRUE = "HOVER_I_TRUE";
const HOVER_S_TRUE = "HOVER_S_TRUE";
const HOVER_W_TRUE = "HOVER_W_TRUE";

export const hoverPChange = createAction(HOVER_P_TRUE, (isHover)=>({
    isHover,
}))
export const hoverDChange = createAction(HOVER_D_TRUE, (isHover)=>({
    isHover,
}))
export const hoverAChange = createAction(HOVER_A_TRUE, (isHover)=>({
    isHover,
}))
export const hoverIChange = createAction(HOVER_I_TRUE, (isHover)=>({
    isHover,
}))
export const hoverSChange = createAction(HOVER_S_TRUE, (isHover)=>({
    isHover,
}))
export const hoverWChange = createAction(HOVER_W_TRUE, (isHover)=>({
    isHover,
}))

const reducer = handleActions(
    {
        [HOVER_P_TRUE] : (state, {payload: {isHover}}) => ({
            ...state,
            isHover: isHover,
            value: 0,
        }),
        [HOVER_D_TRUE] : (state, {payload: {isHover}}) => ({
            ...state,
            isHover: isHover,
            value: 1,
        }),
        [HOVER_A_TRUE] : (state, {payload: {isHover}}) => ({
            ...state,
            isHover: isHover,
            value: 2,
        }),
        [HOVER_I_TRUE] : (state, {payload: {isHover}}) => ({
            ...state,
            isHover: isHover,
            value: 3,
        }),
        [HOVER_S_TRUE] : (state, {payload: {isHover}}) => ({
            ...state,
            isHover: isHover,
            value: 4,
        }),
        [HOVER_W_TRUE] : (state, {payload: {isHover}}) => ({
            ...state,
            isHover: isHover,
            value: 5,
        }),
    },
    initState
);

export default reducer;