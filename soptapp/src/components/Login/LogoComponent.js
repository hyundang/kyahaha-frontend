import style from 'styled-components';

const LogoWrap = style.div`
    display:flex;
    flex-direction: column;
`;

const LogoImg = style.img`

`;

const LogoText = style.div`

`;


const LogoComponent = () => {
    return(
        <>
            <LogoWrap>
                <LogoImg />
                <LogoText>당신은 누구신가요?</LogoText>
            </LogoWrap>
        </>
    )
}

export default LogoComponent;