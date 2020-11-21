import PartComponent from '../../components/Main/PartComponent';


const PartContainer = ({partInfo, onClick}) => {
    return(
        <>
            <PartComponent onClick={onClick} partInfo={partInfo}/>
        </>
    );
}

export default PartContainer;