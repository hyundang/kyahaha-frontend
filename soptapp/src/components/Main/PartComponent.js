import React, { useState } from 'react';
import style from 'styled-components';

const Part = style.div`
    border: 1px dotted #bcbcbc;
    align-items: center;
    background-image: url(${props => props.img});
`;

const Title = style.div`
    font-size: 3rem;
    font-weight: 900;
    line-height: 7vw;
    text-align: center;
`;

const SubTitle = style.div`
    font-size: 1rem;
    font-weight: 900;
    line-height: 3vw;
    text-align: center;
`;


const PartComponent = ({onClick, partInfo, mouseEnter, mouseLeave}) => {
    return(
        <>
            <Part onClick={onClick} img={partInfo.img} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <Title>{partInfo.title}</Title>
                <SubTitle>{partInfo.subTitle}</SubTitle>
            </Part>
        </>
    );
}

export default PartComponent;