import style from 'styled-components';
import logo from '../../assets/icon/logo_black.png';


const Wrap = style.div`
    margin-left: 10vw;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
`

const LogoImg = style.img`
    width: 5vw;
    height: 5vw;
`;

const Title = style.div`
    font-size: 3.2vw;
    color: 3F3F3F;
`;

const Content = style.div`
    font-size: 1.5vw;
    color: 3F3F3F;
`;

const Nickname = style.span`
    font-weight: 700;
    color: 3F3F3F;
`;

const TitleComponent = ({value}) => {
    return(
        <>  
            <Wrap>
                <LogoImg src={logo}/>
                <Title>
                    <Nickname>{value.nickname}</Nickname>을 위한 아티클
                </Title>
                <Content>당신에게 필요한 정보를 낚아가세요.</Content>  
            </Wrap>
        </>
    );
}

export default TitleComponent;