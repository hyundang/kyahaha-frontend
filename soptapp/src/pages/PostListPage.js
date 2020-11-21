import PostContainer from '../containers/PostList/PostContainer';
import PostListContainer from '../containers/PostList/PostListContainer';
import style from 'styled-components';
import logo from '../assets/icon/logo_blue.png';

const Wrap = style.div`
    width: 100vw;
    height: 100vh;
`;

const LogoImg = style.img`
    width: 7vw;
    height: 7vw;
    margin-top: 2vw;
`;

const TextWrap = style.div`
    width: 100vw;
    height: 35vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
`;

const TextOne = style.div`
    font-size: 1.3vw;
    font-weight: bold;
    color: #747272;
    margin-top: 2vw;
`;

const TextTwo = style.div`
    font-size: 2.5vw;
    font-weight: bold;
`;

const Space = style.div`
    width: 100vw;
    height: 5vw;
`;

const PostListPage = () => {
    return(
        <>
        <Wrap>
            <TextWrap>
                <Space />
                <LogoImg src={logo} />
                <TextOne>멈추면 비로소 할 수 있는 것들</TextOne>
                <TextTwo>당신을 위한 휴식 레퍼런스</TextTwo>
                <Space />
            </TextWrap>
            <PostListContainer />
        </Wrap>
        </>
    )
}

export default PostListPage;