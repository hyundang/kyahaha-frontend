import PostContainer from '../containers/PostList/PostContainer';
import PostListContainer from '../containers/PostList/PostListContainer';
import style from 'styled-components';

const Wrap = style.div`
    width: 100vw;
    height: 100vh;
`;

const TextWrap = style.div`
    width: 100vw;
    height: 25vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: white;
`;

const Text = style.div`
    font-size: 3vw;
    font-weight: bold;
    margin-left: 16vw;
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
                <Text>멈추면 비로소 할 수 있는 것들</Text>
                <Text>당신을 위한 휴식 레퍼런스</Text>
                <Space />
            </TextWrap>
            <PostListContainer />
        </Wrap>
        </>
    )
}

export default PostListPage;