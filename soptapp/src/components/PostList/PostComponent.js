import style from 'styled-components';


const PostWrap = style.div`
    border: 1px solid black;
    background-image: url(${props => props.image});
    background-size: cover;
`;

const PostText = style.div`

`;

const PostProfileWrap = style.div`

`;

const PostImg = style.img`
    width: 50px;
    height: 50px;
`;

const PostName = style.div`

`;

const PostLikeWrap = style.div`

`;

const PostLikeImg = style.img`
    
`;

const PostLikeNumer = style.div`

`;


const PostComponent = ({post}) => {
    return(
        <>
        <PostWrap image={post.postImageUrl}>
            <PostText>{post.contents}</PostText>
            <PostProfileWrap>
                <PostImg src={post.postImageUrl}/>
                <PostName>행복한 연어</PostName>
                <PostLikeWrap>
                    <PostLikeImg/>
                    <PostLikeNumer>3</PostLikeNumer>
                </PostLikeWrap>
            </PostProfileWrap>
        </PostWrap>
        </>
    )
}

export default PostComponent;