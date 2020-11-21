import style from 'styled-components';
import logo from '../../assets/icon/logo_black.png';

const LogoWrap = style.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7vw;
`;

const LogoImg = style.img`
    width: 7vw;
    height: 7vw;
`;

const LogoText = style.div`
    color: white;
    font-size: 2.6vw;
    font-weight: bold;
`;


const LogoComponent = () => {
    return(
        <>
            <LogoWrap>
                <LogoImg src={logo}/>
                <LogoText>당신은 누구신가요?</LogoText>
                <LogoText>당신에 대해 알려 주세요!</LogoText>
            </LogoWrap>
        </>
    )
}

export default LogoComponent;