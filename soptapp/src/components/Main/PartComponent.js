import React, { useState } from 'react';
import style from 'styled-components';
import {useSelector} from 'react-redux';

const Part = style.div`
    border: 1px dotted #bcbcbc;
    align-items: center;
    background-image: url(${props => props.isHover ? 
        ((props.value == props.id)? props.partInfo.img : props.partInfo.img_BW) 
        : props.partInfo.img_BW});
    background-size: cover;
    padding: 7vh 0;
    background-color: rgba(0,0,0,0.2);
`;

const Title = style.div`
    font-size: 3vw;
    font-weight: 700;
    text-align: center;
    color: white;
`;

const SubTitle = style.div`
    font-size: 1vw;
    font-weight: regular;
    text-align: center;
    color: white;
`;


const PartComponent = ({ onClick,partInfo, id, onHandleMouseOver, onHandleMouseLeave }) => {
    const {isHover, value} = useSelector(state=>({
        isHover: state.HoverChange.isHover,
        value: state.HoverChange.value,
    }))
    //console.log(isHover);
    //console.log(value);
    
    return(
        <>
            <Part onClick={onClick} isHover={isHover} value={value} id={id} partInfo={partInfo} onMouseOver={onHandleMouseOver} onMouseLeave={onHandleMouseLeave}>
                <Title>{partInfo.title}</Title>
                <SubTitle>{partInfo.subTitle}</SubTitle>
            </Part>
        </>
    );
}

export default PartComponent;