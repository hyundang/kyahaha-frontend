import LogoContainer from '../containers/Login/LogoContainer';
import InputContainer from '../containers/Login/InputContainer';
import style from 'styled-components';


const Wrap = style.div`
    width: 100vw;
    position: absolute;
    
`;

const LoginPage = ({history}) => {
    return(
        <>
            <Wrap>
                <LogoContainer />
                <InputContainer history={history}/>
            </Wrap>
        </>
    )
}

export default LoginPage;