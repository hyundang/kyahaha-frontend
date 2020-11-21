import React, {useState,useEffect,useRef} from 'react'
import style from 'styled-components';

const BackContainer = style.div`
    display: ${props=>props.isClick ? 'box' : 'none'};
    position: absolute;
    top: 0;
    z-index: 1000;
    width: 100vw;
    height : 100vh;
    background: rgba(0, 0, 0, 0.7);
`;

const Wrap = style.div`
    position: absolute;
    top: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`;

const ModalContainer = style.div`
display : flex;
flex-direction:column;
align-items:center;
position : absolute;
width: 75.6250vw;
height: 20.2778vw;
color: white;
`;
const DateContainer = style.div`
display: flex;
justify-content:center;
align-items:center;
width: 40.9722vw;
height: 5.1389vw;
font-weight: bold;
font-size: 3.4722vw;
line-height: 5.1389vw;
`;

const TimeContainer = style.div`
display: flex;
justify-content:center;
align-items:center;
width: 68.6806vw;
height: 15.4167vw;
font-weight: bold;
font-size: 9.4167vw;
`;

const Button = style.div`
margin-top: 25vw;
display : flex;
justify-content:center;
align-items:center;
background: #EF8138;
width: 32.9861vw;
height: 6.2500vw;
border: 1px solid #EF8138;
border-radius: 7.4306vw;
font-weight: bold;
font-size: 3.4722vw;
line-height: 5.1389vw;
cursor : pointer;
color: white;
`;
const Modal = ({isClick, history}) => {
    let date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const clockDate = date.getDate();
    const day = date.getDay();
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const [hour,setHour] = useState(0); // 0으로 초기화 바뀌는 state부분을 생각
    const [minute,setMinute] = useState(0); // 0으로 초기화 바뀌는 state부분을 생각
    const [second,setSecond] = useState(0); // 0으로 초기화 바뀌는 state부분을 생각
    const [mili,setMili] = useState(0);

    const tmp = useRef(); // 변경가능한 값을 담고 있는 상자
    const onAutoIncrease = () => {  
        setHour(date.getHours());
        setMinute(date.getMinutes());
        setSecond(date.getSeconds());
        setMili(date.getMilliseconds());
    }
    // react에서 Interval 사용할때 아래와 같이 사용해아함
    useEffect(() => {
        tmp.current = onAutoIncrease;
    });

    useEffect(()=>{
        function tick() {
            tmp.current();
        } 
        let id = setInterval(tick, 1);
        return () => clearInterval(id);
    },[])

    
    const onHandleClick = (e) => {
        e.preventDefault();
        history.push('/healing');
    }


    return(
        <>
        <BackContainer isClick={isClick}>
            <Wrap>
                <ModalContainer>

                    <DateContainer>
                    {year}년 {month+1}월 {clockDate}일 {week[day]}요일
                    </DateContainer>
                    <TimeContainer>
                    {hour.toLocaleString()} : {minute.toLocaleString()} : {second.toLocaleString()} : {mili.toLocaleString()}
                    </TimeContainer>

                </ModalContainer>
                <Button onClick={onHandleClick}>
                    멈추면 보이는 것들
                </Button>
            </Wrap>
        </BackContainer>
        </>

    )
}

export default Modal;