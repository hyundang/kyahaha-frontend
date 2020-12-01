import React, { useRef, useState } from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import plusImg from "../assets/icon/plus.png";
import axios from "axios";

const Container = styled.div`
  /* height: 100%;
  width: 100%; */
  /* padding-top: 123px; */
  padding: 123px 260px 47px 260px;
`;

const UpperContainer = styled.div`
  height: 100px;
  /* width: 100vw; */
  margin: auto;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
`;

const Copy = styled.div`
  width: 675px;
  height: 68px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 72px;
  color: #138aaa;
`;

const Narrative = styled.p`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 35px;
  white-space: pre-line;
  color: #3f3f3f;
`;

const BottomContainer = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: space-between;
`;

const ButtonsAndInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.div`
  /* width: 40%; */
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

const UploadButton = styled.div`
  padding: 25px 68px;
  background: #c4c4c4;
  border-radius: 80px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 43px;
  color: #ffffff;
  text-align: center;
  white-space: nowrap;
`;

const ShareButton = styled.button`
  padding: 25px 68px;
  background: #138aaa;
  border-radius: 80px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 43px;
  color: #ffffff;
  text-align: center;
  white-space: nowrap;
`;

const ChosenImage = styled.img`
  /* display: ${(props) => (props.src === "" ? "none" : "block")}; */
  width: 671px;
  height: 671px;
  border-radius: 25px;
`;

const ImageContainer = styled.div`
  width: 671px;
  height: 671px;
  border: 3px dashed #c4c4c4;
  box-sizing: border-box;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 auto;
`;

const PlusButton = styled.img`
  width: 198px;
  height: 198px;
`;

const ImageForm = styled.form``;

const ImageInput = styled.input``;

const Description = styled.p`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 36px;
  text-align: center;

  margin: 0 110px;
  white-space: pre-line;
  color: #c4c4c4;
`;

const ContentsInput = styled.textarea`
  margin-top: 40px;
  width: 653px;
  height: 400px;
  resize: none;
  background: #f3f3f3;
  border: none;
  border-radius: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 23px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 33px;
  color: #525252;
  :focus {
    outline: 0;
  }
  ::placeholder {
    color: #c4c4c4;
  }
`;

const ContentsInputLabel = styled.div`
  position: absolute;
  width: 168px;
  height: 34px;
  left: 1464px;
  top: 980px;
  z-index: 10;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 35px;

  color: #b4b3b3;
`;

const PostSharePage = ({ history }) => {
  const contentsInput = useInput("");
  const [image, setImage] = useState();
  const [didChooseImage, setDidChooseImage] = useState(false);

  const imageRef = useRef(null);

  const handleFormClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleSubmitButton = async () => {
    // document.getElementById("formId").submit();
    // upload()
    let fileData = new FormData();
    try {
      console.log(contentsInput.value);
      fileData.append("postImageUrl", image);
      fileData.append("contents", contentsInput.value);
      fileData.append("nickname", "first");
      console.log(image);
      const post = await axios({
        method: "post",
        url: "http://52.78.212.95:3000/api/posts",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: fileData,
      });
      console.log(post);
      history.push("/postlist");
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    imageRef.current.src = URL.createObjectURL(event.target.files[0]);
    imageRef.current.style = { display: "block" };
    setDidChooseImage(true);
  };
  const upload = async ({ event }) => {
    console.log(event);
    event.preventDefault();
    let fileData = new FormData();
    try {
      fileData.append("image", image);
      console.log(image);
      const post = await axios({
        method: "post",
        url: "http://52.78.212.95:3000/api/posts",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: {
          contents: contentsInput.value,
          postImageUrl: image,
        },
      });
      console.log(post);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <UpperContainer>
        <Copy>멈춰야 비로소 보이는 것들.</Copy>
        <Narrative>
          {`솝트에서 가장 가까이에 있는 중독은 바로 일중독입니다.\n \n성장을 위한 아티클, 레퍼런스가\n아닌 당신의 휴식을 위해 어떤 것을 생각해보셨나요?`}
        </Narrative>
      </UpperContainer>
      <ImageForm
        id="formId"
        onSubmit={(event) => upload({ event })}
        method="post"
        encType="mutipart/form-data">
        <BottomContainer>
          <ImageContainer onClick={() => handleFormClick()}>
            <ChosenImage style={{ display: "none" }} ref={imageRef} />
            {!didChooseImage && (
              <>
                <PlusButton src={plusImg} />
                <Description>{`당신의 휴식 사진을 추가 해 주세요.\n추가 하지 않는다면 Fishing의 멋진사진으로 당신의 휴식이 꾸며집니다.`}</Description>
              </>
            )}

            <ImageInput
              type="file"
              style={{ display: "none" }}
              name="image"
              id="imageInput"
              accept="image/*"
              onChange={(event) => handleImageChange(event)}
            />
          </ImageContainer>
          <ButtonsAndInput>
            <Buttons>
              <UploadButton onClick={() => handleFormClick()}>
                이미지 업로드
              </UploadButton>
              <ShareButton onClick={() => handleSubmitButton()}>
                바로 공유하기
              </ShareButton>
            </Buttons>
            <ContentsInput
              value={contentsInput.value}
              onChange={contentsInput.onChange}
              placeholder="당신의 휴식 방법을 공유해 주세요"
              maxLength="100"
            />
            <ContentsInputLabel>최대 100자 작성</ContentsInputLabel>
          </ButtonsAndInput>
        </BottomContainer>
      </ImageForm>
    </Container>
  );
};

export default PostSharePage;
