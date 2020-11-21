import style from 'styled-components';

const InputWrap = style.div`

`;

const Form = style.form`

`;

const NickWrap = style.div`
    display: flex;
    flex-direction: row;
`;

const NickName = style.div`

`;

const NickBtn = style.button`

`;

const PartSelectWrap = style.div`
    
`;

const PartSelect = style.input`

`;

const InputComponent = ({onHandleClick, onHandleSelect, name}) => {
    return(
        <>
            <InputWrap>
                <NickWrap>
                    <NickName>{name}</NickName>
                    <NickBtn onClick={onHandleClick}>변경</NickBtn>
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