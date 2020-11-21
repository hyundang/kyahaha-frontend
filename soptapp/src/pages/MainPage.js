import PartContainer from '../containers/Main/PartContainer';
import TitleContainer from '../containers/Main/TitleContainer';

import React, {useState, useEffect, useRef} from 'react'
import Modal from '../components/Modal';
import style from 'styled-components';
import {useDispatch,useSelector} from 'react-redux';
import {hoverPChange,hoverDChange,hoverAChange,hoverIChange,hoverSChange,hoverWChange} from '../modules/HoverChange';
import {clickChange} from '../modules/ClickChange';

import main_android from '../assets/main/main_android.png';
import main_android_BW from '../assets/main/main_android_BW.png';
import main_design from '../assets/main/main_design.jpg';
import main_design_BW from '../assets/main/main_design_BW.jpg';
import main_ios from '../assets/main/main_ios.jpg';
import main_ios_BW from '../assets/main/main_ios_BW.jpg';
import main_plan from '../assets/main/main_plan.jpg';
import main_plan_BW from '../assets/main/main_plan_BW.jpg';
import main_server from '../assets/main/main_server.jpg';
import main_server_BW from '../assets/main/main_server_BW.jpg';
import main_web from '../assets/main/main_web.jpg';
import main_web_BW from '../assets/main/main_web_BW.jpg';



const PartWrap = style.div`
    position: absolute;
    bottom: 7%;
    z-index: 0;
    width: 100vw;
    height: 55vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50% 50%;
`;

const partInfo = [
    {
        title: "Plan",
        subTitle: "기획 파트장처럼 창업에 진심이라면?",
        img: main_plan,
        img_BW: main_plan_BW
    },
    {
        title: "Design",
        subTitle: "한 눈에 들어오는 브랜딩을 하고 싶다면?",
        img: main_design,
        img_BW: main_design_BW
    },
    {
        title: "Android",
        subTitle: "범용성 있는 어플을 만들고 싶다면?",
        img: main_android,
        img_BW: main_android_BW
    },
    {
        title: "IOS",
        subTitle: "제2의 잡스가 되고 싶다면?",
        img: main_ios,
        img_BW: main_ios_BW
    },
    {
        title: "Server",
        subTitle: "깔끔한 API를 만들고 싶다면?",
        img: main_server,
        img_BW: main_server_BW
    },
    {
        title: "Web",
        subTitle: "어떤 애니메이션이든 자신 있고 싶다면?",
        img: main_web,
        img_BW: main_web_BW
    },
]


const MainPage = ({history}) => {
    const dispatch = useDispatch();
    const {nickname, isClick} = useSelector(state => ({
        nickname: state.NickNameChange.name,
        isClick: state.ClickChange.isClick,
    }));
    

    const onHandlePMouseOver = () => {
        console.log('0');
        dispatch(hoverPChange(true));
    }

    const onHandlePMouseLeave = () => {
        console.log('0 leave');
        dispatch(hoverPChange(false));
    }
    const onHandleDMouseOver = () => {
        console.log('over');
        dispatch(hoverDChange(true));
    }

    const onHandleDMouseLeave = () => {
        console.log('leave');
        dispatch(hoverDChange(false));
    }
    const onHandleAMouseOver = () => {
        //console.log('over');
        dispatch(hoverAChange(true));
    }

    const onHandleAMouseLeave = () => {
        //console.log('leave');
        dispatch(hoverAChange(false));
    }
    const onHandleIMouseOver = () => {
        //console.log('over');
        dispatch(hoverIChange(true));
    }

    const onHandleIMouseLeave = () => {
        //console.log('leave');
        dispatch(hoverIChange(false));
    }
    const onHandleSMouseOver = () => {
        //console.log('over');
        dispatch(hoverSChange(true));
    }

    const onHandleSMouseLeave = () => {
        //console.log('leave');
        dispatch(hoverSChange(false));
    }
    const onHandleWMouseOver = () => {
        //console.log('over');
        dispatch(hoverWChange(true));
    }

    const onHandleWMouseLeave = () => {
        //console.log('leave');
        dispatch(hoverWChange(false));
    }

    const onHandleClick = () => {
        dispatch(clickChange(true));
    }

    return(
        <>  
            <TitleContainer value={{nickname}}></TitleContainer>
            <PartWrap>
                <PartContainer onClick={onHandleClick} onHandleMouseOver={onHandlePMouseOver} onHandleMouseLeave={onHandlePMouseLeave} id={0} partInfo={partInfo[0]} />
                <PartContainer onClick={onHandleClick} onHandleMouseOver={onHandleDMouseOver} onHandleMouseLeave={onHandleDMouseLeave} id={1} partInfo={partInfo[1]} />
                <PartContainer onClick={onHandleClick} onHandleMouseOver={onHandleAMouseOver} onHandleMouseLeave={onHandleAMouseLeave} id={2} partInfo={partInfo[2]} />
                <PartContainer onClick={onHandleClick} onHandleMouseOver={onHandleIMouseOver} onHandleMouseLeave={onHandleIMouseLeave} id={3} partInfo={partInfo[3]} />
                <PartContainer onClick={onHandleClick} onHandleMouseOver={onHandleSMouseOver} onHandleMouseLeave={onHandleSMouseLeave} id={4} partInfo={partInfo[4]} />
                <PartContainer onClick={onHandleClick} onHandleMouseOver={onHandleWMouseOver} onHandleMouseLeave={onHandleWMouseLeave} id={5} partInfo={partInfo[5]} />
            </PartWrap>
            <Modal isClick={isClick} history={history}/>
        </>
    )
}

export default MainPage;