import PartContainer from '../containers/Main/PartContainer';
import TitleContainer from '../containers/Main/TitleContainer';

import React, {useState, useEffect, useRef} from 'react'
import Modal from '../components/Modal';
import style from 'styled-components';
import {useDispatch,useSelector} from 'react-redux';
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
    z-index: 0;
    width: 100vw;
    height: 50vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 25% 25%;
`;

const partInfo = [
    {
        title: "Plan",
        subTitle: "aaaaa",
        img: 'http://superkts.com/img/css/bg0426.gif'
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


const MainPage = () => {
    const dispatch = useDispatch();
    const {isClick, nickname} = useSelector(state => ({
        isClick: state.ClickChange.isClick,
        nickname: state.NickNameChange.name
    }));
    
    const onHandleClick = (e) => {
        e.preventDefault();
        dispatch(clickChange(true));
    }

    

    return(
        <>  
            <TitleContainer value={{nickname}}></TitleContainer>
            <PartWrap>
                <PartContainer onClick={onHandleClick} partInfo={partInfo[0]}/>
                <PartContainer onClick={onHandleClick} partInfo={partInfo[1]}/>
                <PartContainer onClick={onHandleClick} partInfo={partInfo[2]}/>
                <PartContainer onClick={onHandleClick} partInfo={partInfo[3]}/>
                <PartContainer onClick={onHandleClick} partInfo={partInfo[4]}/>
                <PartContainer onClick={onHandleClick} partInfo={partInfo[5]}/>
            </PartWrap>

            {/* <Modal isClick={isClick}/> */}
        </>
    )
}

export default MainPage;