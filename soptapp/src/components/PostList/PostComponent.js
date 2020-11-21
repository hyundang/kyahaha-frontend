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
    position: relative;
`;

const PostText = style.div`
    width: 15vw;
    padding: 0vw 2.5vw;
    color: white;
    font-size: 2vw;
    text-align: center;
    z-index: 150;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
`;

const PostBack = style.div`
    width: 20vw;
    height: 20vw;
    position: absolute;
    z-index: 100;
    background-color: rgba(0,0,0,0.4);
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
            <PostBack />
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