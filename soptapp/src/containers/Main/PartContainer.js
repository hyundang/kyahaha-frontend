import PartComponent from '../../components/Main/PartComponent';


const PartContainer = ({partInfo, onClick, mouseEnter, mouseLeave}) => {
    return(
        <>
            <PartComponent 
                onClick={onClick} 
                partInfo={partInfo}
                mouseEnter={mouseEnter}
                mouseLeave={mouseLeave}/>
        </>
    );
}

export default PartContainer;