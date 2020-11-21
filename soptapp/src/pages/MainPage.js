import PartContainer from '../containers/Main/PartContainer';
import TitleContainer from '../containers/Main/TitleContainer';
import React, {useState,useEffect,useRef} from 'react'
import style from 'styled-components';

const PartWrap = style.div`
    width: 100vw;
    height: 50vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 25% 25%;
`;

const partInfo = [
    {
        title: "Plan",
        subTitle: "aaaaa"
    },
    {
        title: "Design",
        subTitle: "aaaaa"
    },
    {
        title: "Android",
        subTitle: "aaaaa"
    },
    {
        title: "IOS",
        subTitle: "aaaaa"
    },
    {
        title: "Server",
        subTitle: "aaaaa"
    },
    {
        title: "Web",
        subTitle: "aaaaa"
    },
]

const Clock = style.div`
    display : flex;
    justify-content : center;
    align-items:center;
    font-size : 30px;
    position:absolute;
    top : 45%;
    left : 45%;
    font-weight: 500;
`;
const MainPage = () => {
    let date = new Date();
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
            <TitleContainer value={value}></TitleContainer>
            <PartWrap>
                <PartContainer partInfo={partInfo[0]}/>
                <PartContainer partInfo={partInfo[1]}/>
                <PartContainer partInfo={partInfo[2]}/>
                <PartContainer partInfo={partInfo[3]}/>
                <PartContainer partInfo={partInfo[4]}/>
                <PartContainer partInfo={partInfo[5]}/>
            </PartWrap>
            <Clock>
                clock : {hour.toLocaleString()} : {minute.toLocaleString()} : {second.toLocaleString()}
            </Clock>
        </>
    )
}

export default MainPage;