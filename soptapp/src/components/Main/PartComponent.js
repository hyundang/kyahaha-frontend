import style from 'styled-components';
// import foodImg from '../../assets/image/5.png';

const Part = style.div`
    border: 1px dotted #bcbcbc;
    align-items: center;
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

const PartComponent = ({onClick, partInfo}) => {
    return(
        <>
            <Part onClick={onClick}>
                <Title>{partInfo.title}</Title>
                <SubTitle>{partInfo.subTitle}</SubTitle>
            </Part>
        </>
    );
}

export default PartComponent;