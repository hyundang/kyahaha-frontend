import style from 'styled-components';
import axios from 'axios';
import { useEffect, useState, useRef} from 'react';


const Container = style.div`
    height: 100vh;
    background-image: url(${props => props.url});
    transition : background-image 0.8s ease-in-out;
    background-size: cover;
`;

const TextContainer = style.div`
    display : flex;
    flex-direction : column;
    width: 100vw;
    height: 35vh;
    justify-content : center;
    align-items : center;
    background: rgba(23, 23, 23, 0.6);
`;

const TextTitle= style.span`
display : flex;
justify-content : center;
align-items : center;
font-size: 3vw;
line-height: 74px;
width: 41.0417vw;
height: 5.1389vw;
color: #FFFFFF;
`;

const TextSubTitle = style.span`
display : flex;
width: 59.0972vw;
height: 8.1944vw;
justify-content : center;
align-items : center;
font-weight: 500;
font-size: 2.7vw;
line-height: 59px;
color: #FFFFFF;
`;

const TextSubTitle2 = style.span`
display : flex;
width: 59.0972vw;
height: 8.1944vw;
justify-content : center;
align-items : center;
font-weight: 500;
font-size: 2.3vw;
line-height: 59px;
color: #FFFFFF;
`;

const Button = style.div`
    display : ${props=>props.count > 1 ? 'flex' : 'none'};
    justify-content:center;
    align-items:center;
    width: 34vw;
    height: 6.2500vw;
    position : absolute;
    margin-left : -15vw;
    left: 50%;
    bottom : 10%;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 7.4306vw;
    font-weight: bold;
    font-size: 3.4722vw;
    line-height: 5.1389vw;
    cursor : pointer;
    background-color : rgba(0,0,0,0.3);
    color: #FEFEFE;
    z-index : 9000;
    `;

    const HealingComponent = ({count,setCount,onClick}) => {
        const [image, setImage] = useState([]); 
        console.log('초기화')
        //const [count,setCount] = useState(0);
    
            useEffect(() => {
                const getImage = async () => {
                    const axiosPosts = await axios.get('http://52.78.212.95:3000/api/healings');
                    // console.log('통신 : ', axiosPosts);
                    const randomImage = axiosPosts.data.data;
                    setImage(randomImage);
                    setCount()
                    // setCount(count => count+1);
                    
                }
                setInterval(getImage, 4000);
                //return () => clearInterval(id);
            }, []);

    
    return(
        <>
            <Container url={image}>
                <TextContainer>
                    <TextTitle>
                    당신은 유노윤호가 아닙니다.
                    </TextTitle>
                    <TextSubTitle>
                    “오늘 하루를 열심히 살잖아? 그럼 내일이 힘들어져”
                    </TextSubTitle>
                    <TextSubTitle2>
                    - 유노웅앵 -
                    </TextSubTitle2>

                </TextContainer>
                <Button count = {count} onClick = {onClick}>건너뛰기</Button>
            </Container>
        </>
    );
}

export default HealingComponent;