import style from 'styled-components';
import PostComponent from './PostComponent';

const Wrap = style.div`
    width: 80vw;
    height: 80vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

const PostListComponent = () => {
    return(
        <>
            <Wrap>
                <PostComponent />
                <PostComponent />
                <PostComponent />
                <PostComponent />
                <PostComponent />
            </Wrap>
        </>
    )
}

export default PostListComponent;