import style from "styled-components";
import exchange from "../../assets/icon/exchange.png";

const InputWrap = style.div`
    
`;

const Form = style.form`
    
`;

const NickWrap = style.div`
    position: absolute;
    width: 42vw;
    margin-left: -21vw;
    left: 50%;
    height: 5vw;
    margin-top: 7vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const NickName = style.div`
    border-bottom: 0.1rem solid #999999;
    color: white;
    font-size: 1.5vw;
    width: 25vw;
    padding-bottom: 0.7vw;
    text-align: center;
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
    margin-top: 14vw;
    font-size: 1.8vw;
    padding-right: 6vw;
`;

const PartSelect = style.input`
    margin-left: 6vw;
`;

const InputComponent = ({ onHandleClick, onHandleSelect, name }) => {
  return (
    <>
      <InputWrap>
        <NickWrap>
          <NickName>{name}</NickName>
          <NickBtn src={exchange} onClick={onHandleClick} />
        </NickWrap>
        <Form>
          <PartSelectWrap>
            <PartSelect
              id="plan"
              type="radio"
              name="part"
              onClick={onHandleSelect}
            />
            기획
            <PartSelect
              id="design"
              type="radio"
              name="part"
              onClick={onHandleSelect}
            />
            디자인
            <PartSelect
              id="android"
              type="radio"
              name="part"
              onClick={onHandleSelect}
            />
            안드로이드
            <PartSelect
              id="ios"
              type="radio"
              name="part"
              onClick={onHandleSelect}
            />
            IOS
            <PartSelect
              id="server"
              type="radio"
              name="part"
              onClick={onHandleSelect}
            />
            서버
            <PartSelect
              id="web"
              type="radio"
              name="part"
              onClick={onHandleSelect}
            />
            웹
          </PartSelectWrap>
        </Form>
      </InputWrap>
    </>
  );
};

export default InputComponent;
