import PartContainer from '../containers/Main/PartContainer';

import React, {useState,useEffect,useRef} from 'react'
import Modal from '../components/Modal';
import style from 'styled-components';
import {useDispatch,useSelector} from 'react-redux';
import {clickChange} from '../modules/ClickChange';

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


const MainPage = () => {
    const dispatch = useDispatch();
    const {isClick} = useSelector(state => ({
        isClick: state.ClickChange.isClick,
    }));
    
    const onHandleClick = (e) => {
        e.preventDefault();
        dispatch(clickChange(true));
    }

    return(
        <> 
            
            <PartWrap>
                <PartContainer onClick={onHandleClick} partInfo={partInfo[0]}/>
                <PartContainer onClick={onHandleClick} partInfo={partInfo[1]}/>
                <PartContainer onClick={onHandleClick} partInfo={partInfo[2]}/>
                <PartContainer onClick={onHandleClick} partInfo={partInfo[3]}/>
                <PartContainer onClick={onHandleClick} partInfo={partInfo[4]}/>
                <PartContainer onClick={onHandleClick} partInfo={partInfo[5]}/>
            </PartWrap>

            <Modal isClick={isClick}/>
        </>
    )
}

export default MainPage;