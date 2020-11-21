import style from 'styled-components';


const PostWrap = style.div`
    border: 1px solid black;
`;

const PostText = style.div`

`;

const PostProfileWrap = style.div`

`;

const PostImg = style.img`

`;

const PostName = style.div`

`;

const PostLikeWrap = style.div`

`;

const PostLikeImg = style.img`

`;

const PostLikeNumer = style.div`

`;


const PostComponent = () => {
    return(
        <>
         <PostWrap >
             <PostText>커피 한잔 어때요</PostText>
             <PostProfileWrap>
                 <PostImg />
                 <PostName>행복한 연어</PostName>
                 <PostLikeWrap>
                     <PostLikeImg />
                     <PostLikeNumer>3</PostLikeNumer>
                 </PostLikeWrap>
             </PostProfileWrap>
         </PostWrap>
        </>
    )
}

export default PostComponent;