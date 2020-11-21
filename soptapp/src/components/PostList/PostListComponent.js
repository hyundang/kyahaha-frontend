import style from 'styled-components';
import PostComponent from './PostComponent';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Wrap = style.div`
    width: 80vw;
    height: 80vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;




const PostListComponent = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function get() {
            const axiosPosts = await axios.get('http://52.78.212.95:3000/api/posts');
            // console.log('통신 : ', axiosPosts);
            const posts = axiosPosts.data.data;
            setPosts(posts);
        };
        get();
    }, [])
    return(
        <>
            <Wrap>
            {posts.map((post, i) => {
                // console.log('테스트 : ', post);
                return (<PostComponent key={i} post={post}/>)
            })}
            </Wrap>
        </>
    )
}

export default PostListComponent;