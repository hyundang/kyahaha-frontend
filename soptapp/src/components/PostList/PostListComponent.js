import style from 'styled-components';
import PostComponent from './PostComponent';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Wrap = style.div`
    position: absolute;
    margin-left: -33vw;
    left: 50%;
    width: 100vw;
    top: 25vh;
    overflow: hidden;
    z-index: -1;
    
`;

const PostWrap = style.div`
    position: relative;
    width: 66vw;
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
               <PostWrap>
                    {posts.map((post, i) => {
                        // console.log('테스트 : ', post);
                        return (<PostComponent key={i} post={post}/>)
                    })}
                </PostWrap> 
            </Wrap>
        </>
    )
}

export default PostListComponent;