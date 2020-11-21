import InputComponent from '../../components/Login/InputComponent';
import {useDispatch,useSelector} from 'react-redux';
import {nameChange, partChange} from '../../modules/NickNameChange';


const InputContainer = ({history}) => { 
    const dispatch = useDispatch();
    const {name} = useSelector(state => ({
        name: state.NickNameChange.name,
    }));

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

    const onHandleClick = (e) => {
        e.preventDefault();
        dispatch(nameChange(nick));
        console.log(nick);
    }
    
    const onHandleSelect = (e) => {
        dispatch(partChange(e.target.id));
        console.log(e.target.id);
        history.push('/main');
    }

    
    return(
        <>
            <InputComponent 
                onHandleClick={onHandleClick} 
                onHandleSelect={onHandleSelect} 
                name={name}
            />
        </>
    )
}

export default InputContainer;