import style from 'styled-components';
import exchange from '../../assets/icon/exchange.png'


const InputWrap = style.div`

`;

const Form = style.form`

`;

const NickWrap = style.div`
    display: flex;
    flex-direction: row;
    width: 30vw;
    position: absolute;
    margin-left: 7vw;
    margin-top: 10vw;
`;

const NickName = style.div`
    border-bottom: 0.2rem solid #999999;
    color: white;
    font-size: 1.5vw;
    width: 25vw;
    padding-bottom: 0.7vw;
    text-align: center;
    color: #999999;
    position: absolute;
    z-index: 0;
`;

const NickBtn = style.img`
    width: 2vw;
    height: 2vw;
    margin-left: 22vw;
    position: absolute;
    z-index: 10;
`;

const PartSelectWrap = style.div`
    color: #999999;
    margin-top: 17vw;
    font-size: 1.8vw;

`;

const PartSelect = style.input`
    
`;

const InputComponent = ({onHandleClick, onHandleSelect, name}) => {
    return(
        <>
            <InputWrap>
                <NickWrap>
                    <NickName>{name}</NickName>
                    <NickBtn src={exchange} onClick={onHandleClick}/>
                </NickWrap>
                <Form>
                    <PartSelectWrap>
                        <PartSelect id="plan" type="radio" name='part' onClick={onHandleSelect}/>plan
                        <PartSelect id="design" type="radio" name="part" onClick={onHandleSelect} />design
                        <PartSelect id="android" type="radio" name="part" onClick={onHandleSelect}/>android
                        <PartSelect id="ios" type="radio" name="part" onClick={onHandleSelect}/>ios
                        <PartSelect id="server" type="radio" name="part" onClick={onHandleSelect}/>server
                        <PartSelect id="web" type="radio" name="part" onClick={onHandleSelect}/>web
                    </PartSelectWrap>
                </Form>
            </InputWrap>
        </>
    )
}

export default InputComponent;