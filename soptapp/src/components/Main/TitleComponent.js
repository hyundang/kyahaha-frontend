import style from 'styled-components';

const Wrap = style.div`
    margin-left: 10vw;
    margin-top: 10vh;
`

const Title = style.div`
    font-size: 3rem;
    color: 3F3F3F;
`;

const Content = style.div`
    font-size: 1rem;
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
                <Title>
                    <Nickname>{value.nickname}</Nickname>을 위한 아티클
                </Title>
                <Content>당신에게 필요한 정보를 낚아가세요.</Content>  
            </Wrap>
        </>
    );
}

export default TitleComponent;