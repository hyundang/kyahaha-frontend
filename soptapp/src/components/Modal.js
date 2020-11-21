import React, {useState,useEffect,useRef} from 'react'
import style from 'styled-components';

const BackContainer = styled.div`
    display: ${props=>props.isClick ? 'box' : 'none'};
    position: absolute;
    z-index: 1000;
    width: 100vw;
    height : 100vh;
    background: rgba(0, 0, 0, 0.3);
`;
const ModalContainer = style.div`
display : flex;
flex-direction:column;
justify-content:center;
position:absolute;
align-items:center;
left : 40%;
top : 35%;
background: #FFFFFF;
width: 1233px;
height: 436px;
border: 1px solid rgba(0,0,0,0.2);
border-radius: 107px;
`;
const DateContainer = style.div`
display: flex;
justify-content:center;
align-items:center;
width: 590px;
height: 74px;
font-weight: bold;
font-size: 50px;
line-height: 74px;
`;

const TimeContainer = style.div`
display: flex;
justify-content:center;
align-items:center;
width: 989px;
height: 222px;
font-weight: bold;
font-size: 150px;
`;

const Button = style.div`
display : flex;
justify-content:center;
align-items:center;
position: absolute;
background: #FFFFFF;
top: 60%;
left : 46%;
width: 475px;
height: 90px;
border: 1px solid rgba(0,0,0,0.2);
border-radius: 107px;
font-weight: bold;
font-size: 50px;
line-height: 74px;
cursor : pointer;
`;
const Modal = ({isClick}) => {
    let date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const clockDate = date.getDate();
    const day = date.getDay();
    const mili = date.getMilliseconds();
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const [hour,setHour] = useState(0); // 0으로 초기화 바뀌는 state부분을 생각
    const [minute,setMinute] = useState(0); // 0으로 초기화 바뀌는 state부분을 생각
    const [second,setSecond] = useState(0); // 0으로 초기화 바뀌는 state부분을 생각

    const tmp = useRef(); // 변경가능한 값을 담고 있는 상자
    const onAutoIncrease = () => {  
        setHour(date.getHours());
        setMinute(date.getMinutes());
        setSecond(date.getSeconds());
    }
    // react에서 Interval 사용할때 아래와 같이 사용해아함
    useEffect(() => {
        tmp.current = onAutoIncrease;
    });

    useEffect(()=>{
        function tick() {
            tmp.current();
        } 
        let id = setInterval(tick, 1000);
        return () => clearInterval(id);
    },[])

    return(
        <>
        <BackContainer isClick={isClick}>
            <ModalContainer>

                <DateContainer>
                {year}년 {month+1}월 {clockDate}일 {week[day]}요일
                </DateContainer>
                <TimeContainer>
                {hour.toLocaleString()} : {minute.toLocaleString()} : {second.toLocaleString()}
                </TimeContainer>

            </ModalContainer>
            <Button>
                멈추면 보이는 것들
            </Button>
        </BackContainer>
        </>

    )
}

export default Modal;