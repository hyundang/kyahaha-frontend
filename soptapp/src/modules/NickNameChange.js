import { createAction, handleActions } from 'redux-actions';

const generateRandomNickname = () => {
    const nouns = [
        "연어",
        "금붕어",
        "상어",
        "돌고래",
        "해마",
        "불가사리",
        "소라",
        "산호",
        "새우",
        "고래",
        "말미잘",
        "랍스터",
        "고등어"
    ];
  
    const adjs = [
      "침대에 누운",
      "따듯한 차를 마시는",
      "쉬어가는",
      "잠시 멈춘",
      "여행하는",
      "낚시하는",
      "배부른",
      "친절한",
      "나른한",
      "모범적인",
    ];
    const randomAdjIdx = parseInt(Math.random() * adjs.length);
    const randomNounIdx = parseInt(Math.random() * nouns.length);
    const randomNickname = adjs[randomAdjIdx] + " " + nouns[randomNounIdx];
    return randomNickname;
};

const nick = generateRandomNickname();

const initState = {
    name: nick,
    part: "",
};

const NAME_CHANGE = "user/NAME_CHANGE";
const PART_CHANGE = "user/PART_CHANGE"

export const nameChange = createAction(NAME_CHANGE, (name)=>{
    console.log('테스트 : ', name);
    return {
        name,
    }})
export const partChange = createAction(PART_CHANGE,(part)=>{
    console.log('테스트 : ', part);
    return {
        part,
}})

const reducer = handleActions(
    {
        [NAME_CHANGE]: (state, {payload: {name}}) => ({
            ...state,
            name: name,
        }),
        [PART_CHANGE]: (state, {payload: {part}}) => ({
            ...state,
            part: part,
        }),
    },
    initState
)


export default reducer;
