import LogoContainer from '../containers/Login/LogoContainer';
import InputContainer from '../containers/Login/InputContainer';
import style from 'styled-components';
import LoadingPage from './LoadingPage';


const Wrap = style.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: rgba(0,0,0,0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
`;

const LoginPage = ({history}) => {
    return(
        <>  
            <LoadingPage />
            <Wrap>
                <LogoContainer />
                <InputContainer history={history}/>
            </Wrap>
        </>
    )
}

export default LoginPage;