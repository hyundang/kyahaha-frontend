import style from "styled-components";
import PostComponent from "./PostComponent";
import axios from "axios";
import { useEffect, useState } from "react";

const WrapConatiner = style.div`
`;
const Wrap = style.div`
    position: absolute;    
    width: 100vw;
    margin-left: -33vw;
    left: 50%;
    top: 38vh;
    overflow: hidden;
    z-index: -1;
`;

const Space = style.div`
    height: 3vh;
`;

const PostWrap = style.div`
    position: relative;
    width: 66vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

const FooterWrap = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 10vw;
    margin-right: 33vw;
`;

const TextWrap = style.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    width: 30vw;
`;

const Text = style.div`
    font-size: 1vw;
    color: #8E8E8E;
    margin-bottom: 1vw;
`;

const PostListComponent = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function get() {
      const axiosPosts = await axios.get("http://52.78.212.95:3000/api/posts");
      // console.log('통신 : ', axiosPosts);
      const posts = axiosPosts.data.data;
      setPosts(posts);
    }
    get();
  }, []);
  return (
    <>
      <Wrap>
        <Space />
        <PostWrap>
          {/* myArray.slice(0).reverse().map */}
          {posts
            .slice(0)
            .reverse()
            .map((post, i) => {
              // console.log('테스트 : ', post);
              return <PostComponent key={i} post={post} />;
            })}
          <Space />
        </PostWrap>
        <FooterWrap>
          <TextWrap>
            <Text>소개</Text>
            <Text>블로그</Text>
            <Text>도움말</Text>
            <Text>API</Text>
            <Text>개인정보처리방침</Text>
            <Text>약관</Text>
            <Text>위치</Text>
          </TextWrap>
          <Text>ⓒ 2020 Fishing from SOPT</Text>
        </FooterWrap>
      </Wrap>
    </>
  );
};

export default PostListComponent;
