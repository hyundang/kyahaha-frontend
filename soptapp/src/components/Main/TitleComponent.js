import style from 'styled-components';

const Title = style.div`
    font-size: 3rem;
`;

const Content = style.div`
    font-size: 1rem;
`;

const TitleComponent = ({value}) => {
    return(
        <>
            <Title>{value.nickname}위한 파트별 아티클</Title>
            <Content>{value.content}</Content>  
        </>
    );
}

export default TitleComponent;