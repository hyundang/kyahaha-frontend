import PartContainer from '../containers/Main/PartContainer';
import style from 'styled-components';

const PartWrap = style.div`
    width: 100vw;
    height: 50vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 25% 25%;
`;

const partInfo = [
    {
        title: "Plan",
        subTitle: "aaaaa"
    },
    {
        title: "Design",
        subTitle: "aaaaa"
    },
    {
        title: "Android",
        subTitle: "aaaaa"
    },
    {
        title: "IOS",
        subTitle: "aaaaa"
    },
    {
        title: "Server",
        subTitle: "aaaaa"
    },
    {
        title: "Web",
        subTitle: "aaaaa"
    },
]
const MainPage = () => {
    return(
        <> 
            <PartWrap>
                <PartContainer partInfo={partInfo[0]}/>
                <PartContainer partInfo={partInfo[1]}/>
                <PartContainer partInfo={partInfo[2]}/>
                <PartContainer partInfo={partInfo[3]}/>
                <PartContainer partInfo={partInfo[4]}/>
                <PartContainer partInfo={partInfo[5]}/>
            </PartWrap>
            
        </>
    )
}

export default MainPage;