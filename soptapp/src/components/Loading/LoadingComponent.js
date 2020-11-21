import style from 'styled-components';
import logo from '../../assets/icon/logo.jpg';
import {useEffect, useState} from 'react';

const Div = style.div`
  
`;

const Wrap = style.div`
    position: absolute;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    display: ${props => props.isFlex ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    opacity: 0;

    animation: fadeout 2s;
    -moz-animation: fadeout 2s; /* Firefox */
    -webkit-animation: fadeout 2s; /* Safari and Chrome */
    -o-animation: fadeout 2s; /* Opera */
    @keyframes fadeout {
        from {
            opacity:1;
        }
        to {
            opacity:0;
        }
    }
    @-moz-keyframes fadeout { /* Firefox */
        from {
            opacity:1;
        }
        to {
            opacity:0;
        }
    }
    @-webkit-keyframes fadeout { /* Safari and Chrome */
        from {
            opacity:1;
        }
        to {
            opacity:0;
        }
    }
    @-o-keyframes fadeout { /* Opera */
        from {
            opacity:1;
        }
        to {
            opacity:0;
        }
    }
    

`;



const LogoImg = style.img`
    width: 20vw;
    height: 20vw;
`;

const Text = style.div`
    margin-top: 1vw;
    font-size: 2vw;
`;


const LoadingComponent = () => {
    const [isFlex, setIsFlex] = useState(true);
    
     useEffect(() => {
         setInterval(() => {
             setIsFlex(false);
         }, 2000);
     }, [])


    return(
        <> 
            <Wrap isFlex={isFlex}>
                <LogoImg src={logo}/>
                <Text>당신에게 필요한 정보를 낚아가세요.</Text>
            </Wrap>
        </>
    )
}

export default LoadingComponent;