import style from 'styled-components';


const PostWrap = style.div`
    border: 1px solid black;
    background-image: url(${props => props.image});
    background-size: cover;
    width: 20vw;
    height: 20vw;
    margin-bottom: 2vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const PostText = style.div`
    color: white;
    font-size: 2vw;
    text-align: center;
    width: 15vw;
`;

const PostProfileWrap = style.div`

`;

const PostImg = style.img`
    width: 50px;
    height: 50px;
`;

const PostName = style.div`
    color: white;
`;

const PostLikeWrap = style.div`

`;

const PostLikeImg = style.img`
    
`;

const PostLikeNumer = style.div`
    color: white;
`;


const PostComponent = ({post}) => {
    return(
        <>
        <PostWrap image={post.postImageUrl}>
            <PostText>{post.contents}</PostText>
            {/*
            <PostProfileWrap>
                <PostImg src={post.postImageUrl}/>
                <PostName>행복한 연어</PostName>
                <PostLikeWrap>
                    <PostLikeImg/>
                    <PostLikeNumer>3</PostLikeNumer>
                </PostLikeWrap>
            </PostProfileWrap>
            */}
        </PostWrap>
        </>
    )
}

export default PostComponent;