import style from 'styled-components';

const Container = style.div`
    height: 100vh;
    background-image: url(${props => props.url});
    background-size: cover;
    index: -10;
`;

const TextContainer = style.div`
    width: 100vh;
    height: 35vh;
    border: 10px solid red;
`;

const Text = style.span`
    
`;

const HealingComponent = ({partInfo}) => {
    return(
        <>
            <Container url={'http://superkts.com/img/css/bg0426.gif'}>
                <TextContainer>
                    <Text>
                        
                    </Text>
                </TextContainer>
            </Container>
        </>
    );
}

export default HealingComponent;