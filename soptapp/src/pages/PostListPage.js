import PostContainer from '../containers/PostList/PostContainer';
import PostListContainer from '../containers/PostList/PostListContainer';
import style from 'styled-components';

const Wrap = style.div`
    width: 100vw;
    height: 100vh;
`;

const TextWrap = style.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

const Text = style.div`

`;


const PostListPage = () => {
    return(
        <>
        <Wrap>
            <TextWrap>
                <Text>멈추면 비로소 할 수 있는 것들</Text>
                <Text>당신을 위한 휴식 레퍼런스</Text>
            </TextWrap>
            <PostListContainer />
        </Wrap>
        </>
    )
}

export default PostListPage;